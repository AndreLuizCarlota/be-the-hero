const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ongs_id = request.headers.authorization;
        if (!ongs_id)
            return response.status(401).json({ error: 'Operation not permitted.' })

        const incidents = await connection('incidents')
            .where('ongs_id', ongs_id)
            .select('*');

        return response.json(incidents);
    }
}
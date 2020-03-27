const connection = require('../database/connection');

error = response => {
    return response.status(400).json({ error: 'No ONG Found with this ID.' });
}

module.exports = {
    async create(request, response) {
        const { id } = request.body;
        if (!id)
            return error(response);

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if (!ong)
            return error(response);

        return response.json(ong);
    }
}
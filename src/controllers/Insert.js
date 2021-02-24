const connection = require('../database/connection');

module.exports = {
    async view(_, response) {
        return response.render('insert');
    },

    async api(request, response) {
        const { firstName, lastName } = request.body;

        if (!firstName || !lastName) {
            return response
                .status(400)
                .json({
                    error: 'Missing required parameters'
                });
        }

        try {
            await connection('person')
                .insert({ firstName, lastName });
        } catch (err) {
            return response
                .status(500)
                .json({
                    error: 'Error inserting: ' + err.message
                });
        }

        return response
            .status(201)
            .send();
    }
}
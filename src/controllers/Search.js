const connection = require("../database/connection");

module.exports = async function (request, response) {
    const { q } = request.query;

    if (!q) {
        return response.render('search');
    }

    const person = await connection('person')
        .where('firstName', 'like', `%${q}%`)
        .orWhere('lastName', 'like', `%${q}%`)
        .orderBy('firstName', 'asc')
        .orderBy('lastName', 'asc')
        .select('*');

    return response.render('search', { search: q, person })
}
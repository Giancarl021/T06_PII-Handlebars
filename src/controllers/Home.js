const connection = require('../database/connection');

module.exports = async function (_, response) {
    const person = await connection('person')
        .orderBy('firstName', 'asc')
        .orderBy('lastName', 'asc')
        .select('*');
    
    return response.render('home', { person });
}
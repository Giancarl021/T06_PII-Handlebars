const connection = require('../database/connection');

module.exports = async function (_, response) {
    const person = await connection('person')
        .select('*');
    
    return response.render('home', { person });
}
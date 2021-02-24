const randomName = require('random-name');

const ROWS = 255;

module.exports = {
    async seed(knex) {
        const persons = new Array(ROWS)
            .fill(getRandomName)
            .map(fn => fn());

        return await knex('person')
            .insert(persons);
    }
}

function getRandomName() {
    return {
        firstName: randomName.first(),
        lastName: randomName.last()
    };
}
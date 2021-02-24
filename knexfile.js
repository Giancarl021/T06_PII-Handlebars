const locate = require('./src/util/locate');
const root = locate('src/database');

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: `${root}/db.sqlite`
    },
    migrations: {
        directory: `${root}/migrations`
    },

    seeds: {
        directory: `${root}/seeds`
    },

    useNullAsDefault: true
};
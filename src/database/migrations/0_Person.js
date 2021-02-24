module.exports = {
    async up(knex) {
        return knex.schema.createTable('person', table => {
            table.increments('id').primary();
            table.string('firstName').notNullable();
            table.string('lastName').notNullable();
        });
    },

    async down(knex) {
        return knex.schema.dropTable('person');
    }
}
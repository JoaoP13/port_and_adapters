import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('barbeiros', (table)=>{
        table.increments('id').primary();
        table.string('nome', 255).notNullable();
        table.string('servico', 255).notNullable(); //foreign key servico
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('barbeiros');
}


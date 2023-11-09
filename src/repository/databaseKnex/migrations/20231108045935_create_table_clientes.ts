import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('clientes', (table)=>{
        table.increments('id').primary();
        table.string('nome', 255).notNullable();
        table.integer('telefone').notNullable().unique();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('clientes');
}


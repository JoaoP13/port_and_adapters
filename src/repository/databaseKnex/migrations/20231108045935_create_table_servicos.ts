import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('servicos', (table)=>{
        table.increments('id').primary();
        table.string('nome', 255).notNullable().unique();
        table.integer('preco').notNullable();
        table.integer('duracao').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('servicos');
}


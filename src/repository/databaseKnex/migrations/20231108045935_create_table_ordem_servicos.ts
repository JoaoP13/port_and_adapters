import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('ordem_servicos', (table)=>{
        table.increments('id').primary();
        table.string('cliente', 255).notNullable(); //foreign key cliente
        table.string('servico', 255).notNullable(); //foreign key servico
        table.string('barbeiro', 255).notNullable(); //foreign key barbeiro
        table.date('data').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('ordem_servicos');
}


/// <reference path="../../types/main.d.ts" />

import ClienteRepository from "./cliente.repository";
import knex from "../databaseKnex/knexConfig";

const CLIENTE_DB = 'clientes'
const CREATE_SUCCESS = "Cliente created"
const UPDATE_SUCCESS = "Cliente updated"
const DELETE_SUCCESS = "Cliente deleted"

export default class implements ClienteRepository {

    async create(cliente: CreateCliente): Promise<String> {
        await knex(CLIENTE_DB).insert(cliente);
        return CREATE_SUCCESS
    }

    async update(nome:String,cliente: CreateCliente): Promise<String> {
        await knex(CLIENTE_DB).update(cliente).where({nome});
        return UPDATE_SUCCESS
    }

    async delete(nome:String): Promise<String> {
        await knex(CLIENTE_DB).where({nome}).del();
        return DELETE_SUCCESS
    }

    async list(): Promise<ClienteInterface[]> {
        return await knex(CLIENTE_DB)
    }

    listByFilters(filters: ListClientePossibleFilters): Promise<ClienteInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve([{
                id: 'uuid-1',
                nome: 'teste',
                telefone: 33333333
            }])
        })
    }
}
/// <reference path="../../types/main.d.ts" />

import ServicoRepository from "./servico.repository";
import knex from "../databaseKnex/knexConfig";

const SERVICO_DB = 'servicos'
const CREATE_SUCCESS = "Servico created"
const UPDATE_SUCCESS = "Servico updated"
const DELETE_SUCCESS = "Servico deleted"

export default class implements ServicoRepository {

    async create(servico: CreateServico): Promise<String> {
        await knex(SERVICO_DB).insert(servico);
        return CREATE_SUCCESS
    }

    async update(nome:String,servico: CreateServico): Promise<String> {
        await knex(SERVICO_DB).update(servico).where({nome});
        return UPDATE_SUCCESS
    }

    async delete(nome:String): Promise<String> {
        await knex(SERVICO_DB).where({nome}).del();
        return DELETE_SUCCESS
    }

    async list(): Promise<ServicoInterface[]> {
        return await knex(SERVICO_DB)
    }

    listByFilters(filters: ListServicoPossibleFilters): Promise<ServicoInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve([{
                id: 'uuid-1',
                nome: 'Teste',
                preco: 50,
                duracao: 30
            }])
        })
    }
}
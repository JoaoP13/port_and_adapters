/// <reference path="../../types/main.d.ts" />

import BarbeiroRepository from "./barbeiro.repository";
import knex from "../databaseKnex/knexConfig";

const BARBEIRO_DB = 'barbeiros'
const CREATE_SUCCESS = "Barbeiro created"
const UPDATE_SUCCESS = "Barbeiro updated"
const DELETE_SUCCESS = "Barbeiro deleted"

export default class implements BarbeiroRepository {

    async create(barbeiro: CreateBarbeiro): Promise<String> {
        await knex(BARBEIRO_DB).insert(barbeiro);
        return CREATE_SUCCESS
    }

    async update(servico:String,barbeiro: CreateBarbeiro): Promise<String> {
        await knex(BARBEIRO_DB).update(barbeiro).where({servico});
        return UPDATE_SUCCESS
    }

    async delete(servico:String): Promise<String> {
        await knex(BARBEIRO_DB).where({servico}).del();
        return DELETE_SUCCESS
    }

    async list(): Promise<BarbeiroInterface[]> {
        return await knex(BARBEIRO_DB)
    }

    listByFilters(filters: ListBarbeiroPossibleFilters): Promise<BarbeiroInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve([{
                id: 'uuid-1',
                nome: 'Teste',
                servico: 'teste'
            }])
        })
    }
}
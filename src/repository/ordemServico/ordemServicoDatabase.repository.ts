/// <reference path="../../types/main.d.ts" />

import OrdemServicoRepository from "./ordemServico.repository";
import knex from "../databaseKnex/knexConfig";

const ORDEM_SERVICO_DB = 'ordemServicos'
const CREATE_SUCCESS = "Ordem Servico created"
const UPDATE_SUCCESS = "Ordem Servico updated"
const DELETE_SUCCESS = "Ordem Servico deleted"

export default class implements OrdemServicoRepository {

    async create(ordemServico: CreateOrdemServico): Promise<String> {
        await knex(ORDEM_SERVICO_DB).insert(ordemServico);
        return CREATE_SUCCESS
    }

    async update(servico:String,ordemServico: CreateOrdemServico): Promise<String> {
        await knex(ORDEM_SERVICO_DB).update(ordemServico).where({servico});
        return UPDATE_SUCCESS
    }

    async delete(servico:String): Promise<String> {
        await knex(ORDEM_SERVICO_DB).where({servico}).del();
        return DELETE_SUCCESS
    }

    async list(): Promise<OrdemServicoInterface[]> {
        return await knex(ORDEM_SERVICO_DB)
    }

    listByFilters(filters: ListOrdemServicoPossibleFilters): Promise<OrdemServicoInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve([{
                id: 'uuid-1',
                cliente: 'Teste',
                servico: 'teste',
                barbeiro: 'teste',
                data: new Date()
            }])
        })
    }
}
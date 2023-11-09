/// <reference path="../types/main.d.ts" />

import ServicoRepository from "../repository/servico/servico.repository";

export default class Servico {
    constructor(readonly servicoDatabaseRepository: ServicoRepository) {
    }

    async create(input: CreateServico): Promise<String> {
        const result = await this.servicoDatabaseRepository.create(input);

        return result;
    }

    async update(nome:String,input: CreateServico): Promise<String> {
        const result = await this.servicoDatabaseRepository.update(nome,input);

        return result;
    }

    async delete(nome:String): Promise<String> {
        const result = await this.servicoDatabaseRepository.delete(nome);

        return result;
    }

    async list(): Promise<Object> {
        const result = await this.servicoDatabaseRepository.list();

        return result;
    }
    async listByFilters(input: CreateServico): Promise<Object> {
        const result = await this.servicoDatabaseRepository.listByFilters(input);

        return result;
    }
}
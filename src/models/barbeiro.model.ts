/// <reference path="../types/main.d.ts" />

import BarbeiroRepository from "../repository/barbeiro/barbeiro.repository";

export default class Barbeiro {
    constructor(readonly barbeiroDatabaseRepository: BarbeiroRepository) {
    }

    async create(input: CreateBarbeiro): Promise<String> {
        const result = await this.barbeiroDatabaseRepository.create(input);

        return result;
    }

    async update(servico:String,input: CreateBarbeiro): Promise<String> {
        const result = await this.barbeiroDatabaseRepository.update(servico,input);

        return result;
    }

    async delete(servico:String): Promise<String> {
        const result = await this.barbeiroDatabaseRepository.delete(servico);

        return result;
    }

    async list(): Promise<Object> {
        const result = await this.barbeiroDatabaseRepository.list();

        return result;
    }
    async listByFilters(input: CreateBarbeiro): Promise<Object> {
        const result = await this.barbeiroDatabaseRepository.listByFilters(input);

        return result;
    }
}
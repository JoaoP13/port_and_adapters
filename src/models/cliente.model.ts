/// <reference path="../types/main.d.ts" />

import ClienteRepository from "../repository/cliente/cliente.repository";

export default class Cliente {
    constructor(readonly clienteDatabaseRepository: ClienteRepository) {
    }

    async create(input: CreateCliente): Promise<String> {
        const result = await this.clienteDatabaseRepository.create(input);

        return result;
    }

    async update(nome:String,input: CreateCliente): Promise<String> {
        const result = await this.clienteDatabaseRepository.update(nome,input);

        return result;
    }

    async delete(nome:String): Promise<String> {
        const result = await this.clienteDatabaseRepository.delete(nome);

        return result;
    }

    async list(): Promise<Object> {
        const result = await this.clienteDatabaseRepository.list();

        return result;
    }
    async listByFilters(input: CreateCliente): Promise<Object> {
        const result = await this.clienteDatabaseRepository.listByFilters(input);

        return result;
    }
}
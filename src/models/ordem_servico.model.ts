/// <reference path="../types/main.d.ts" />

import OrdemServicoRepository from "../repository/ordemServico/ordemServico.repository";

export default class OrdemServico {
    constructor(readonly ordemServicoDatabaseRepository: OrdemServicoRepository) {
    }

    async create(input: CreateOrdemServico): Promise<String> {
        const result = await this.ordemServicoDatabaseRepository.create(input);

        return result;
    }

    async update(servico:String,input: CreateOrdemServico): Promise<String> {
        const result = await this.ordemServicoDatabaseRepository.update(servico,input);

        return result;
    }

    async delete(servico:String): Promise<String> {
        const result = await this.ordemServicoDatabaseRepository.delete(servico);

        return result;
    }

    async list(): Promise<Object> {
        const result = await this.ordemServicoDatabaseRepository.list();

        return result;
    }
    async listByFilters(input: CreateOrdemServico): Promise<Object> {
        const result = await this.ordemServicoDatabaseRepository.listByFilters(input);

        return result;
    }
}
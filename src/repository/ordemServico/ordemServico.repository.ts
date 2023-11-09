/// <reference path="../../types/main.d.ts" />

export default interface OrdemServicoRepository {
    create(ordemServico: CreateOrdemServico): Promise<String>;
    update(servico:String,ordemServico: CreateOrdemServico): Promise<String>;
    delete(servico:String): Promise<String>;
    list(): Promise<OrdemServicoInterface[]>;
    listByFilters(filters: ListOrdemServicoPossibleFilters): Promise<OrdemServicoInterface[]>
}
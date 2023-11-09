/// <reference path="../../types/main.d.ts" />

export default interface ServicoRepository {
    create(servico: CreateServico): Promise<String>;
    update(nome:String,servico: CreateServico): Promise<String>;
    delete(nome:String): Promise<String>;
    list(): Promise<ServicoInterface[]>;
    listByFilters(filters: ListServicoPossibleFilters): Promise<ServicoInterface[]>
}
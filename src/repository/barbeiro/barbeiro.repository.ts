/// <reference path="../../types/main.d.ts" />

export default interface BarbeiroRepository {
    create(barbeiro: CreateBarbeiro): Promise<String>;
    update(servico:String,barbeiro: CreateBarbeiro): Promise<String>;
    delete(servico:String): Promise<String>;
    list(): Promise<BarbeiroInterface[]>;
    listByFilters(filters: ListBarbeiroPossibleFilters): Promise<BarbeiroInterface[]>
}
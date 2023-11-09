/// <reference path="../../types/main.d.ts" />

export default interface ClienteRepository {
    create(cliente: CreateCliente): Promise<String>;
    update(nome:String,cliente: CreateCliente): Promise<String>;
    delete(nome:String): Promise<String>;
    list(): Promise<ClienteInterface[]>;
    listByFilters(filters: ListClientePossibleFilters): Promise<ClienteInterface[]>
}
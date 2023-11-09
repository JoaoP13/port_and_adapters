declare interface CreateUser {
    name: string,
    email: string,
    birthDate: Date
}

declare interface ListUserPossibleFilters {
    id?: string,
    name?: string,
    email?: string,
    birthDate?: Date
}

declare interface UserInterface {
    id: string,
    name: string,
    email: string,
    birthDate: Date
}



declare interface CreateBarbeiro {
    nome: string,
    servico: string,
}

declare interface ListBarbeiroPossibleFilters {
    id?: string,
    nome?: string,
    servico?: string,
}

declare interface BarbeiroInterface {
    id: string,
    nome: string,
    servico: string,
}



declare interface CreateCliente {
    nome: string,
    telefone: integer,
}

declare interface ListClientePossibleFilters {
    id?: string,
    nome?: string,
    telefone?: integer,
}

declare interface ClienteInterface {
    id: string,
    nome: string,
    telefone: integer,
}



declare interface CreateOrdemServico {
    cliente: string,
    servico: string,
    barbeiro: string,
    data: Date,
}

declare interface ListOrdemServicoPossibleFilters {
    id?: string,
    cliente?: string,
    servico?: string,
    barbeiro?: string,
    data?: Date
}

declare interface OrdemServicoInterface {
    id: string,
    cliente: string,
    servico: string,
    barbeiro: string,
    data: Date
}



declare interface CreateServico {
    nome: string,
    preco: integer,
    duracao: integer,
}

declare interface ListServicoPossibleFilters {
    id?: string,
    nome?: string,
    preco?: integer,
    duracao?: integer,
}

declare interface ServicoInterface {
    id: string,
    nome: string,
    preco: integer,
    duracao: integer,
}
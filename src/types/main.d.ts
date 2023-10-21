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
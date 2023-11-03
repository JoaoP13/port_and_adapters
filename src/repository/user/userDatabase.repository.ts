/// <reference path="../../types/main.d.ts" />

import UserRepository from "./user.repository";

export default class implements UserRepository {
    create(user: CreateUser): Promise<void> {
        throw new Error("Method not implemented");
    }

    update(user: CreateUser): Promise<void> {
        throw new Error("Method not implemented");
    }

    list(): Promise<UserInterface[]> {
        throw new Error("Method not implemented");
    }

    listByFilters(filters: ListUserPossibleFilters): Promise<UserInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve([{
                id: 'uuid-1',
                name: 'Teste',
                email: 'teste',
                birthDate: new Date()
            }])
        })
    }
}
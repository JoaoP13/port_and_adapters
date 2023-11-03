/// <reference path="../types/main.d.ts" />

import UserRepository from "../repository/user/user.repository";

export default class User {
    constructor(readonly userDatabaseRepository: UserRepository) {
    }

    async listByFilters(input: CreateUser): Promise<Object> {
        const result = await this.userDatabaseRepository.listByFilters({});

        return result;
    }
}
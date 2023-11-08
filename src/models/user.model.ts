/// <reference path="../types/main.d.ts" />

import UserRepository from "../repository/user/user.repository";

export default class User {
    constructor(readonly userDatabaseRepository: UserRepository) {
    }

    async create(input: CreateUser): Promise<String> {
        const result = await this.userDatabaseRepository.create(input);

        return result;
    }

    async update(email:String,input: CreateUser): Promise<String> {
        const result = await this.userDatabaseRepository.update(email,input);

        return result;
    }

    async delete(email:String): Promise<String> {
        const result = await this.userDatabaseRepository.delete(email);

        return result;
    }

    async list(): Promise<Object> {
        const result = await this.userDatabaseRepository.list();

        return result;
    }
    async listByFilters(input: CreateUser): Promise<Object> {
        const result = await this.userDatabaseRepository.listByFilters(input);

        return result;
    }
}
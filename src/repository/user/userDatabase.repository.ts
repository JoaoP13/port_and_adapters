/// <reference path="../../types/main.d.ts" />

import UserRepository from "./user.repository";
import knex from "../databaseKnex/knexConfig";

const USER_DB = 'users'
const CREATE_SUCCESS = "User created"
const UPDATE_SUCCESS = "User updated"
const DELETE_SUCCESS = "User deleted"

export default class implements UserRepository {

    async create(user: CreateUser): Promise<String> {
        await knex(USER_DB).insert(user);
        return CREATE_SUCCESS
    }

    async update(email:String,user: CreateUser): Promise<String> {
        await knex(USER_DB).update(user).where({email});
        return UPDATE_SUCCESS
    }

    async delete(email:String): Promise<String> {
        await knex(USER_DB).where({email}).del();
        return DELETE_SUCCESS
    }

    async list(): Promise<UserInterface[]> {
        return await knex(USER_DB)
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
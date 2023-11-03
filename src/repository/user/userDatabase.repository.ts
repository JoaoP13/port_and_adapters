/// <reference path="../../types/main.d.ts" />

import UserRepository from "./user.repository";
import { v4 as uuidv4 } from 'uuid';
import listUser from "../../mockData/user.MockData";

const CREATE_SUCCESS = "User created"
const CREATE_NOT_SUCCESS = "User already exists"
const UPDATE_SUCCESS = "User updated"
const UPDATE_NOT_SUCCESS = "User not found or email already exists"

export default class implements UserRepository {

    create(user: CreateUser): Promise<String> {

        if(listUser.find(x => x.email == user.email)){
            return new Promise((resolve, rejecet) => {
                resolve(CREATE_NOT_SUCCESS)
            })
        }

        let newUser :UserInterface = {
            id: uuidv4(),
            name: user.name,
            email: user.email,
            birthDate: user.birthDate
        }

        listUser.push(newUser)

        return new Promise((resolve, rejecet) => {
            resolve(CREATE_SUCCESS)
        })
    }

    update(email:String,user: CreateUser): Promise<String> {
        const USER_INDEX  = listUser.findIndex(x => x.email == email)

        if(USER_INDEX !=-1 && !listUser.find(x => x.email == user.email)){
            listUser[USER_INDEX] = {
                ...listUser[USER_INDEX],
                name: user.name,
                email: user.email,
                birthDate: user.birthDate
            }
            return new Promise((resolve, rejecet) => {
                resolve(UPDATE_SUCCESS)
            })
        }

        return new Promise((resolve, rejecet) => {
            resolve(UPDATE_NOT_SUCCESS)
        })
    }

    list(): Promise<UserInterface[]> {
        return new Promise((resolve, rejecet) => {
            resolve(listUser)
        })
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
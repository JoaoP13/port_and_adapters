/// <reference path="../../types/main.d.ts" />

export default interface UserRepository {
    create(user: CreateUser): Promise<String>;
    update(email:String,user: CreateUser): Promise<String>;
    delete(email:String): Promise<String>;
    list(): Promise<UserInterface[]>;
    listByFilters(filters: ListUserPossibleFilters): Promise<UserInterface[]>
}
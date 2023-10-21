/// <reference path="../../types/main.d.ts" />

export default interface UserRepository {
    create(user: CreateUser): Promise<void>;
    update(user: CreateUser): Promise<void>;
    list(): Promise<UserInterface[]>;
    listByFilters(filters: ListUserPossibleFilters): Promise<UserInterface[]>
}
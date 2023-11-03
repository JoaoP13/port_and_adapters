/// <reference path="../types/main.d.ts" />

import { v4 as uuidv4 } from 'uuid';

const uuid = uuidv4();

let listUser: UserInterface[] = [
    {
        id: uuidv4(),
        name: 'Joao',
        email: 'JP@example.com',
        birthDate: new Date('1990-01-01'),
    },
    {
        id: uuidv4(),
        name: 'lucas alexsanderson',
        email: 'lucasA@example.com',
        birthDate: new Date('1995-05-15'),
    },
    {
        id: uuidv4(),
        name: 'lucas',
        email: 'lucas@example.com',
        birthDate: new Date('1995-05-15'),
    },
]
export default listUser;
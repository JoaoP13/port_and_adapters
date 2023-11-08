/// <reference path="./../../types/main.d.ts" />

import Knex from 'knex';
import { development } from '../../knexfile';

const knex = Knex(development)

export default knex
import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import {createFakeContact} from '../utils/createFakeContact.js';

export const addOneContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const persons = JSON.parse(data);
        persons.push(createFakeContact());
        await fs.writeFile(PATH_DB, JSON.stringify(persons, undefined, 2));
    } catch (error) {
        console.error(error);
    }
};

addOneContact();

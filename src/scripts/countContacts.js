import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        const persons = JSON.parse(data);
        return `Total contacts: ${persons.length}`;
    } catch (error) {
        console.error(error);
    }
};

console.log(await countContacts());

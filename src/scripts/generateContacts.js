import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import {createFakeContact} from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try { 
        const data = await fs.readFile(PATH_DB, 'utf8');
        const persons = JSON.parse(data);
        const newPersons = Array.from({length: number}, createFakeContact);
        persons.push(...newPersons);
        await fs.writeFile(PATH_DB, JSON.stringify(persons, undefined, 2));
    } catch (error) {
        console.error(error);
    }
};

generateContacts(5);

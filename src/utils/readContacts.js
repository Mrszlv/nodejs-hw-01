import { PATH_DB } from '../contacts/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Read ok!');
    return JSON.parse(data) || [];
  } catch (error) {
    console.error('Помилка читання даних:', error);
    return [];
  }
};

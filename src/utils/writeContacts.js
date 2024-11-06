import { PATH_DB } from '../contacts/contacts.js';
import * as fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
  const contacts = updatedContacts;
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
    console.log('Write ok!');
  } catch (error) {
    console.error('Помилка запису:', error);
  }
};

import { PATH_DB } from '../contacts/contacts';
import fs from 'node:fs/promises';

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Читання даних:', data);
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка читання даних:', error);
    return [];
  }
};
readContacts();

export default readContacts;

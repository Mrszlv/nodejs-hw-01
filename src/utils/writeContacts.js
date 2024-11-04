import { PATH_DB } from '../contacts/contacts';
import fs from 'node:fs/promises';

const writeContacts = async (updatedContacts) => {
  const contacts = updatedContacts;
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Помилка запису:', error);
  }
};
writeContacts();

export default writeContacts;

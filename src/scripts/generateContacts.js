import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContacts.js';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const updatingContacts = existingContacts.conttact(newContacts);
  await writeContacts(updatingContacts);
};

generateContacts(5);

import { readContacts } from '../utils/readContacts';
import { writeContacts } from '../utils/writeContacts';
import { createFakeContact } from '../utils/createFakeContacts';

const generateContacts = async (number) => {
  const existingContacts = await readContacts();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const updatingContacts = existingContacts.conttact(newContacts);
  await writeContacts(updatingContacts);
};

generateContacts(5);

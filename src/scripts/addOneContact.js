import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
export const addOneContact = async () => {
  const newContacts = [];
  newContacts.push(createFakeContact());
  await writeContacts(newContacts);
};

addOneContact();
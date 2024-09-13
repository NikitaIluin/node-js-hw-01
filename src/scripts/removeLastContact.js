import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
      console.log('The contact was deleted');
    } else {
      console.log('Array is empty');
    }
  } catch (error) {
    console.log('Error: ', error);
  }
};

removeLastContact();
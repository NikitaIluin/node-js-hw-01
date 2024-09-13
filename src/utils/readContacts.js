import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const readContacts = async () => {
  const buffer = await fs.readFile(PATH_DB);
  return buffer.toString('utf-8');
};
import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Функція для підрахунку кількості контактів
export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    const count = contacts.length;
    return count;
  } catch (error) {
    console.error('Помилка при підрахунку кількості контактів:', error);
    return 0;
  }
};

console.log(await countContacts());

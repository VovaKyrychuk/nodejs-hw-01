import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Функція для отримання всіх контактів
export const getAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при отриманні контактів:', error);
    return [];
  }
};

console.log(await getAllContacts());

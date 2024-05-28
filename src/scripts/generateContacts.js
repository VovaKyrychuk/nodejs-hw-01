// const generateContacts = async (number) => {};

// await generateContacts(5);

import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

// Функція для читання контактів з файлу
const readContactsFromDb = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при читанні файлу:', error);
    return [];
  }
};

// Функція для запису контактів до файлу
const writeContactsToDb = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
  }
};

// Асинхронна функція для генерації контактів
const generateContacts = async (number) => {
  const existingContacts = await readContactsFromDb();
  const newContacts = Array.from({ length: number }, createFakeContact);
  const updatedContacts = [...existingContacts, ...newContacts];
  await writeContactsToDb(updatedContacts);
  console.log(
    `Додано ${number} нових контактів. Загальна кількість контактів: ${updatedContacts.length}`,
  );
};

// Виклик асинхронної функції з аргументом, що відповідає кількості контактів, які потрібно згенерувати
const count = parseInt(process.argv[2], 10) || 5;

(async () => {
  await generateContacts(count);
})();

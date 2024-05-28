import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const readContactsFromDb = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Помилка при читанні файлу:', error);
    return [];
  }
};

const writeContactsToDb = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Помилка при записі файлу:', error);
  }
};

export const addOneContact = async () => {
  const existingContacts = await readContactsFromDb();
  const newContact = createFakeContact();
  const updatedContacts = [...existingContacts, newContact];
  await writeContactsToDb(updatedContacts);
  console.log(
    `Додано новий контакт: ${JSON.stringify(
      newContact,
    )}. Загальна кількість контактів: ${updatedContacts.length}`,
  );
};

// Виклик функції додавання одного контакту
await addOneContact();

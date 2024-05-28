import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    // Читання усіх контактів з файлу
    const data = await fs.readFile(PATH_DB, 'utf8');
    let contacts = JSON.parse(data);

    // Проходження по кожному контакту та випадкове видалення з ймовірністю 50%
    contacts = contacts.filter(() => Math.random() >= 0.5);

    // Запис оновленого списку контактів назад у файл
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf8');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

await thanos();

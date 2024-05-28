import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

// Функція для видалення всіх контактів
export const removeAllContacts = async () => {
  try {
    // Очищення вмісту файлу db.json
    await fs.writeFile(PATH_DB, '[]', 'utf8');
    console.log('Усі контакти були успішно видалені.');
  } catch (error) {
    console.error('Помилка при видаленні контактів:', error);
  }
};

await removeAllContacts();

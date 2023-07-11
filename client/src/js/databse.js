import { openDB } from 'idb';

const initdb = async () =>
    openDB('jate', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('jate')) {
                console.log('jate database already exist');
                return;
            }
            db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
            console.log('jate database created');
        },
    });

    // Add logic to a method that accepts some content and adds it to the database
    export const putDb = async (content) => {
        const contentDb = await openDB('jate', '1');
        const tx = contentDb.transaction('jate', 'readwrite');
        const store = tx.objectStore('jate');
        const request = await store.put({ id: 'content', content });
        const result = await request;
        console.log('🚀 - data saved to the database', result);
    };
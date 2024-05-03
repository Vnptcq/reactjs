import Dexie from "dexie";

export const db = new Dexie('b-info');
db.version(1).stores({
    book: 'title, author' 
});

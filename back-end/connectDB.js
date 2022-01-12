import { createConnection } from 'mysql';

// Create connection 
const DB = createConnection({
    host: 'localhost',
    user: 'root',
    password: '753Anais951&',
    database: 'only-chat',
    timezone: 'Europe/Paris'
});


DB.connect ((err) => {
    if (err) throw err;
});


export { DB };
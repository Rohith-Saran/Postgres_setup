
import { Client } from 'pg';
const client = new Client({

    connectionString: 'postgresql://neondb_owner:npg_MEUva1o4mXVD@ep-wispy-field-a4dfwpaj-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'


});
client.connect();


async function createUsersTable() {
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log("Users table created:", result);
}



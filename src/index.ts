
import { Client } from 'pg';
const client = new Client({

    connectionString: "postgresql://neondb_owner:npg_1Hwt0XefdvkC@ep-silent-dream-ai3xdumw-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"

});
client.connect();


async function createUsersTable() {
    const result = await client.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    `);
    console.log("Users table created:", result);
}

async function insertUser(name: string, email: string) {
    const result = await client.query(`
        INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *;
    `, [name, email]);
    console.log("Inserted user:", result.rows[0]);
}


const { Client } = require("pg");

const client = new Client({
  connectionString: process.env.POSTGRESS_URL,
});

const setupDatabase = async () => {
  await client.connect();

  try {
    const result = await client.query(`
      SELECT EXISTS (
        SELECT 1
        FROM information_schema.tables 
        WHERE table_schema = 'public'
        AND table_name = 'users'
      )
    `);

    if (!result.rows[0].exists) {
      await client.query(`
        CREATE TABLE users (
          id SERIAL PRIMARY KEY,
          email VARCHAR(255) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL
        )
      `);
      console.log('Table "users" created.');
    } else {
      console.log('Table "users" already exists.');
    }
  } catch (error) {
    console.error("Error during table creation:", error);
  }
};

module.exports = { client, setupDatabase };

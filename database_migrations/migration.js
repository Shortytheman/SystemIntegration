import mysql from 'mysql2/promise';
import pkg from 'pg';
const { Client } = pkg;

// MySQL configuration
const mysqlConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hiveplanner'
};

// PostgreSQL configuration
const pgConfig = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'hiveplanner'
};

const table = "teams";
const column1 = "name";
const column2 = "deletedAt";
const column3 = "description";

async function migrate() {
  const mysqlConnection = await mysql.createConnection(mysqlConfig);
  const pgClient = new Client(pgConfig);
  await pgClient.connect();

  try {
    const [rows, fields] = await mysqlConnection.execute(`SELECT * FROM ${table}`);

    await pgClient.query(`
      CREATE TABLE IF NOT EXISTS ${table} (
        team_id INT PRIMARY KEY,
        ${column1} VARCHAR(255),
        ${column2} TIMESTAMP,
        ${column3} VARCHAR(244)
      )
    `);

    for (const row of rows) {
      await pgClient.query(
        `INSERT INTO ${table} (team_id, ${column1}, ${column2}, ${column3}) VALUES ($1, $2, $3, $4)`,
        [row.team_id, row.name, row.deletedAt, row.description]
      );
    }

    console.log('Data migration completed successfully.');
  } catch (err) {
    console.error('Error during migration:', err.stack);
  } finally {
    await mysqlConnection.end();
    await pgClient.end();
  }
}

migrate();


/*

psql -h localhost -U root -d hiveplanner  | Enter the postgres database instance with root user (password = password)
\d teams | Describe the teams table
SELECT * FROM teams; | Get all entries from the teams table

*/
import pool from './database';

export async function deleteExistingTestData() {
  const query = `
    DROP TABLE IF EXISTS sports_events
  `;
  await pool.query(query);
}

export async function createEventsTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS sports_events (
      event_id SERIAL PRIMARY KEY,
      event_name VARCHAR(255) NOT NULL,
      odds DECIMAL(5, 2) NOT NULL
    );
  `;
  await pool.query(query);
}

export async function seedEvents() {
  const query = `
    INSERT INTO sports_events (event_name, odds)
    VALUES
      ('Soccer: Team A vs Team B', 1.75),
      ('Cricket: India vs Pakistan', 2.00),
      ('Tennis: Nadal vs Federer', 1.50),
      ('Badminton: Player 1 vs Player 2', 1.95),
      ('Hockey: India vs Australia', 2.10)
  `;
  await pool.query(query);
}

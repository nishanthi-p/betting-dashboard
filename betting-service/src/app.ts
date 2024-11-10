import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';
import { deleteExistingTestData, createEventsTable, seedEvents } from './events';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize the database table and seed data
(async () => {
  try {
    await deleteExistingTestData();
    await createEventsTable();
    await seedEvents();
    console.log('Database initialized and seeded.');
  } catch (error) {
    console.error('Database setup failed:', error);
  }
})();

app.use(express.json());
app.use(cors())
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

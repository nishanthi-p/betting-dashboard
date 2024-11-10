import { Router, Request, Response } from 'express';
import pool from './database';

const router = Router();

router.get('/api/events', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM sports_events');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

export default router;

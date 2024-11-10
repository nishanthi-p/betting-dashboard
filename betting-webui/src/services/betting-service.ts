import axios from 'axios';
import { SportsEvent } from '../interfaces/types';

const API_BASE_URL = `${import.meta.env.VITE_WEB_SERVER_URL}/api`;

export const fetchEvents = async (): Promise<SportsEvent[]> => {
  const response = await axios.get(`${API_BASE_URL}/events`);
  return response.data;
};

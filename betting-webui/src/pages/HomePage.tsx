import React, { useEffect, useState } from 'react';
import { fetchEvents } from '../services/betting-service';
import { SportsEvent } from '../interfaces/types';
import BetModal from '../components/BetModal';

const HomePage: React.FC = () => {
  const [events, setEvents] = useState<SportsEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<SportsEvent | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const eventsData = await fetchEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };
    loadEvents();
  }, []);

  const handlePlaceBet = (event: SportsEvent) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Sports Events</h1>
      <div className="grid gap-4">
        {events.map((event) => (
          <div key={event.event_id} className="p-4 bg-white rounded shadow-md">
            <h2 className="text-lg font-semibold">{event.event_name}</h2>
            <p>Odds: {event.odds}</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => handlePlaceBet(event)}
            >
              Place Bet
            </button>
          </div>
        ))}
      </div>
      {showModal && selectedEvent && (
        <BetModal
          event={selectedEvent}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default HomePage;
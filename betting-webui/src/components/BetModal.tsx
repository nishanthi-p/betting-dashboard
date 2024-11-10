import React, { useState } from 'react';
import { SportsEvent } from '../interfaces/types';

interface BetModalProps {
  event: SportsEvent;
  onClose: () => void;
}

const BetModal: React.FC<BetModalProps> = ({ event, onClose }) => {
  const [betAmount, setBetAmount] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handlePlaceBet = () => {
    console.log(betAmount);
    if(Number(betAmount) > 0 ) {
      setErrorMessage('');
      setMessage('Bet placed successfully!');
      setTimeout(() => {
        setMessage('');
        onClose();
      }, 2000);
    } else {
      setErrorMessage('Please enter valid bet amount');
    }
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-semibold mb-2">{event.event_name}</h2>
        <p>Odds: {event.odds}</p>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Bet Amount:
          </label>
          <input
            type="number"
            className="mt-1 w-full p-2 border rounded"
            value={betAmount}
            onChange={(e) => setBetAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <button
          className="mt-4 w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={handlePlaceBet}
        >
          Confirm Bet
        </button>
        {message && <p className="mt-2 text-green-600">{message}</p>}
        {errorMessage && <p className="mt-2 text-red-600">{errorMessage}</p>}
        <button
          className="mt-4 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BetModal;

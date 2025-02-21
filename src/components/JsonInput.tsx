import React, { useState } from 'react';

interface JsonInputProps {
  onSubmit: (data: any) => void;
}

export const JsonInput: React.FC<JsonInputProps> = ({ onSubmit }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    try {
      const parsedData = JSON.parse(input);
      if (!Array.isArray(parsedData.data)) {
        throw new Error('Input must contain a "data" array');
      }
      setError('');
      onSubmit(parsedData);
    } catch (err) {
      setError('Invalid JSON format. Please check your input.');
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-32 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder='Enter JSON (e.g., { "data": ["A","C","z"] })'
      />
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </div>
  );
};
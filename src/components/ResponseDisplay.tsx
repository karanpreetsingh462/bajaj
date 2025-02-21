import React from 'react';
import { ApiResponse, DisplayOption } from '../types';

interface ResponseDisplayProps {
  response: ApiResponse;
  selectedOptions: DisplayOption[];
}

export const ResponseDisplay: React.FC<ResponseDisplayProps> = ({
  response,
  selectedOptions,
}) => {
  return (
    <div className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Response</h2>
      
      <div className="space-y-2">
        <p><span className="font-medium">Status:</span> {response.status}</p>
        <p><span className="font-medium">User ID:</span> {response.userId}</p>
        <p><span className="font-medium">College Email:</span> {response.collegeEmailId}</p>
        <p><span className="font-medium">Roll Number:</span> {response.collegeRollNumber}</p>
        
        {selectedOptions.includes('numbers') && (
          <div>
            <p className="font-medium">Numbers:</p>
            <p className="pl-4">[{response.numbers.join(', ')}]</p>
          </div>
        )}
        
        {selectedOptions.includes('alphabets') && (
          <div>
            <p className="font-medium">Alphabets:</p>
            <p className="pl-4">[{response.alphabets.join(', ')}]</p>
          </div>
        )}
        
        {selectedOptions.includes('highestAlphabet') && response.alphabets.length > 0 && (
          <div>
            <p className="font-medium">Highest Alphabet:</p>
            <p className="pl-4">{response.alphabets[response.alphabets.length - 1]}</p>
          </div>
        )}
      </div>
    </div>
  );
};
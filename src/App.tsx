import React, { useState, useEffect } from 'react';
import { JsonInput } from './components/JsonInput';
import { ResponseDisplay } from './components/ResponseDisplay';
import { processData } from './services/mockApi';
import { ApiResponse, DisplayOption } from './types';
import { CheckSquare } from 'lucide-react';

function App() {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<DisplayOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set the document title to the roll number
    document.title = '2024CS001';
  }, []);

  const handleSubmit = async (data: any) => {
    setLoading(true);
    try {
      const result = await processData(data);
      setResponse(result);
      // Reset selected options when new data is submitted
      setSelectedOptions([]);
    } catch (error) {
      console.error('Error processing data:', error);
    }
    setLoading(false);
  };

  const toggleOption = (option: DisplayOption) => {
    setSelectedOptions(prev =>
      prev.includes(option)
        ? prev.filter(o => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">JSON Processor</h1>
          <JsonInput onSubmit={handleSubmit} />
        </div>

        {loading && (
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          </div>
        )}

        {response && !loading && (
          <>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Select Display Options</h2>
              <div className="space-y-2">
                {(['alphabets', 'numbers', 'highestAlphabet'] as DisplayOption[]).map((option) => (
                  <button
                    key={option}
                    onClick={() => toggleOption(option)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md w-full ${
                      selectedOptions.includes(option)
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    <CheckSquare
                      className={`h-5 w-5 ${
                        selectedOptions.includes(option) ? 'text-blue-700' : 'text-gray-400'
                      }`}
                    />
                    <span className="capitalize">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <ResponseDisplay
              response={response}
              selectedOptions={selectedOptions}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import openai from 'openai';

const App = () => {
  const handleDataAnalysis = async () => {
    try {
        const data = [
            {
              id: 1,
              name: 'John Doe',
              udid: 'UDID123',
              age: 18,
              disability: 'None',
              severity: 'Low',
              program: 'Program A',
              level: 'Level 1',
              gender: 'Male',
              address: '123 Main Street',
              contact: '123-456-7890',
              adhaar: '1234567890',
              evaluations: [
                {
                  quarter: 'Q1',
                  year: 2023,
                  totalscore: 90,
                  parameters: [
                    { name: 'Parameter 1', score: 85 },
                    { name: 'Parameter 2', score: 92 },
                    { name: 'Parameter 3', score: 88 },
                  ],
                },
                {
                  quarter: 'Q2',
                  year: 2023,
                  totalscore: 88,
                  parameters: [
                    { name: 'Parameter 1', score: 82 },
                    { name: 'Parameter 2', score: 90 },
                    { name: 'Parameter 3', score: 85 },
                  ],
                },
                {
                  quarter: 'Q3',
                  year: 2023,
                  totalscore: 92,
                  parameters: [
                    { name: 'Parameter 1', score: 88 },
                    { name: 'Parameter 2', score: 95 },
                    { name: 'Parameter 3', score: 90 },
                  ],
                },
                {
                  quarter: 'Q4',
                  year: 2023,
                  totalscore: 86,
                  parameters: [
                    { name: 'Parameter 1', score: 80 },
                    { name: 'Parameter 2', score: 88 },
                    { name: 'Parameter 3', score: 85 },
                  ],
                },
              ],
            },
          ];
      const response = await openai.analyze(data);
      // Process the response and update state or perform further actions
    } catch (error) {
      console.error('Error analyzing data:', error);
    }
  };

  return (
    <div>
      <h1>Data Analysis</h1>
      <button onClick={handleDataAnalysis}>Analyze Data</button>
    </div>
  );
};

export default App;


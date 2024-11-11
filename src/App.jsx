import React from 'react';
import PasswordGenerator from './components/password/PasswordGenerator';

function App() {
  return (
    <div className="min-h-screen w-full bg-very-dark flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <h1 className="text-grey text-center font-mono text-2xl mb-8">
          Password Generator
        </h1>
          <PasswordGenerator />
      </div>
    </div>
  );
}

export default App;
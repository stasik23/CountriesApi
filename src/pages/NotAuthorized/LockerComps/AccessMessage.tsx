// src/components/AccessMessage.tsx
import React from 'react';
import { Lock } from './Lock';

export const AccessMessage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 to-gray-600">
      <Lock />
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Access to this page is restricted</h1>
        <p>Please check with the site admin if you believe this is a mistake.</p>
      </div>
    </div>
  );
};


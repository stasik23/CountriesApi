import React, { useEffect } from 'react';
import { Keyhole } from '../../components/Keyhole';
import { Key } from '../../components/Key';
import { Ghost } from '../../components/Ghost';
import { startAnimation } from '../../utils/403animation';

export const UndefinedPage: React.FC = () => {
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 text-yellow-100">
      <div className="container space-y-8">
        <h1 className="text-6xl font-mono uppercase">403</h1>
        <br />
        <a href='/register' className="text-2xl uppercase tracking-wide">Access not granted</a>
        <Keyhole />
      </div>
      <Key />
      <Ghost />
    </div>
  );
};

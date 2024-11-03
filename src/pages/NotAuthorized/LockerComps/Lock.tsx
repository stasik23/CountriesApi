// src/components/Lock.tsx
import React from 'react';
import 'tailwindcss/tailwind.css';

export const Lock: React.FC = () => {
  return (
    <div className="relative w-[55px] h-[45px] bg-gray-800 rounded-sm animate-dip delay-[1.5s]">
      <div
        className="absolute top-[-30px] w-[15px] h-[30px] border border-gray-800 border-b-transparent rounded-t-[15px]
          animate-[lock_2s_ease-in-out], animate-spin"
        style={{ left: 'calc(50% - 12.5px)' }}
      />
      <div
        className="absolute top-[-10px] w-[15px] h-[20px] border-l-[5px] border-gray-800 animate-spin"
        style={{ left: 'calc(50% - 12.5px)' }}
      />
    </div>
  );
};

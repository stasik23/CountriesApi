// Ghost.tsx
import React from 'react';

export const Ghost: React.FC = () => (
  <div className="ghost absolute bottom-5 left-1/2 transform -translate-x-1/2 w-48 h-48">
    <svg className="w-full h-full" viewBox="0 0 26.458333 26.458334">
      <use href="#ghost" />
    </svg>
  </div>
);

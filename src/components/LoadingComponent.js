import React from 'react';

export default function LoadingComponent({ content = 'Loading...' }) {
  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center justify-center">
      <div
        style={{ borderTopColor: 'rgba(255, 255, 255, 0.7)' }}
        className="w-16 h-16 border-4 border-opacity-10 border-black rounded-full animate-spin"
      ></div>
      <div className="text-gray-500 mt-4">{content}</div>
    </div>
  );
}

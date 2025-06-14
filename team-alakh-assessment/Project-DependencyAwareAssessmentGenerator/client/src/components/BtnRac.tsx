import React from 'react';

interface BtnRacProps {
  children: React.ReactNode;
}

function BtnRac({ children }: BtnRacProps) {
  return (
    <button className="rounded-md bg-green-700 text-zinc-200 px-6 py-2 flex justify-center items-center">
      {children}
    </button>
  );
}

export default BtnRac;

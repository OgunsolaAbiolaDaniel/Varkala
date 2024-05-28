import React from 'react';

const PlusMinusSVG = ({ isOpen }) => {
  return (
    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24">
      {isOpen ? (
        <>
          <path fill="none" d="M0 0h24v24H0z" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14" />
        </>
      ) : (
        <>
          <path fill="none" d="M0 0h24v24H0z" />
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14" />
        </>
      )}
    </svg>
  );
};

export default PlusMinusSVG;

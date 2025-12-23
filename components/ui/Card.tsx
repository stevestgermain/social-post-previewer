import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-200 p-6 ${className}`}>
      {children}
    </div>
  );
};
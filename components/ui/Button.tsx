import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, active, className = '', ...props }) => {
  const baseStyle = "px-2.5 py-1.5 text-[11px] font-semibold border rounded-lg shadow-sm transition-all duration-200";
  const inactiveStyle = "bg-white border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:shadow-md";
  const activeStyle = "bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-500/20";

  return (
    <button
      className={`${baseStyle} ${active ? activeStyle : inactiveStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
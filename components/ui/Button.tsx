import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, active, className = '', ...props }) => {
  const baseStyle = "px-2.5 py-1.5 text-[11px] font-semibold border rounded-lg shadow-sm transition-all duration-200";
  const inactiveStyle = "bg-white dark:bg-zinc-800 border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-md";
  const activeStyle = "bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300 ring-1 ring-blue-500/20 dark:ring-blue-500/40";

  return (
    <button
      className={`${baseStyle} ${active ? activeStyle : inactiveStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

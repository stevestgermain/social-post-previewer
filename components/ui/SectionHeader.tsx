import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: string;
  icon?: LucideIcon;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 mb-3">
      {Icon && <Icon className="w-4 h-4 text-blue-600 dark:text-blue-500" />}
      <span className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
        {title}
      </span>
    </div>
  );
};
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) onClick();
  };

  return (
    <RouterLink to={to} className={className} onClick={handleClick}>
      {children}
    </RouterLink>
  );
};
'use client';

import { ReactNode } from 'react';

interface NeonButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function NeonButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  href
}: NeonButtonProps) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 border uppercase tracking-wider font-mono';
  
  const variants = {
    primary: 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/25',
    secondary: 'bg-transparent text-cyan-400 border-cyan-500/50 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/25',
    danger: 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-red-400/30 hover:shadow-lg hover:shadow-red-500/25'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

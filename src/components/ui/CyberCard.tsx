'use client';

import { ReactNode } from 'react';

interface CyberCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'green' | 'orange';
}

export default function CyberCard({ children, className = '', glowColor = 'cyan' }: CyberCardProps) {
  const glowColors = {
    cyan: 'border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20',
    purple: 'border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20',
    green: 'border-green-500/30 hover:border-green-500/60 hover:shadow-green-500/20',
    orange: 'border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/20'
  };

  return (
    <div className={`
      bg-slate-900/50 backdrop-blur-sm border rounded-lg p-6 
      transition-all duration-300 hover:scale-105 hover:shadow-2xl
      ${glowColors[glowColor]}
      ${className}
    `}>
      {children}
    </div>
  );
}

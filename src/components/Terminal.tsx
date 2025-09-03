'use client';

import { useState, useEffect } from 'react';

interface TerminalProps {
  className?: string;
}

export default function Terminal({ className = '' }: TerminalProps) {
  const [text, setText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  
  const lines = [
    '> Initializing cyber connection...',
    '> Connecting to the grid...',
    '> Access granted.',
    '> Welcome to EncryptEdge.',
    '> Type "help" for available commands.',
    '> _'
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const line = lines[currentLine];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < line.length) {
          setText(prev => prev + line[charIndex]);
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setText(prev => prev + '\n');
            setCurrentLine(currentLine + 1);
          }, 500);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }
  }, [currentLine]);

  return (
    <div className={`bg-black/90 border border-cyan-500/50 rounded-lg p-4 font-mono text-green-400 ${className}`}>
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-cyan-400">EncryptEdge Terminal</span>
      </div>
      <div className="h-32 overflow-hidden">
        <pre className="whitespace-pre-wrap text-sm leading-relaxed">
          {text}
          <span className="animate-pulse">|</span>
        </pre>
      </div>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [glitchedText, setGlitchedText] = useState(text);
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';

  const triggerGlitch = () => {
    if (isGlitching) return;
    
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 5;

    const glitchInterval = setInterval(() => {
      setGlitchedText(
        text
          .split('')
          .map((char, index) => {
            if (Math.random() < 0.3) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('')
      );

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(glitchInterval);
        setGlitchedText(text);
        setIsGlitching(false);
      }
    }, 100);
  };

  return (
    <span
      className={`inline-block cursor-pointer font-mono ${className}`}
      onMouseEnter={triggerGlitch}
      style={{
        textShadow: isGlitching 
          ? '2px 0 #ff0000, -2px 0 #00ffff, 0 2px #ff00ff, 0 -2px #ffff00'
          : 'none'
      }}
    >
      {glitchedText}
    </span>
  );
}

'use client';

import React from 'react';
import './styles.css';

// LearnMoreLink component for consistent styling of the "Learn More" link
export default function LearnMoreLink({ expanded, className = '' }) {
  return (
    <button 
      className={`animated-card-learn-more ${expanded ? 'opacity-0' : 'opacity-100'} ${className}`}
    >
      Learn More 
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-4 w-4 ml-1" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
  );
}

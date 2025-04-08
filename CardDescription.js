'use client';

import React from 'react';
import './styles.css';

// CardDescription component for consistent description styling
export default function CardDescription({ children, className = '' }) {
  return (
    <p className={`animated-card-description ${className}`}>
      {children}
    </p>
  );
}

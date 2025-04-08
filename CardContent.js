'use client';

import React from 'react';
import './styles.css';

// CardContent component for consistent content area styling
export default function CardContent({ children, className = '' }) {
  return (
    <div className={`animated-card-content ${className}`}>
      {children}
    </div>
  );
}

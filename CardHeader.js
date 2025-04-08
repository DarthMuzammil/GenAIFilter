'use client';

import React from 'react';
import './styles.css';

// CardHeader component for consistent header styling
export default function CardHeader({ icon, title, className = '' }) {
  return (
    <div className={`animated-card-title-container ${className}`}>
      {icon && <div className="animated-card-icon">{icon}</div>}
      <h2 className="animated-card-title">{title}</h2>
    </div>
  );
}

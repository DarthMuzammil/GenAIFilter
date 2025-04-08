'use client';

import React from 'react';
import { CardProvider } from './CardContext';
import Card from './Card';

// Main AnimatedCard component that wraps Card with CardProvider
export default function AnimatedCard({ 
  id,
  icon, 
  title, 
  description, 
  children,
  isExpanded,
  onToggle,
  className = '',
  contentClassName = ''
}) {
  // If no id is provided, generate one based on title
  const cardId = id || `card-${title?.replace(/\s+/g, '-').toLowerCase() || Math.random().toString(36).substring(2, 9)}`;
  
  // Handle controlled component case
  const handleToggle = (id) => {
    if (onToggle) {
      onToggle(id);
    }
  };
  
  return (
    <CardProvider>
      <Card
        id={cardId}
        icon={icon}
        title={title}
        description={description}
        className={className}
        contentClassName={contentClassName}
        isControlled={isExpanded !== undefined}
        forcedExpanded={isExpanded}
        onToggleOverride={onToggle ? handleToggle : undefined}
      >
        {children}
      </Card>
    </CardProvider>
  );
}

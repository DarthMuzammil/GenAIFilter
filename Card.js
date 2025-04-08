'use client';

import React from 'react';
import { useCardContext } from './CardContext';
import useCardAnimation from './useCardAnimation';
import CardHeader from './CardHeader';
import CardDescription from './CardDescription';
import LearnMoreLink from './LearnMoreLink';
import './styles.css';

// Card component that handles expansion and animation
export default function Card({ 
  id, 
  icon, 
  title, 
  description, 
  children, 
  className = '',
  contentClassName = '',
  isControlled = false,
  forcedExpanded = false,
  onToggleOverride
}) {
  const { toggleExpand } = useCardContext();
  const { contentRef, height, expanded, isAnimating } = useCardAnimation(id);
  
  // Use either controlled or uncontrolled expansion state
  const isExpanded = isControlled ? forcedExpanded : expanded;
  
  // Handle toggle with override if provided
  const handleToggle = () => {
    if (onToggleOverride) {
      onToggleOverride(id);
    } else {
      toggleExpand(id);
    }
  };

  return (
    <div 
      className={`animated-card ${className} ${isExpanded ? 'scale-in' : ''}`}
    >
      {/* Card Header - Always visible */}
      <div 
        className="animated-card-header"
        onClick={handleToggle}
      >
        <CardHeader icon={icon} title={title} />
        <CardDescription>{description}</CardDescription>
        <LearnMoreLink expanded={isExpanded} />
      </div>

      {/* Expandable Content Area */}
      <div 
        style={{ height: isExpanded ? `${height}px` : '0px' }}
        className="animated-card-content-wrapper"
      >
        <div 
          ref={contentRef} 
          className={`animated-card-content ${contentClassName} ${isAnimating ? 'opacity-100' : isExpanded ? 'opacity-100' : 'opacity-0'}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

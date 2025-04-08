'use client';

import { useRef, useEffect, useState } from 'react';
import { useCardContext } from './CardContext';

// Custom hook for handling card animations
export function useCardAnimation(id) {
  const { isExpanded } = useCardContext();
  const expanded = isExpanded(id);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Calculate and update content height when expansion state changes
  useEffect(() => {
    if (!contentRef.current) return;
    
    setIsAnimating(true);
    
    if (expanded) {
      // Get the actual height of the content
      const contentHeight = contentRef.current.scrollHeight;
      setHeight(contentHeight);
    } else {
      // Animate to zero height
      setHeight(0);
    }
    
    // End animation after transition completes
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match this with CSS transition duration
    
    return () => clearTimeout(timer);
  }, [expanded]);

  return {
    contentRef,
    height,
    isAnimating,
    expanded
  };
}

export default useCardAnimation;

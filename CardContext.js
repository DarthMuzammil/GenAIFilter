'use client';

import { createContext, useContext, useState } from 'react';

// Create context for managing card state
const CardContext = createContext({
  expandedId: null,
  toggleExpand: () => {},
  isExpanded: () => false,
});

// Provider component to wrap around cards
export function CardProvider({ children }) {
  const [expandedId, setExpandedId] = useState(null);

  // Toggle expansion state of a card
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Check if a specific card is expanded
  const isExpanded = (id) => expandedId === id;

  return (
    <CardContext.Provider value={{ expandedId, toggleExpand, isExpanded }}>
      {children}
    </CardContext.Provider>
  );
}

// Custom hook to use card context
export function useCardContext() {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }
  return context;
}

export default CardContext;

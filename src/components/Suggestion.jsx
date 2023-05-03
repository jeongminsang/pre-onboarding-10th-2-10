import React from 'react';
import './Suggestions.css';

const Suggestions = ({ suggestions, handleSuggestionClick }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul className="suggestions">
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.id}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          <button>{suggestion.name}</button>
        </li>
      ))}
    </ul>
  );
};

export default Suggestions;

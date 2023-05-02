import React, { useState, useEffect } from 'react';
import { getSearch } from '../utils/apis';
import Suggestions from '../components/Suggestion';
import useKeyDown from '../hooks/useKeydown';

const Main = () => {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const getSearchSuggestions = (text) => {
    getSearch(text).then((res) => {
      const { data } = res;
      setSuggestions(data);
    });
  };

  const handleSuggestionClick = (suggestion) => {
    setText(suggestion.name);
    setSuggestions([]);
  };

  const handleKeyDown = useKeyDown(
    suggestions,
    activeSuggestion,
    setText,
    setSuggestions,
    setActiveSuggestion
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text) {
        getSearchSuggestions({ text });
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button>검색</button>
      {text ? <div>추천검색어</div> : null}
      {text && suggestions.length === 0 ? <div>검색어없음</div> : null}
      <Suggestions
        suggestions={suggestions}
        handleSuggestionClick={handleSuggestionClick}
      />
    </>
  );
};

export default Main;

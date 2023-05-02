const useKeyDown = (
  suggestions,
  activeSuggestion,
  setText,
  setSuggestions,
  setActiveSuggestion
) => {
  const handleKeydown = (event) => {
    const keyMap = {
      38: () => setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : prev)),
      40: () =>
        setActiveSuggestion((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : prev
        ),
      13: () => {
        if (activeSuggestion >= 0) {
          setText(suggestions[activeSuggestion].name);
          setSuggestions([]);
          setActiveSuggestion(-1);
        }
      },
    };
    const handleKey = keyMap[event.keyCode];
    if (handleKey) {
      event.preventDefault();
      handleKey();
    }
  };

  return handleKeydown;
};

export default useKeyDown;

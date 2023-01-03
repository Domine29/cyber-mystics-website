import { useState } from "react";

export default function JournalComponent() {
  const [textAreaHeight, setTextAreaHeight] = useState(4);
  let letterCount = 0;

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setTextAreaHeight(textAreaHeight + 1);
      letterCount = 0;
    }
    if (e.key === "Backspace") {
      if (textAreaHeight > 1 && letterCount === 0) {
        setTextAreaHeight(textAreaHeight - 1);
      }
    } else {
      letterCount += 1;
    }
  }

  return (
    <textarea
      className="journal-entry"
      rows={textAreaHeight}
      onKeyDown={handleKeyPress}
    ></textarea>
  );
}

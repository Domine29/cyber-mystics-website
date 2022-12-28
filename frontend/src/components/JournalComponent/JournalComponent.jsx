import { useRef, useState } from "react";
import "./JournalComponent.css";

export default function JournalComponent() {
  const [textAreaHeight, setTextAreaHeight] = useState(3);
  let letterCount = 0;

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      setTextAreaHeight(textAreaHeight + 1);
      letterCount = 0;
    }
    if (e.key === "Backspace") {
      if (textAreaHeight > 3 && letterCount === 0) {
        setTextAreaHeight(textAreaHeight - 1);
      }
    } else {
      letterCount += 1;
    }
  }

  return (
    <div>
      <textarea
        className="journal-entry"
        rows={textAreaHeight}
        onKeyDown={handleKeyPress}
      ></textarea>
    </div>
  );
}

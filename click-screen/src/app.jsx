import { useState } from "react";

import "./styles/app.styles.scss";

export function App() {
  const [dots, setDots] = useState([]);
  const [undid, setUndid] = useState([]);

  function handleClick(event) {
    const position = {
      clientX: event.clientX,
      clientY: event.clientY,
    };
    setDots((prev) => [...prev, position]);
    setUndid([]);
  }

  function handleUndo(event) {
    event.stopPropagation();

    if (dots.length === 0) return;

    const lastDot = dots[dots.length - 1];
    setUndid((prev) => [...prev, lastDot]);

    setDots((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
  }

  function handleRedo(event) {
    event.stopPropagation();

    if (undid.length === 0) return;

    const recoveredDot = undid[undid.length - 1];
    setUndid((prev) => {
      const newArr = [...prev].slice(0, -1);
      return newArr;
    });
    setDots((prev) => [...prev, recoveredDot]);
  }

  return (
    <div onClick={handleClick} className="space-click">
      <button type="button" onClick={handleUndo}>
        Desfazer
      </button>
      <button type="button" onClick={handleRedo}>
        Refazer
      </button>
      {dots.map((dot, index) => (
        <span
          key={index}
          className="dot-click"
          style={{ left: dot.clientX, top: dot.clientY }}
        />
      ))}
    </div>
  );
}

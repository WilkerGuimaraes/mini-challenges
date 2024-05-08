import { useState } from "react";

import "./styles/app.styles.scss";

export function App() {
  const [redLight, setRedLight] = useState(false);
  const [yellowLight, setYellowLight] = useState(false);
  const [greenLight, setGreenLight] = useState(false);

  function activeRedLight() {
    setRedLight(!redLight);
    setYellowLight(false);
    setGreenLight(false);
  }

  function activeYellowLight() {
    setRedLight(false);
    setYellowLight(!yellowLight);
    setGreenLight(false);
  }

  function activeGreenLight() {
    setRedLight(false);
    setYellowLight(false);
    setGreenLight(!greenLight);
  }

  return (
    <div className="container">
      <div className="content">
        <div
          onClick={activeRedLight}
          className={`light red ${redLight ? "active" : ""}`}
        />
        <div
          onClick={activeYellowLight}
          className={`light yellow ${yellowLight ? "active" : ""}`}
        />
        <div
          onClick={activeGreenLight}
          className={`light green ${greenLight ? "active" : ""}`}
        />
      </div>
    </div>
  );
}

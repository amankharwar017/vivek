import { useState } from "react";
import "./App.css";

function App() {
  const initialPosition = {
    top: "60%",
    left: "55%",
  };

  const [message, setMessage] = useState("");
  const [position, setPosition] = useState(initialPosition);

  const moveButton = () => {
    const randomTop = Math.floor(Math.random() * 80);
    const randomLeft = Math.floor(Math.random() * 80);

    setPosition({
      top: randomTop + "%",
      left: randomLeft + "%",
    });
  };

  const handleYesClick = () => {
    setMessage("This is the happiest moment ever 💖 Thank you for choosing me ❤️✨");
  };

  const handleReset = () => {
    setMessage("");
    setPosition(initialPosition);
  };

  return (
    <div className="container">
      <h1 className="heading">Will You Love Me? ❤️</h1>

      {message && <h2 className="thankyou">{message}</h2>}

      <div className="buttons">
        <button className="yes-btn" onClick={handleYesClick}>
         ❤️ Send your response to vivek  ❤️.
        </button>

        <button
          className="no-btn"
          style={{
            top: position.top,
            left: position.left,
          }}
          onMouseEnter={moveButton}
          onClick={moveButton}
        >
          No
        </button>
      </div>

      {/* Reset Button Appears Only After Yes Click */}
      {message && (
        <button className="reset-btn" onClick={handleReset}>
         Call me baby i am waiting (9871769282) ❤️❤️❤️❤️❤️.......
        </button>
      )}
    </div>
  );
}

export default App;
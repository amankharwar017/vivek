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

  // ✅ YES BUTTON CLICK
  const handleYesClick = () => {
    // Open WhatsApp chat directly
    window.open(
      "https://wa.me/919871769282?text=Hi%20Vivek%20❤️%20I%20clicked%20Yes%20💖",
      "_blank"
    );

    // Show message on screen
    setMessage(
      "This is the happiest moment ever 💖 Thank you for choosing me ❤️✨"
    );
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
          ❤️ Send your response to Vivek ❤️
        </button>

        <button
          className="no-btn"
          style={{
            top: position.top,
            left: position.left,
            position: "absolute",
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
          Call me baby I am waiting (9871769282) ❤️❤️❤️❤️❤️
        </button>
      )}
    </div>
  );
}

export default App;
import React, { useState } from 'react';

export function QuestionMark({ explanation }) {
  const [showPopup, setShowPopup] = useState(false);

  const questionMarkStyle = {
    fontSize: "1.5em",
    color: "blue",
    cursor: "pointer"
  };

  const popupContainerStyle = {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'white',
    padding: '10px',
    border: '1px solid gray',
    boxShadow: '2px 2px 5px gray',
    display: showPopup ? "block" : "none",
    borderRadius: '20%',
  };

  return (
    <div>
      <div 
        onMouseEnter={() => setShowPopup(true)} 
        onMouseLeave={() => setShowPopup(false)}
      >
        <p style={questionMarkStyle}>?</p>
      </div>
      <div style={popupContainerStyle}>
        <p>{explanation}</p>
      </div>
    </div>
  );
}

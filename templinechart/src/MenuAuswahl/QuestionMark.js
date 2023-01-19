import React, { useState } from "react";

export function QuestionMark({ explanation }) {
  const [showPopup, setShowPopup] = useState(false);

  const questionMarkStyle = {
    fontSize: "1.5em",
    color: "black",
    cursor: "pointer",

  };

  const popupContainerStyle = {
    zIndex: 1,
    backgroundColor: "white",
    padding: "10px",
    border: "1px solid gray",
    boxShadow: "2px 2px 5px gray",
    display: showPopup ? "block" : "none",
    borderRadius: "25%",
  };

  return (
    <div>
      
      
    </div>
  );
}


import React, { useState } from "react";
const SingleAccordnian = ({ question, answer }) => {
  const [display, setDisplay] = useState("none");
  const [displaysign, setDisplaysign] = useState("+");
  const handleDisplay = (prev) => {
    display === "none" ? setDisplay(true) : setDisplay("none");
    display === "none" ? setDisplaysign("-") : setDisplaysign("+");
  };
  
  return (
    <div>
      <div
        style={{
          width: "30rem",
          height: "fitContent",
          border: "1px solid dodgerblue",
          cursor: "pointer",
        }}
      >
        <div
          style={{ backgroundColor: "#ddd", fontSize: "1.5rem" }}
          onClick={handleDisplay}
        >
          {displaysign} {question}
        </div>
        <div style={{ display: display }}>{answer}</div>
      </div>
    </div>
  );
};

export default SingleAccordnian;

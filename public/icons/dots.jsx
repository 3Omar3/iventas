import React from "react";

function Dots({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="24"
      fill="none"
      viewBox="0 0 6 24"
      className={className}
    >
      <circle cx="3.417" cy="2.875" r="2.5" fill="#fff"></circle>
      <circle cx="3.417" cy="11.953" r="2.5" fill="#fff"></circle>
      <circle cx="3.417" cy="21.03" r="2.5" fill="#fff"></circle>
    </svg>
  );
}

export default Dots;

import React from "react";

function Close({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      className={className}
    >
      <path
        stroke="#2C2E50"
        strokeWidth="2"
        d="M12.705 12.717L1.392 1.403M1.392 12.717L12.706 1.403"
      ></path>
    </svg>
  );
}

export default Close;
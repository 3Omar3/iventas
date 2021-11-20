import React from "react";

function Message({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="99"
      height="94"
      fill="none"
      viewBox="0 0 99 94"
      className={className}
    >
      <path
        fill="#00CD7E"
        fillRule="evenodd"
        stroke="#00CD7E"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M62.639.77c19.759 0 35.782 16.09 35.782 35.948 0 19.85-16.023 35.94-35.782 35.94H40.692L19.603 94V68.4A35.958 35.958 0 01.733 36.719C.734 16.852 16.75.77 36.517.77h26.123z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Message;
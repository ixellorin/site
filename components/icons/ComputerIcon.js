import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={115.5}
      height={78}
      {...props}
    >
      <path
        d="M95.25 67.125a9.362 9.362 0 009.328-9.375l.047-46.875A9.4 9.4 0 0095.25 1.5h-75a9.4 9.4 0 00-9.375 9.375V57.75a9.4 9.4 0 009.375 9.375H1.5V76.5H114v-9.375zm-75-56.25h75V57.75h-75z"
      />
    </svg>
  );
}

export default SvgComponent;


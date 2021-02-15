import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={78} height={78} {...props}>
      <path
        d="M39 1.5A37.5 37.5 0 1076.5 39 37.514 37.514 0 0039 1.5zm0 11.25A11.25 11.25 0 1127.75 24 11.235 11.235 0 0139 12.75zM39 66a27 27 0 01-22.5-12.075c.113-7.463 15-11.55 22.5-11.55 7.462 0 22.387 4.087 22.5 11.55A27 27 0 0139 66z"
      />
    </svg>
  );
}

export default SvgComponent;


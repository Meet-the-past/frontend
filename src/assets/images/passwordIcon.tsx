import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={31}
    viewBox="0 0 29 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M25 15.467H4c-1.657 0-3 1.346-3 3.006v10.521A3.003 3.003 0 0 0 4 32h21c1.657 0 3-1.346 3-3.006V18.473a3.003 3.003 0 0 0-3-3.006Z"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.517 15.467v-6.43c0-2.132.736-4.176 2.045-5.683C10.872 1.847 12.648 1 14.5 1c1.852 0 3.628.847 4.937 2.354 1.31 1.507 2.046 3.551 2.046 5.683v6.43"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;

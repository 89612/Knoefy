import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    strokeLinecap="square"
    strokeMiterlimit={10}
    viewBox="0 0 331.756 328.171"
    {...props}
  >
    <clipPath id="a">
      <path d="M0 0h331.756v328.17H0V0z" />
    </clipPath>
    <g clipPath="url(#a)">
      <path fill="none" d="M0 0h331.756v328.17H0z" />
      <defs>
        <radialGradient
          id="b"
          cx={10.815}
          cy={10.639}
          r={15.171}
          fx={10.815}
          fy={10.639}
          gradientTransform="scale(15.17093)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop offset={0} stopColor="#ffde59" />
          <stop offset={0.56} stopColor="#ffde59" stopOpacity={0} />
          <stop offset={0.56} stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </radialGradient>
      </defs>
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M0 161.402C0 72.262 73.46 0 164.079 0c43.516 0 85.25 17.005 116.021 47.273 30.77 30.27 48.057 71.322 48.057 114.129 0 89.14-73.46 161.401-164.078 161.401C73.46 322.803 0 250.541 0 161.402z"
      />
    </g>
  </svg>
)
export default SvgComponent

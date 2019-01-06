import * as React from "react"

const Spinner: React.FunctionComponent<{}> = () => (
  <svg width={38} height={38}>
    <g
      transform="translate(1 1)"
      strokeWidth={2}
      stroke="#000"
      fill="none"
      fillRule="evenodd"
    >
      <circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
      <path d="M35.84 20.393C37.162 10.54 30.244 1.48 20.393.16">
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="500ms"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
)

export default Spinner

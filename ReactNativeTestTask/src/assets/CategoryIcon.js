import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CategoryIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill={props.bgColor}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M21 6.674a3.674 3.674 0 11-7.348-.001 3.674 3.674 0 017.348 0z"
        stroke={props.round}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M21 6.674a3.674 3.674 0 11-7.348-.001 3.674 3.674 0 017.348 0z"
        stroke={props.color}
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.347 6.674a3.674 3.674 0 11-7.348 0 3.674 3.674 0 017.348 0z"
        stroke={props.round}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.347 6.674a3.674 3.674 0 11-7.348 0 3.674 3.674 0 017.348 0z"
        stroke={props.color}
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M21 17.262a3.674 3.674 0 11-7.347-.001 3.674 3.674 0 017.347 0z"
        stroke={props.round}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M21 17.262a3.674 3.674 0 11-7.347-.001 3.674 3.674 0 017.347 0z"
        stroke={props.color}
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.347 17.262a3.673 3.673 0 11-7.346 0 3.673 3.673 0 017.346 0z"
        stroke={props.round}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M10.347 17.262a3.673 3.673 0 11-7.346 0 3.673 3.673 0 017.346 0z"
        stroke={props.color}
        strokeOpacity={0.2}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CategoryIcon

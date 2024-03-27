import * as React from "react"

const CaretDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={7}
    fill="none"
    {...props}
  >
    <path stroke="#fff" strokeWidth={2} d="m1 1 4 4 4-4" />
  </svg>
)

export { CaretDown }

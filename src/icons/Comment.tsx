import * as React from "react"
const CommentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#CDD2EE"
      d="M2.62 16.5H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 12.387 0 10.39 0 8.294 0 4.428 3.52.5 9.03.5 14.87.5 18 4.115 18 7.955c0 3.866-3.164 7.478-8.97 7.478-1.016 0-2.078-.137-3.025-.388A4.705 4.705 0 0 1 2.62 16.5Z"
    />
  </svg>
)
export { CommentIcon }

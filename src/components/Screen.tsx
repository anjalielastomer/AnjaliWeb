import React from "react"
import Frame89 from "../components/Frame89"

type ScreenProps = {
  className?: string
}

/**
 * Page component generated from Phase design
 * Screen
 */
export default function Screen({ className = "" }: ScreenProps): React.JSX.Element {
  return (
    <>
      {/* Phase element: Screen -- start */}
      <div
        data-ph-id="el-6-F3ca"
        className={` pointer-events-none absolute left-0 top-0 will-change-transform origin-top-left w-[3000px] h-[210px] opacity-100 rounded-none ${className}`}
        style={{
          transform:
            "translate(250px, 250px) rotate(0deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(-250px, -250px) translate(-0.1736111111111111px, -1.1904761904761905px) translate(0.1736111111111111px, 1.1904761904761905px)"
        }}
      >
        <div
          data-ph-layer-id="el-6-F3ca-fills-0"
          className="pointer-events-none absolute inset-0 bg-clip-padding opacity-0 rounded-none"
          style={{ backgroundColor: "#ffffff" }}
        />

        <div className="pointer-events-none absolute inset-0 origin-top-left overflow-visible z-[1] rounded-none">
          <Frame89 onFrame89MouseEnter={() => {}} onFrame89MouseLeave={() => {}} />
        </div>
      </div>
      {/* Phase element: Screen -- end */}
    </>
  )
}

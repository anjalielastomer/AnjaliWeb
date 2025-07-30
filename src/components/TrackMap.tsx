import React, { useEffect, useCallback } from "react"
import useAnimation from "../hooks/useAnimation"

export type Props = {
  onTrackMapMouseEnter?: (e: React.UIEvent<Element>) => void,
  onTrackMapMouseLeave?: (e: React.UIEvent<Element>) => void
}

/**
 * Component generated from Phase design
 * TrackMap
 */
export default function TrackMap({ onTrackMapMouseEnter, onTrackMapMouseLeave }: Props) {
  return (
    <>
      {/* Phase element: Track10 -- start */}
      <div
        data-ph-id="el-89--yLm"
        onMouseEnter={(e: React.UIEvent<Element>) => {
          onTrackMapMouseEnter?.(e)
        }}
        onMouseLeave={(e: React.UIEvent<Element>) => {
          onTrackMapMouseLeave?.(e)
        }}
        className="pointer-events-auto cursor-pointer absolute left-0 top-0 w-[28.680164337158203px] h-[30.367233276367188px] will-change-transform origin-top-left opacity-100 rounded-none"
        style={{
          transform:
            "translate(200.7177734375px, 577.748046875px) rotate(0deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(-14.340082168579102px, -15.183616638183594px) translate(-0.5px, -0.5px) translate(0.5px, 0.5px)"
        }}
      >
        <div
          data-ph-layer-id="el-89--yLm-fills-0"
          className="pointer-events-none absolute inset-0 bg-clip-padding opacity-0 bg-cover bg-center rounded-none"
          style={{
            backgroundImage: "url(/images/94feef84-cf21-4823-be38-ab419070b19b.png)"
          }}
        />
      </div>
      {/* Phase element: Track10 -- end */}
    </>
  )
}

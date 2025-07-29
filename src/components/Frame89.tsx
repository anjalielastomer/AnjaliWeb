import React, { useEffect, useCallback } from "react"
import useAnimation from "../hooks/useAnimation"
import {
  line3MouseIn,
  line3MouseOut,
  line2MouseIn,
  line2MouseOut,
  line1MouseIn,
  line1MouseOut
} from "@/assets/tracks"

export type Props = {
  onFrame89MouseEnter?: (e: React.UIEvent<Element>) => void,
  onFrame89MouseLeave?: (e: React.UIEvent<Element>) => void
}

/**
 * Component generated from Phase design
 * Frame89
 */
export default function Frame89({ onFrame89MouseEnter, onFrame89MouseLeave }: Props) {
  const apiLine3MouseIn = useAnimation(line3MouseIn)
  const apiLine3MouseOut = useAnimation(line3MouseOut)
  const apiLine2MouseIn = useAnimation(line2MouseIn)
  const apiLine2MouseOut = useAnimation(line2MouseOut)
  const apiLine1MouseIn = useAnimation(line1MouseIn)
  const apiLine1MouseOut = useAnimation(line1MouseOut)

  const handleLine3MouseIn = useCallback((e: React.UIEvent<Element>) => {
    apiLine3MouseIn.forward()
  }, [])

  const handleLine3MouseOut = useCallback((e: React.UIEvent<Element>) => {
    apiLine3MouseOut.forward()
  }, [])

  const handleLine2MouseIn = useCallback((e: React.UIEvent<Element>) => {
    apiLine2MouseIn.forward()
  }, [])

  const handleLine2MouseOut = useCallback((e: React.UIEvent<Element>) => {
    apiLine2MouseOut.forward()
  }, [])

  const handleLine1MouseIn = useCallback((e: React.UIEvent<Element>) => {
    apiLine1MouseIn.forward()
  }, [])

  const handleLine1MouseOut = useCallback((e: React.UIEvent<Element>) => {
    apiLine1MouseOut.forward()
  }, [])

  return (
    <>
      {/* Phase element: Frame 89 -- start */}
      <div
        data-ph-id="el-11-qfZD"
        onMouseEnter={(e: React.UIEvent<Element>) => {
          onFrame89MouseEnter(e)
        }}
        onMouseLeave={(e: React.UIEvent<Element>) => {
          onFrame89MouseLeave(e)
        }}
        className="pointer-events-auto cursor-pointer absolute left-0 top-0 will-change-transform origin-top-left w-[3000px] h-[210px] opacity-100 rounded-none"
        style={{
          transform:
            "translate(1196.4705810546875px, -294.8181457519531px) rotate(-40.00000000000001deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(-1342px, -105px) translate(-0.5px, -0.5px) translate(0.5px, 0.5px)"
        }}
      >
        <div
          data-ph-layer-id="el-11-qfZD-fills-0"
          className="pointer-events-none absolute inset-0 bg-clip-padding opacity-0 rounded-none"
          style={{
            backgroundColor: "#ffffff"
          }}
        />

        <div className="pointer-events-none absolute inset-0 origin-top-left overflow-hidden z-0 rounded-none">
          {/* Phase element: Line 3 -- start */}
          <svg
            data-ph-id="el-12-qfZD"
            className="overflow-visible pointer-events-none absolute left-0 top-0 will-change-transform origin-top-left opacity-100"
            style={{
              transform:
                "translate(42.5px, 59px) rotate(0deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px)"
            }}
          >
            <g
              onMouseEnter={(e: React.UIEvent<Element>) => {
                handleLine3MouseIn(e)
              }}
              onMouseLeave={(e: React.UIEvent<Element>) => {
                handleLine3MouseOut(e)
              }}
              className="pointer-events-auto cursor-pointer"
            >
              <defs>
                <path data-ph-geometry-id="el-12-qfZD" id="el-12-qfZD-geometry" d="M0 0L2700 0" />
              </defs>

              <use
                data-ph-layer-id="el-12-qfZD-strokes-0"
                xlinkHref="#el-12-qfZD-geometry"
                className="fill-none stroke-[7]"
                style={{
                  stroke: "#fb7602",
                  strokeOpacity: "0.5"
                }}
                strokeDasharray="14 14"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </g>
          </svg>
          {/* Phase element: Line 3 -- end */}
          {/* Phase element: Line 2 -- start */}
          <svg
            data-ph-id="el-13-qfZD"
            className="overflow-visible pointer-events-none absolute left-0 top-0 will-change-transform origin-top-left opacity-100"
            style={{
              transform:
                "translate(42.5px, 105px) rotate(0deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px)"
            }}
          >
            <g
              onMouseEnter={(e: React.UIEvent<Element>) => {
                handleLine2MouseIn(e)
              }}
              onMouseLeave={(e: React.UIEvent<Element>) => {
                handleLine2MouseOut(e)
              }}
              className="pointer-events-auto cursor-pointer"
            >
              <defs>
                <path data-ph-geometry-id="el-13-qfZD" id="el-13-qfZD-geometry" d="M0 0L2700 0" />
              </defs>

              <use
                data-ph-layer-id="el-13-qfZD-strokes-0"
                xlinkHref="#el-13-qfZD-geometry"
                className="fill-none stroke-[7]"
                style={{
                  stroke: "#fb7602",
                  strokeOpacity: "0.5"
                }}
                strokeDasharray="14 14"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </g>
          </svg>
          {/* Phase element: Line 2 -- end */}
          {/* Phase element: Line 1 -- start */}
          <svg
            data-ph-id="el-14-qfZD"
            className="overflow-visible pointer-events-none absolute left-0 top-0 will-change-transform origin-top-left opacity-100"
            style={{
              transform:
                "translate(42.5px, 151px) rotate(0deg) skew(0deg, 0deg) scale(1, 1) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px) translate(0px, 0px)"
            }}
          >
            <g
              onMouseEnter={(e: React.UIEvent<Element>) => {
                handleLine1MouseIn(e)
              }}
              onMouseLeave={(e: React.UIEvent<Element>) => {
                handleLine1MouseOut(e)
              }}
              className="pointer-events-auto cursor-pointer"
            >
              <defs>
                <path data-ph-geometry-id="el-14-qfZD" id="el-14-qfZD-geometry" d="M0 0L2644 0" />
              </defs>

              <use
                data-ph-layer-id="el-14-qfZD-strokes-0"
                xlinkHref="#el-14-qfZD-geometry"
                className="fill-none stroke-[7]"
                style={{
                  stroke: "#fb7602",
                  strokeOpacity: "0.5"
                }}
                strokeDasharray="14 14"
                strokeLinecap="butt"
                strokeLinejoin="miter"
              />
            </g>
          </svg>
          {/* Phase element: Line 1 -- end */}
        </div>
      </div>
      {/* Phase element: Frame 89 -- end */}
    </>
  )
}

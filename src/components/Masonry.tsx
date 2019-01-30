import * as React from "react"
import { useState, useLayoutEffect, useRef } from "react"
import styled from "@emotion/styled"

import media from "utils/media"
import useWindowSize from "hooks/useWindowSize"

type ParentProps = {
  gridGap: number
  colWidth: number
  rowHeight: number
}
const Parent = styled.div<ParentProps>(({ colWidth, rowHeight, gridGap }) => ({
  width: "100%",
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(${colWidth}px, 1fr))`,
  gridAutoRows: `calc(${rowHeight}px - ${gridGap}px)`,
  gridGap: `${gridGap}px`,
  [media.tabletLandscapeAndSmaller]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(200px, 1fr))`
  },
  [media.phoneOnly]: {
    gridTemplateColumns: `repeat(auto-fit, minmax(150px, 1fr))`
  }
}))

const Child = styled.div<{ span: number }>(({ span }) => ({
  gridRow: `span ${span}`,
  height: "max-content"
}))

type Props = {
  rowHeight?: number
  colWidth: number
  gridGap?: number
  getChildKeyByIndex: (index: number) => string
}

type ChildSpanLookup = { [key: string]: number }

const Masonry: React.FunctionComponent<Props> = ({
  colWidth,
  rowHeight = 10,
  gridGap = 20,
  children,
  getChildKeyByIndex
}) => {
  const parentRef = useRef<HTMLDivElement>(null)
  const [spans, setSpans] = useState<ChildSpanLookup>({})

  const width = useWindowSize(500, () => setSpans({}))

  useLayoutEffect(
    () => {
      const parentElement = parentRef.current
      if (parentElement) {
        const updatedSpans = Array.from(parentElement.children).reduce<
          ChildSpanLookup
        >((acc, child, index) => {
          const childKey = getChildKeyByIndex(index)

          const childSpan = Math.ceil(child.clientHeight / rowHeight)
          return { ...acc, [childKey]: childSpan }
        }, {})
        setSpans(updatedSpans)
      }
    },
    [children, width]
  )

  return (
    <Parent
      ref={parentRef}
      colWidth={colWidth}
      rowHeight={rowHeight}
      gridGap={gridGap}
    >
      {React.Children.map(children, (child, index: number) => {
        const key = getChildKeyByIndex(index)
        const span = spans[key]
        const gridProps = {
          span: span || 0,
          style: span > 0 ? { height: span * rowHeight } : {}
        }
        return (
          <Child key={key} {...gridProps}>
            {child}
          </Child>
        )
      })}
    </Parent>
  )
}

export default Masonry

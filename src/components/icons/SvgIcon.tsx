import * as React from "react"
import styled from "@emotion/styled"

type FontSize = "default" | "small" | "large"

type Props = {
  fontSize?: FontSize
} & React.SVGProps<SVGSVGElement>

const getIconFontSize = (fontSize?: FontSize): number => {
  switch (fontSize) {
    case "large":
      return 28
    case "small":
      return 12
    default:
      return 16
  }
}

const StyledSvgIcon = styled.svg<Props>(({ fontSize }) => ({
  width: "1em",
  height: "1em",
  fontSize: getIconFontSize(fontSize)
}))

const SvgIcon: React.FunctionComponent<Props> = props => (
  <StyledSvgIcon {...props} />
)

export { Props as SvgIconProps }
export default SvgIcon

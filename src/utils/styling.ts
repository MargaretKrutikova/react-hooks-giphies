import { StyledOptions } from "@emotion/styled"
import isPropValid from "@emotion/is-prop-valid"

export const omitProps = <Props>(
  ...omit: Array<Extract<keyof Props, string>>
): Partial<StyledOptions> => ({
  shouldForwardProp: prop => isPropValid(prop) && omit.indexOf(prop as any) < 0
})

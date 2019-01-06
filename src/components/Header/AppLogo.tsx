import styled from "@emotion/styled"
import media from "utils/media"

import Logo from "components/icons/Logo"

const AppLogo = styled(Logo)({
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  animation: "App-logo-spin infinite 20s linear",
  height: 80,
  [media.phoneOnly]: {
    height: 40
  }
})

export default AppLogo

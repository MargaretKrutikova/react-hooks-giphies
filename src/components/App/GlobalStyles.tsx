import * as React from "react"
import { Global, css } from "@emotion/core"

const GlobalStyles = () => (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

      body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
      }
    `}
  />
)

export default GlobalStyles

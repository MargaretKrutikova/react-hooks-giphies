import * as React from "react"
import * as ReactDOM from "react-dom"
import App from "components/App"
import registerServiceWorker from "./registerServiceWorker"

const rootEl = document.getElementById("root")

ReactDOM.render(<App />, rootEl)
registerServiceWorker()

if (module.hot) {
  module.hot.accept("components/App", () => {
    const NextApp = require("components/App").default
    ReactDOM.render(<NextApp />, rootEl)
  })
}

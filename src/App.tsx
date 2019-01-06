import * as React from "react"
import { StateInspector } from "reinspect"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from "@emotion/styled"

import StateProvider, { APP_STATE_INSPECTOR_ID } from "StateProvider"
import GifSearch from "components/GifSearch"
import FavoriteGifs from "components/FavoriteGifs"
import NotificationsProvider from "components/Notifications"
import Header from "components/Header"

const Main = styled.main({
  maxWidth: 1440,
  paddingTop: 30,
  margin: "0 auto"
})

const App: React.FunctionComponent = () => (
  <StateInspector name={APP_STATE_INSPECTOR_ID}>
    <StateProvider>
      <BrowserRouter>
        <>
          <Header />
          <Main>
            <Switch>
              <Route path="/" exact component={GifSearch} />
              <Route path="/favorites" exact component={FavoriteGifs} />
            </Switch>
          </Main>
          <NotificationsProvider />
        </>
      </BrowserRouter>
    </StateProvider>
  </StateInspector>
)

export default App

import React from "react"
import ReactDOM from "react-dom/client"

import App from "../src/Components/App/App"
import GlobalStyles from "./Components/GlobalStyles/GlobalStyles"
import { HashRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)

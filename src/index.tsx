import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import store from './app/store'

import "./index.css"

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <div className="test">hello world</div>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
)

  // <React.StrictMode>
  //   <div className="test">hello world</div>
  // </React.StrictMode>,
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux'
import { store } from './app/store'

import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div className="test">hello world</div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

  // <React.StrictMode>
  //   <div className="test">hello world</div>
  // </React.StrictMode>,
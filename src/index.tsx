import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import './styles/tailwind-build.css'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import { ToastContainer } from 'react-toastify'

render(
  <React.StrictMode>
    <ToastContainer />
    <App>
      <Home />
    </App>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

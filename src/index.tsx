import React from 'react'
import { render } from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import './styles/tailwind-build.css'
import 'react-toastify/dist/ReactToastify.css'
import HomePage from './pages/Home'
import StatusPage from './pages/Status'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Route } from 'react-router-dom'

render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <App>
        <Route path='/' exact component={HomePage} />
        <Route path='/status' exact component={StatusPage} />
      </App>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from 'react'
import { hydrate, render } from 'react-dom'
import './styles/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import './styles/tailwind-build.css'
import Home from './pages/Home'

const rootElement = document.getElementById('root')
const View = () => (
  <React.StrictMode>
    <App>
      <Home />
    </App>
  </React.StrictMode>
)

if (rootElement?.hasChildNodes()) {
  hydrate(View(), rootElement)
} else {
  render(View(), rootElement)
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

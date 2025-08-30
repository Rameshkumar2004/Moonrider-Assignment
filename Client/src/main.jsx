import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {Brower}

createRoot(document.getElementById('root')).render(
  // <BrowserRoutter>
  <StrictMode>
    <App />
  </StrictMode>,
  // </BrowserRoutter>
)

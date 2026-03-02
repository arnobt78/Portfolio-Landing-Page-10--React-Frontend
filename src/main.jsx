import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// createRoot: React 18 API; mounts the app into the DOM element with id="root"
// StrictMode helps surface side-effect and deprecation issues in development
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'

//DOM (Document object model) é a representação do HTMl através do Javascript

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

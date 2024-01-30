import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from 'src/App.jsx'
import 'src/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter future={{v7_startTransition: true}}>
    <App />
  </BrowserRouter>,
)

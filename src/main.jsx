import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  ///los componentes deben estar en pascal case (HolaTu) para que react pueda identificarlo 
  <App />
)

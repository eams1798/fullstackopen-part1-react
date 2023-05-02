import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { anecdotes } from './utils/anecdotes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App anecdotes={anecdotes}/>
  </React.StrictMode>,
)

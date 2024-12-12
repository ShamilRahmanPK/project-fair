import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContexShare from './contexts/ContexShare.jsx'
import TokenAuth from './contexts/TokenAuth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TokenAuth>
      <ContexShare>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContexShare>
    </TokenAuth>
  </StrictMode>,
)

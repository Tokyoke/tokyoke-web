import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/_global/Header'
import Footer from './components/_global/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<App />} /> */}

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

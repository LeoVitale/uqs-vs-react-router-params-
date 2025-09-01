import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
import Home from './components/Home'
import UrlParams from './components/UrlParams'
import Nuqs from './components/Nuqs'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <NuqsAdapter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/url-params" element={<UrlParams />} />
          <Route path="/nuqs" element={<Nuqs />} />
        </Routes>
      </NuqsAdapter>
    </BrowserRouter>
  </StrictMode>,
)

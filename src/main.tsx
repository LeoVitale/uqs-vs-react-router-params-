import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import { NuqsAdapter } from 'nuqs/adapters/react-router/v7';
import Home from './components/Home'
import UrlParams from './pages/UrlParams'
import Nuqs from './pages/Nuqs'
import { ThemeProvider } from './components/theme-provider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NuqsAdapter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/url-params" element={<UrlParams />} />
          <Route path="/nuqs" element={<Nuqs />} />
        </Routes>
      </NuqsAdapter>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)

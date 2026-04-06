import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Dashboards from './pages/Dashboards'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import { LangProvider, useLang } from './context/LangContext'

// Syncs the lang context with the URL prefix on direct navigation / bookmarks.
// Must live inside both BrowserRouter and LangProvider.
function LangSync() {
  const location = useLocation()
  const { setLang } = useLang()
  useEffect(() => {
    setLang(location.pathname.startsWith('/en') ? 'en' : 'es')
  }, [location.pathname, setLang])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-javier/">
      <LangProvider>
        <LangSync />
        <NavBar />
        <Routes>
          {/* Spanish routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/dashboards" element={<Dashboards />} />
          {/* English routes — same components, LangSync sets lang='en' */}
          <Route path="/en" element={<Home />} />
          <Route path="/en/cv" element={<CV />} />
          <Route path="/en/dashboards" element={<Dashboards />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LangProvider>
    </BrowserRouter>
  )
}

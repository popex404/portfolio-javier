import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Dashboards from './pages/Dashboards'
import HomeEN from './pages/HomeEN'
import CVEN from './pages/CVEN'
import DashboardsEN from './pages/DashboardsEN'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'
import { LangProvider } from './context/LangContext'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-javier/">
      <LangProvider>
        <NavBar />
        <Routes>
          {/* Spanish routes */}
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/dashboards" element={<Dashboards />} />
          {/* English routes */}
          <Route path="/en" element={<HomeEN />} />
          <Route path="/en/cv" element={<CVEN />} />
          <Route path="/en/dashboards" element={<DashboardsEN />} />
          {/* Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </LangProvider>
    </BrowserRouter>
  )
}

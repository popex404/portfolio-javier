import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import Dashboards from './pages/Dashboards'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-javier/">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/dashboards" element={<Dashboards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

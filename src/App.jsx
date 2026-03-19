import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CV from './pages/CV'
import CVDigital from './pages/CVDigital'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter basename="/portfolio-javier/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/cv-digital" element={<CVDigital />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

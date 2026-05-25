import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import WaterBackground from './components/WaterBackground'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Departments from './pages/Departments'
import EntServices from './pages/EntServices'
import Doctors from './pages/Doctors'
import Facilities from './pages/Facilities'
import PatientInfo from './pages/PatientInfo'
import Faqs from './pages/Faqs'
import Contact from './pages/Contact'
import VideoConsultation from './pages/VideoConsultation'
import SecondOpinion from './pages/SecondOpinion'
import NotFound from './pages/NotFound'

function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <WaterBackground />
      <ScrollTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/ent-services" element={<EntServices />} />
          <Route path="/doctor" element={<Doctors />} />
          <Route path="/doctors" element={<Navigate to="/doctor" replace />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/patient-info" element={<PatientInfo />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video-consultation" element={<VideoConsultation />} />
          <Route path="/second-opinion" element={<SecondOpinion />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

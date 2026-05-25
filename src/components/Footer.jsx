import { Link } from 'react-router-dom'
import Icon from './Icon'
import { hospital } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner glass">
          <div className="footer-grid">
            <div>
              <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Ajmer ENT Hospital" className="brand-logo" style={{ marginBottom: 14 }} />
              <p>{hospital.tagline}. Free treatment under the Chiranjeevi Scheme & Ayushman Bharat.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <p><Link to="/about">About Us</Link></p>
              <p><Link to="/departments">Departments</Link></p>
              <p><Link to="/ent-services">ENT Services</Link></p>
              <p><Link to="/doctor">Doctor</Link></p>
            </div>
            <div>
              <h4>Patients</h4>
              <p><Link to="/patient-info">Patient Info</Link></p>
              <p><Link to="/video-consultation">Video Consultation</Link></p>
              <p><Link to="/second-opinion">Second Opinion</Link></p>
              <p><Link to="/faqs">FAQs</Link></p>
              <p><Link to="/contact">Contact</Link></p>
            </div>
            <div>
              <h4>Reach Us</h4>
              <p>{hospital.address}</p>
              <p><Icon name="phone" size={15} className="iico" /> <a href={`tel:${hospital.phone}`}>{hospital.phone}</a></p>
              <p><Icon name="clock" size={15} className="iico" /> OPD: {hospital.opd}</p>
              <p><Icon name="ambulance" size={15} className="iico" /> {hospital.emergency}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Ajmer ENT Hospital · Dr. Sikander. All rights reserved.</span>
            <span>Designed with care for the people of Ajmer.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

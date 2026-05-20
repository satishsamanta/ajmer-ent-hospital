import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import Icon from './Icon'
import { hospital } from '../data/content'

export default function CtaBanner() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <div className="cta-banner glass">
            <div style={{ position: 'relative' }}>
              <span className="eyebrow">We are here for you</span>
              <h2>Need ENT care? Book your visit today.</h2>
              <p>Call our team or send a message — free treatment available under the Chiranjeevi Scheme & Ayushman Bharat.</p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a className="btn btn-primary" href={`tel:${hospital.phone}`}><Icon name="phone" size={18} /> Call {hospital.phone}</a>
                <Link className="btn btn-ghost" to="/contact"><Icon name="message" size={18} /> Send a Message</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

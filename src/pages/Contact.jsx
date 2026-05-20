import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import { hospital, departments } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${hospital.coords.lng - 0.03}%2C${hospital.coords.lat - 0.02}%2C${hospital.coords.lng + 0.03}%2C${hospital.coords.lat + 0.02}&layer=mapnik&marker=${hospital.coords.lat}%2C${hospital.coords.lng}`

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        accent="with us"
        sub="Reach the hospital for appointments, directions or any patient assistance you need."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container contact-grid">
          <Reveal>
            <div className="card glass">
              <div className="c-icon"><Icon name="location" size={28} /></div>
              <h3>Hospital Details</h3>
              <div className="info-row">
                <span className="ir-icon"><Icon name="hospital" size={22} /></span>
                <div><strong>Address</strong><span>{hospital.address}</span></div>
              </div>
              <div className="info-row">
                <span className="ir-icon"><Icon name="phone" size={22} /></span>
                <div><strong>Phone / Appointment</strong><span><a href={`tel:${hospital.phone}`}>{hospital.phone}</a></span></div>
              </div>
              <div className="info-row">
                <span className="ir-icon"><Icon name="clock" size={22} /></span>
                <div><strong>OPD Timings</strong><span>{hospital.opd}</span></div>
              </div>
              <div className="info-row">
                <span className="ir-icon"><Icon name="ambulance" size={22} /></span>
                <div><strong>Emergency</strong><span>{hospital.emergency}</span></div>
              </div>
              <div className="info-row">
                <span className="ir-icon"><Icon name="compass" size={22} /></span>
                <div><strong>Location</strong><span>Ajmer city — {hospital.coords.lat}°N, {hospital.coords.lng}°E</span></div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card glass">
              <div className="c-icon"><Icon name="message" size={28} /></div>
              <h3>Send a Message</h3>
              <form onSubmit={onSubmit} style={{ marginTop: 14 }}>
                <div className="field">
                  <label>Full Name</label>
                  <input type="text" required placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Phone Number</label>
                  <input type="tel" required placeholder="Your contact number" />
                </div>
                <div className="field">
                  <label>Department</label>
                  <select defaultValue="">
                    <option value="" disabled>Select a department</option>
                    {departments.map(d => <option key={d.name}>{d.name}</option>)}
                  </select>
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea rows="4" required placeholder="How can we help you?" />
                </div>
                <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                  Submit Request
                </button>
                {sent && <p className="form-note">✓ Thank you — your request has been noted. Our team will contact you shortly.</p>}
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="glass" style={{ overflow: 'hidden', padding: 8 }}>
              <iframe
                title="Hospital location"
                src={mapSrc}
                style={{ width: '100%', height: 380, border: 0, borderRadius: 16 }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

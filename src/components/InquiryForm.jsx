import { useState } from 'react'
import Icon from './Icon'
import { departments } from '../data/content'

const timeSlots = ['09:00 AM – 11:00 AM', '11:00 AM – 01:00 PM', '02:00 PM – 04:00 PM', '04:00 PM – 06:00 PM']

export default function InquiryForm({ variant = 'video' }) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 6000)
  }

  return (
    <div className="card glass">
      <div className="c-icon">
        <Icon name={variant === 'video' ? 'message' : 'document'} size={28} />
      </div>
      <h3>{variant === 'video' ? 'Request a Video Consultation' : 'Request a Second Opinion'}</h3>
      <p style={{ color: 'var(--muted)', marginTop: 6 }}>
        Fill in the details below and our team will contact you to confirm.
      </p>

      <form onSubmit={onSubmit} style={{ marginTop: 18 }}>
        <div className="field">
          <label>Full Name</label>
          <input type="text" required placeholder="Patient's full name" />
        </div>
        <div className="grid grid-2" style={{ gap: 14 }}>
          <div className="field">
            <label>Phone Number</label>
            <input type="tel" required placeholder="Contact number" />
          </div>
          <div className="field">
            <label>Email Address</label>
            <input type="email" placeholder="Email (optional)" />
          </div>
        </div>

        {variant === 'video' ? (
          <div className="grid grid-2" style={{ gap: 14 }}>
            <div className="field">
              <label>Preferred Date</label>
              <input type="date" required />
            </div>
            <div className="field">
              <label>Preferred Time Slot</label>
              <select defaultValue="" required>
                <option value="" disabled>Select a slot</option>
                {timeSlots.map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
          </div>
        ) : (
          <div className="field">
            <label>Concerned Department / Specialty</label>
            <select defaultValue="" required>
              <option value="" disabled>Select a department</option>
              {departments.map(d => <option key={d.name}>{d.name}</option>)}
            </select>
          </div>
        )}

        <div className="field">
          <label>{variant === 'video' ? 'Describe your symptoms' : 'Describe your condition & current diagnosis'}</label>
          <textarea rows="4" required placeholder={variant === 'video'
            ? 'Briefly describe the problem you would like to consult about.'
            : 'Briefly describe your condition and the diagnosis you would like reviewed.'} />
        </div>

        {variant === 'opinion' && (
          <p style={{ fontSize: '0.82rem', color: 'var(--muted)', marginBottom: 14 }}>
            <Icon name="document" size={14} className="iico" /> Please keep your medical reports, scans and
            prescriptions ready — our team will guide you on sharing them securely.
          </p>
        )}

        <button className="btn btn-primary" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
          Submit Request
        </button>
        {sent && (
          <p className="form-note">
            ✓ Thank you — your request has been received. Our team will call you shortly to confirm.
          </p>
        )}
      </form>
    </div>
  )
}

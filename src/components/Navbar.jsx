import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Icon from './Icon'
import { hospital } from '../data/content'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/departments', label: 'Departments' },
  { to: '/ent-services', label: 'ENT Services' },
  { to: '/doctors', label: 'Doctors' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/patient-info', label: 'Patient Info' },
  { to: '/contact', label: 'Contact' },
]

const actions = [
  { to: '/video-consultation', label: 'Video Consultation', icon: 'video', primary: false },
  { to: '/second-opinion', label: 'Second Opinion', icon: 'shield', primary: false },
  { to: '/contact', label: 'Book Appointment', icon: 'calendar', primary: true },
]

const socials = [
  {
    label: 'Facebook', href: 'https://www.facebook.com',
    svg: <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.6c0-.85.25-1.4 1.5-1.4H17V4.6c-.5-.07-1.5-.15-2.6-.15-2.5 0-4.2 1.5-4.2 4.3v2.4H7.5v3H10V21h3.5z" />,
  },
  {
    label: 'Instagram', href: 'https://www.instagram.com',
    svg: <><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.9" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.9" /><circle cx="17" cy="7" r="1.3" /></>,
  },
  {
    label: 'YouTube', href: 'https://www.youtube.com',
    svg: <path d="M21.6 8.2a2.5 2.5 0 0 0-1.75-1.77C18.3 6 12 6 12 6s-6.3 0-7.85.43A2.5 2.5 0 0 0 2.4 8.2 26 26 0 0 0 2.1 12c0 1.3.1 2.6.3 3.8a2.5 2.5 0 0 0 1.75 1.77C5.7 18 12 18 12 18s6.3 0 7.85-.43a2.5 2.5 0 0 0 1.75-1.77c.2-1.2.3-2.5.3-3.8s-.1-2.6-.3-3.8zM10 15V9l5.2 3L10 15z" />,
  },
]

const bookAction = actions.find(a => a.primary)
const topActions = actions.filter(a => !a.primary)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        {/* Top utility bar */}
        <div className="nav-topbar glass">
          <a href={`tel:${hospital.phone}`} className="nav-phone">
            <span className="nav-phone-ic"><Icon name="phone" size={20} /></span>
            <span className="nav-phone-tx">
              <small>24×7 Emergency Helpline</small>
              <strong>{hospital.phone}</strong>
            </span>
          </a>

          <div className="nav-actions">
            {topActions.map(a => (
              <Link key={a.label} to={a.to} onClick={close} className="btn-mini btn-mini-ghost">
                <Icon name={a.icon} size={16} /> {a.label}
              </Link>
            ))}
          </div>

          <div className="nav-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="nav-social"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Main nav bar */}
        <div className="nav-mainbar glass">
          <Link to="/" className="brand" onClick={close}>
            <img src={`${import.meta.env.BASE_URL}logo.webp`} alt="Ajmer ENT Hospital" className="brand-logo" />
          </Link>

          <div className="nav-bar">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-main-right">
            <Link to={bookAction.to} className="btn-mini btn-mini-primary">
              <Icon name={bookAction.icon} size={16} /> {bookAction.label}
            </Link>
          </div>

          <button className="nav-toggle" onClick={() => setOpen(o => !o)} aria-label="Menu">
            {open ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`nav-mobile glass ${open ? 'open' : ''}`}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={close}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
          <div className="nav-mobile-actions">
            {actions.map(a => (
              <Link
                key={a.label}
                to={a.to}
                onClick={close}
                className={`btn-mini ${a.primary ? 'btn-mini-primary' : 'btn-mini-ghost'}`}
              >
                <Icon name={a.icon} size={16} /> {a.label}
              </Link>
            ))}
          </div>
          <div className="nav-mobile-socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="nav-social"
              >
                <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                  {s.svg}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

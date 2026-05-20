import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <div className="glass" style={{ padding: 56, maxWidth: 520, margin: '0 auto' }}>
            <div style={{ fontSize: '3.5rem' }}>🌊</div>
            <h1 style={{ fontSize: '2.4rem', marginTop: 10 }}>Page not found</h1>
            <p style={{ color: 'var(--muted)', margin: '12px 0 22px' }}>
              The page you are looking for could not be found. Let us guide you back.
            </p>
            <Link className="btn btn-primary" to="/">← Back to Home</Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

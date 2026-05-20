import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { hospital, highlights, schemes, entServices, departments } from '../data/content'

const HERO_IMG = 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=900&q=80'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <Reveal>
            <span className="eyebrow">Welcome to {hospital.name}</span>
            <h1>
              Compassionate <span className="accent">Ear, Nose & Throat</span> care in the heart of Ajmer
            </h1>
            <p className="lead">
              {hospital.longName} — a multi-specialty hospital led by {hospital.owner},
              offering advanced ENT treatment, modern diagnostics and free care under the
              Chiranjeevi Scheme & Ayushman Bharat.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href={`tel:${hospital.phone}`}><Icon name="phone" size={18} /> Book an Appointment</a>
              <Link className="btn btn-ghost" to="/ent-services">Explore ENT Services →</Link>
            </div>
            <div className="hero-stats">
              <div className="stat glass"><div className="num">20</div><div className="label">Inpatient Beds</div></div>
              <div className="stat glass"><div className="num">24×7</div><div className="label">Emergency Care</div></div>
              <div className="stat glass"><div className="num">16+</div><div className="label">Departments</div></div>
              <div className="stat glass"><div className="num">₹4.5L</div><div className="label">Free Treatment Cover</div></div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="hero-card glass">
              <div style={{ position: 'relative' }}>
                <div className="photo hero-photo" style={{ backgroundImage: `url(${HERO_IMG})` }}>
                  <span className="photo-badge"><Icon name="ear" size={15} className="iico" /> Specialist ENT Care</span>
                </div>
                <h3>Specialist ENT Department</h3>
                <p>
                  Diagnosis and treatment of ear, nose and throat disorders — microsurgery,
                  hearing tests, sinus operations and tonsillectomy by experienced surgeons.
                </p>
                <div className="hero-pill">
                  <span className="dot" />
                  <div>
                    <strong style={{ fontSize: '0.9rem' }}>OPD Open</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{hospital.opd}</div>
                  </div>
                </div>
                <div className="hero-pill">
                  <Icon name="location" size={20} style={{ color: 'var(--aqua-deep)' }} />
                  <div>
                    <strong style={{ fontSize: '0.9rem' }}>{hospital.address.split(',')[0]}</strong>
                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Pushkar Road, Ajmer</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Why choose us</span>
            <h2 className="section-title">Care built around <span className="accent">your wellbeing</span></h2>
            <p className="section-sub">Modern facilities, experienced specialists and government health schemes — all under one roof.</p>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 36 }}>
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="photo-card glass">
                  <div className="pc-photo" style={{ backgroundImage: `url(${h.img})` }} />
                  <div className="pc-body">
                    <div className="pc-icon"><Icon name={h.icon} size={26} /></div>
                    <h3>{h.title}</h3>
                    <p>{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENT services preview */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">ENT Services</span>
            <h2 className="section-title">Complete <span className="accent">ear, nose & throat</span> treatment</h2>
            <p className="section-sub">A dedicated department for the diagnosis and treatment of every ENT condition.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {entServices.slice(0, 3).map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="photo-card glass">
                  <div className="pc-photo" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="pc-body">
                    <div className="pc-icon"><Icon name={s.icon} size={26} /></div>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: 'center', marginTop: 30 }}>
              <Link className="btn btn-ghost" to="/ent-services">View all ENT services →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schemes */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Government Health Schemes</span>
            <h2 className="section-title">Quality treatment, <span className="accent">free of cost</span></h2>
            <p className="section-sub">Eligible patients receive cashless treatment under the schemes listed below.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {schemes.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <div className="photo-card glass">
                  <div className="pc-photo" style={{ backgroundImage: `url(${s.img})` }} />
                  <div className="pc-body">
                    <div className="pc-icon"><Icon name="shield" size={26} /></div>
                    <h3>{s.name}</h3>
                    <p>{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Departments strip */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Departments</span>
            <h2 className="section-title">A true <span className="accent">multi-specialty</span> hospital</h2>
            <p className="section-sub">Beyond ENT, our hospital offers a wide range of specialist departments.</p>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 36 }}>
            {departments.slice(0, 8).map((d, i) => (
              <Reveal key={d.name} delay={i * 60}>
                <div className="card glass" style={{ padding: 22 }}>
                  <div className="c-icon" style={{ width: 48, height: 48 }}><Icon name={d.icon} size={24} /></div>
                  <h3 style={{ fontSize: '1.02rem' }}>{d.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div style={{ textAlign: 'center', marginTop: 30 }}>
              <Link className="btn btn-ghost" to="/departments">See all departments →</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

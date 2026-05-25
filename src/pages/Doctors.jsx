import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { hospital } from '../data/content'

const PHOTO = `${import.meta.env.BASE_URL}dr-sikander.jpg`

const credentials = [
  { icon: 'document', label: 'Qualifications', value: 'MBBS, MS (Otorhinolaryngology — ENT)' },
  { icon: 'shield', label: 'RMC Registration', value: '26659 · Rajasthan Medical Council (2008)' },
  { icon: 'clock', label: 'Clinical Experience', value: '12+ years of specialised ENT practice' },
  { icon: 'hospital', label: 'Role', value: 'Chief ENT Surgeon & Lead Consultant, Ajmer ENT Hospital' },
]

const expertise = [
  { icon: 'nose', area: 'Endoscopic Rhinology', items: 'Functional Endoscopic Sinus Surgery (FESS), Nasal Endoscopy — for chronic sinusitis and nasal polyps.' },
  { icon: 'ear', area: 'Reconstructive Otology', items: 'Tympanoplasty and Ossiculoplasty — microsurgical reconstruction of the eardrum and ossicular chain.' },
  { icon: 'voice', area: 'Advanced Laryngology', items: 'Thyroplasty — phonosurgical treatment for vocal cord paralysis and voice disorders.' },
  { icon: 'scalpel', area: 'Head, Neck & Endocrine Surgery', items: 'Parathyroid Surgery and Tracheostomy — including acute airway interventions.' },
  { icon: 'headphones', area: 'Diagnostic Audiology', items: 'Pure Tone Audiometry and Speech Audiometry — in-house, for accurate hearing assessment.' },
  { icon: 'baby', area: 'Pediatric ENT', items: 'Tongue Tie Release (Frenotomy) and routine pediatric ENT care.' },
]

export default function Doctor() {
  return (
    <>
      <PageHeader
        eyebrow="Our Doctor"
        title="Meet"
        accent="Dr. Sikandar Singh"
        sub="Chief ENT Surgeon and lead consultant of Ajmer ENT Hospital — over 12 years of specialised ear, nose and throat practice."
      />

      {/* Profile hero */}
      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <div className="doc-profile glass">
              <img src={PHOTO} alt="Dr. Sikandar Singh" className="doc-profile-photo" />
              <div className="doc-profile-body">
                <span className="eyebrow">Chief ENT Surgeon</span>
                <h2 className="doc-profile-name">Dr. Sikandar Singh</h2>
                <p className="doc-profile-qual">MBBS, MS (Otorhinolaryngology — ENT)</p>
                <p className="doc-profile-text">
                  Dr. Sikandar Singh leads Ajmer ENT Hospital as its Chief ENT Surgeon. With an MS
                  in Otorhinolaryngology and over a decade of independent surgical practice, he
                  brings advanced endoscopic, microsurgical and reconstructive ENT care to the
                  people of Ajmer and the surrounding region.
                </p>
                <div className="doc-profile-chips">
                  <span className="dpc"><Icon name="shield" size={14} /> RMC Reg. 26659 (2008)</span>
                  <span className="dpc"><Icon name="clock" size={14} /> 12+ years experience</span>
                  <span className="dpc"><Icon name="hospital" size={14} /> Single-specialty ENT</span>
                </div>
                <div className="doc-profile-cta">
                  <a className="btn btn-primary" href={`tel:${hospital.phone}`}>
                    <Icon name="phone" size={18} /> Book an Appointment
                  </a>
                  <Link className="btn btn-ghost" to="/video-consultation">
                    <Icon name="video" size={18} /> Video Consultation
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">About Dr. Sikandar</span>
            <h2 className="section-title">Dedicated to <span className="accent">specialised ENT care</span></h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="card glass" style={{ marginTop: 30 }}>
              <p>
                The foundation of Dr. Sikandar Singh's medical career is his MBBS, followed by a
                Master of Surgery (MS) specifically in Otorhinolaryngology — an intensive
                postgraduate residency covering microscopic otology, intricate endoscopic
                endonasal procedures, airway management and head & neck surgery.
              </p>
              <p style={{ marginTop: 14 }}>
                Formally registered with the Rajasthan Medical Council (registration number
                <strong> 26659</strong>, granted in 2008), Dr. Sikandar has been a recognised medical
                practitioner for nearly two decades, with over 12 years of post-MS clinical
                experience as a chief surgeon. This continuous tenure has shaped a finely-tuned
                diagnostic intuition and a steady, predictable standard of patient safety in every
                surgical and clinical decision.
              </p>
              <p style={{ marginTop: 14 }}>
                Under his leadership, Ajmer ENT Hospital has grown into a 20–30 bed single-specialty
                ENT centre, equipped with modern surgical optics, micro-instrumentation and an
                in-house audiology department — bringing tertiary-level otorhinolaryngology care
                close to home for the people of Ajmer.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Credentials</span>
            <h2 className="section-title">Qualifications & <span className="accent">registration</span></h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 30 }}>
            {credentials.map((c, i) => (
              <Reveal key={c.label} delay={(i % 2) * 90}>
                <div className="card glass" style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="c-icon" style={{ flex: 'none', marginBottom: 0 }}>
                    <Icon name={c.icon} size={26} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--aqua-deep)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{c.label}</p>
                    <h3 style={{ fontSize: '1.04rem' }}>{c.value}</h3>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of expertise */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Areas of Expertise</span>
            <h2 className="section-title">A comprehensive <span className="accent">surgical repertoire</span></h2>
            <p className="section-sub">From endoscopic sinus surgery to microsurgical otology and advanced laryngology — a wide spectrum of modern ENT procedures performed in-house.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {expertise.map((e, i) => (
              <Reveal key={e.area} delay={(i % 3) * 90}>
                <div className="equip-block glass">
                  <span className="equip-tag">
                    <Icon name={e.icon} size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Sub-specialty
                  </span>
                  <h3>{e.area}</h3>
                  <p>{e.items}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Academic & Research */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Academic & Research</span>
            <h2 className="section-title">Active <span className="accent">peer-reviewed research</span></h2>
          </Reveal>
          <div className="grid grid-2" style={{ marginTop: 30, alignItems: 'stretch' }}>
            <Reveal>
              <div className="card glass" style={{ height: '100%' }}>
                <div className="c-icon"><Icon name="hospital" size={28} /></div>
                <h3>JLN Medical College, Ajmer</h3>
                <p>
                  Dr. Sikandar collaborates on clinical research with the Department of
                  Otorhinolaryngology at the Jawaharlal Nehru Medical College — the premier
                  academic and tertiary referral centre for the Ajmer division.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="card glass" style={{ height: '100%' }}>
                <div className="c-icon"><Icon name="document" size={28} /></div>
                <h3>Published Case Study</h3>
                <p>
                  <em>"Self-Extrusion of Unknowingly Ingested Sewing Needle through the Skin
                  of Neck"</em> — co-authored in the <strong>International Journal of
                  Otolaryngology and Head & Neck Surgery</strong> (Vol. 2, No. 5, September 2013),
                  documenting a rare extraluminal migration through the deep neck spaces.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

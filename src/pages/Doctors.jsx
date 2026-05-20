import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { doctors } from '../data/content'

function initials(name) {
  return name.split(' ').filter(w => w !== 'Dr.').map(w => w[0]).join('').slice(0, 2).toUpperCase()
}

export default function Doctors() {
  return (
    <>
      <PageHeader
        eyebrow="Doctors"
        title="Meet our"
        accent="specialist team"
        sub="Experienced physicians and specialists dedicated to the health of every patient at our hospital."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid grid-3">
            {doctors.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 90}>
                <div className="card glass" style={{ textAlign: 'center' }}>
                  {d.photo ? (
                    <img src={d.photo} alt={d.name} className="doc-photo" />
                  ) : (
                    <div className="doc-avatar">{initials(d.name)}</div>
                  )}
                  <h3>{d.name}</h3>
                  <p style={{ color: 'var(--aqua-deep)', fontWeight: 600, margin: '4px 0' }}>{d.role}</p>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600 }}>{d.qual}</p>
                  <p style={{ marginTop: 8 }}>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="section-sub" style={{ margin: '30px auto 0', textAlign: 'center' }}>
              The names of all department head doctors can be obtained at the hospital information counter.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

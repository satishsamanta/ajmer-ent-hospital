import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { patientSteps } from '../data/content'

const documents = [
  'Aadhaar / Bhamashah card (family identity)',
  'Photo ID proof',
  'Previous medical reports',
  'Insurance card, if any',
  'Hospital admission form & operation consent letter',
]

export default function PatientInfo() {
  return (
    <>
      <PageHeader
        eyebrow="Patient Info"
        title="Your journey from"
        accent="visit to recovery"
        sub="Everything patients and their relatives need to know about the treatment process at our hospital."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Patient Flow</span>
            <h2 className="section-title">The <span className="accent">six steps</span> of your visit</h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {patientSteps.map((s, i) => (
              <Reveal key={s.step} delay={(i % 3) * 90}>
                <div className="step-card glass">
                  <div className="step-num">{s.step}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container grid grid-2" style={{ alignItems: 'stretch' }}>
          <Reveal>
            <div className="card glass" style={{ height: '100%' }}>
              <div className="c-icon"><Icon name="document" size={28} /></div>
              <h3>Documents to Bring</h3>
              <ul style={{ marginTop: 10 }}>
                {documents.map(d => (
                  <li key={d} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '9px 0', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                    <Icon name="check" size={17} className="iico" style={{ flex: 'none', marginTop: 2 }} /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card glass" style={{ height: '100%' }}>
              <div className="c-icon"><Icon name="shield" size={28} /></div>
              <h3>Payment & Insurance</h3>
              <p>
                Along with the Chief Minister Chiranjeevi Scheme, the hospital may also accept
                RGHS and Ayushman Bharat (PMJAY). Eligible patients receive immediate cashless
                treatment of up to ₹50,000 for common ailments and ₹4.5 lakh for serious ailments.
              </p>
              <p style={{ marginTop: 12 }}>
                Other government schemes (CGHS, ECHS) and personal health insurance may also be
                available — please confirm with the hospital information counter.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="card glass">
              <div className="c-icon"><Icon name="emergency" size={28} /></div>
              <h3>Emergency Service</h3>
              <p>
                In an emergency (accident, sudden headache, breathlessness), go directly to the
                emergency department. After primary treatment, admission is arranged as required.
                The emergency ward is open 24×7.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

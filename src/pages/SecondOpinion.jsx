import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import InquiryForm from '../components/InquiryForm'
import CtaBanner from '../components/CtaBanner'

const steps = [
  { icon: 'document', title: 'Share Your Case', text: 'Submit the form with your condition, current diagnosis and details of the treatment advised.' },
  { icon: 'phone', title: 'Team Reaches Out', text: 'Our team contacts you and guides you on sharing reports, scans and prescriptions securely.' },
  { icon: 'stethoscope', title: 'Specialist Review', text: 'An experienced ENT specialist carefully reviews your reports and current treatment plan.' },
  { icon: 'check', title: 'Get an Honest Opinion', text: 'Receive a clear, unbiased opinion — confirming the plan or suggesting alternatives.' },
]

const reasons = [
  'Confirm a diagnosis before starting major treatment or surgery',
  'Understand all available treatment options clearly',
  'Gain peace of mind with an expert, unbiased review',
  'Avoid unnecessary procedures with a careful second look',
]

export default function SecondOpinion() {
  return (
    <>
      <PageHeader
        eyebrow="Second Opinion"
        title="An expert"
        accent="second opinion"
        sub="Have your diagnosis and treatment plan reviewed by an experienced ENT specialist — for clarity and confidence."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">A clear review in <span className="accent">four steps</span></h2>
          </Reveal>
          <div className="grid grid-4" style={{ marginTop: 36 }}>
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card glass">
                  <div className="c-icon"><Icon name={s.icon} size={28} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container contact-grid">
          <Reveal>
            <div className="card glass" style={{ height: '100%' }}>
              <div className="c-icon"><Icon name="shield" size={28} /></div>
              <h3>When should you seek a second opinion?</h3>
              <ul style={{ marginTop: 12 }}>
                {reasons.map(b => (
                  <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                    <Icon name="check" size={17} className="iico" style={{ flex: 'none', marginTop: 2 }} /> {b}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 14 }}>
                Your medical information is treated with full confidentiality and reviewed only by
                our specialist team.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <InquiryForm variant="opinion" />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

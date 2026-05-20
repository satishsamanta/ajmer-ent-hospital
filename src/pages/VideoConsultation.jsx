import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import InquiryForm from '../components/InquiryForm'
import CtaBanner from '../components/CtaBanner'

const steps = [
  { icon: 'document', title: 'Submit Request', text: 'Fill the form with your details, preferred date and a short description of your symptoms.' },
  { icon: 'phone', title: 'Get a Confirmation Call', text: 'Our team calls you to confirm the time slot and shares the consultation link.' },
  { icon: 'message', title: 'Consult the Specialist', text: 'Connect with an ENT specialist over a secure video call from the comfort of your home.' },
  { icon: 'check', title: 'Receive Advice', text: 'Get a digital prescription, advice and guidance on any further tests or follow-up.' },
]

const benefits = [
  'Consult experienced ENT specialists without travelling to the hospital',
  'Ideal for follow-ups, minor concerns and reviewing reports',
  'Save time — no waiting rooms or queues',
  'Digital prescription and clear advice after the call',
]

export default function VideoConsultation() {
  return (
    <>
      <PageHeader
        eyebrow="Video Consultation"
        title="Consult an ENT specialist"
        accent="from home"
        sub="Connect with our doctors over a secure video call — convenient care without leaving your home."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">How it works</span>
            <h2 className="section-title">Four simple <span className="accent">steps</span></h2>
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
              <div className="c-icon"><Icon name="message" size={28} /></div>
              <h3>Why choose video consultation?</h3>
              <ul style={{ marginTop: 12 }}>
                {benefits.map(b => (
                  <li key={b} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '10px 0', color: 'var(--muted)', borderBottom: '1px solid rgba(255,255,255,0.5)' }}>
                    <Icon name="check" size={17} className="iico" style={{ flex: 'none', marginTop: 2 }} /> {b}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.85rem', color: 'var(--muted)', marginTop: 14 }}>
                Note: Video consultation is best suited for advice and follow-up. Emergencies and
                procedures require an in-person visit.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <InquiryForm variant="video" />
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

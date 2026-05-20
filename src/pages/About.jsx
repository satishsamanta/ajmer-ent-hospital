import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { hospital, schemes } from '../data/content'

const ABOUT_IMG = 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=900&q=80'

const values = [
  { icon: 'heart', title: 'Compassion', text: 'Compassion towards every patient is at the centre of how we deliver care.' },
  { icon: 'target', title: 'Accessibility', text: 'Affordable and state-of-the-art treatment available at the regional level.' },
  { icon: 'trophy', title: 'High Standards', text: 'A skilled medical team delivering services in line with current medical standards.' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="A government hospital"
        accent="built for Ajmer"
        sub="The establishment, mission and vision of Chiranjeevi Regional Government Hospital & ENT Hospital."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container grid grid-2" style={{ alignItems: 'stretch' }}>
          <Reveal>
            <div className="photo about-photo" style={{ backgroundImage: `url(${ABOUT_IMG})` }}>
              <span className="photo-badge"><Icon name="hospital" size={15} className="iico" /> Our Hospital Campus</span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="card glass" style={{ height: '100%' }}>
              <div className="c-icon"><Icon name="hospital" size={28} /></div>
              <h3>Who We Are</h3>
              <p>
                {hospital.longName} is a high-standard government hospital established under the
                Chief Minister Chiranjeevi Scheme run by the Government of Rajasthan. Led by{' '}
                {hospital.owner}, it provides advanced medical facilities across many branches —
                with a dedicated focus on Ear, Nose & Throat care.
              </p>
              <p style={{ marginTop: 12 }}>
                Our aim is to bring state-of-the-art medical facilities to the regional level so
                that local citizens can easily access quality treatment close to home.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <div className="card glass">
              <div className="c-icon"><Icon name="target" size={28} /></div>
              <h3>Vision & Mission</h3>
              <p>
                Comprehensive health services, affordable treatment and compassion towards
                patients are the hospital's main objectives. We strive to be a trusted regional
                centre where no patient is turned away for want of resources. The hospital works
                with a skilled medical team and services aligned with current medical standards,
                and is linked to the state's RGHS and Chiranjeevi health insurance schemes.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Values</span>
            <h2 className="section-title">What guides <span className="accent">our care</span></h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div className="card glass">
                  <div className="c-icon"><Icon name={v.icon} size={28} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Health Schemes</span>
            <h2 className="section-title">Linked to <span className="accent">government schemes</span></h2>
            <p className="section-sub">
              The hospital is linked to the Chief Minister Chiranjeevi Health Insurance Scheme
              (cover up to ₹25 lakh) and the state's RGHS schemes.
            </p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 36 }}>
            {schemes.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <div className="card glass">
                  <div className="c-icon"><Icon name="shield" size={28} /></div>
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

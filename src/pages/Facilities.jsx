import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { facilities, equipment } from '../data/content'

const FAC_IMG = 'https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&q=80'

export default function Facilities() {
  return (
    <>
      <PageHeader
        eyebrow="Facilities"
        title="Modern facilities &"
        accent="equipment"
        sub="ICU/NICU, a fully equipped operating theatre, diagnostics and 20 inpatient beds — built for quality care."
      />

      <Reveal>
        <div className="photo page-banner" style={{ backgroundImage: `url(${FAC_IMG})` }}>
          <span className="banner-caption">A modern operating theatre, diagnostics and intensive care under one roof</span>
        </div>
      </Reveal>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="grid grid-3">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="card glass">
                  <div className="c-icon"><Icon name={f.icon} size={28} /></div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Equipment & Machinery</span>
            <h2 className="section-title">Key equipment & <span className="accent">its purpose</span></h2>
            <p className="section-sub">Specialised ENT and diagnostic equipment supporting accurate diagnosis and treatment.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 30 }}>
            {equipment.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 90}>
                <div className="equip-block glass">
                  <span className="equip-tag"><Icon name="gear" size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Equipment</span>
                  <h3>{e.name}</h3>
                  <p>{e.purpose}</p>
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

import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { entServices, entTreatments, specialties } from '../data/content'

export default function EntServices() {
  return (
    <>
      <PageHeader
        eyebrow="ENT Services"
        title="Ear, Nose &"
        accent="Throat care"
        sub="The ENT department diagnoses and treats diseases and disorders of the ear, nose and throat with experienced surgeons and audiologists."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid grid-3">
            {entServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 90}>
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
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Speciality</span>
            <h2 className="section-title">What our ENT team <span className="accent">treats</span></h2>
            <p className="section-sub">Focused expertise across the most common ear, nose and throat concerns.</p>
          </Reveal>
          <div className="speciality-grid" style={{ marginTop: 36 }}>
            {specialties.map((s, i) => (
              <Reveal key={s.name} delay={(i % 5) * 70}>
                <div className="sp-tile glass">
                  <span className="sp-badge"><Icon name="check" size={12} /></span>
                  <span className="sp-ring"><Icon name={s.icon} size={30} /></span>
                  <span className="sp-name">{s.name}</span>
                  <span className="sp-tag">Treated here</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">Conditions we treat</span>
            <h2 className="section-title">ENT conditions & <span className="accent">treatments</span></h2>
            <p className="section-sub">Common ear, nose and throat conditions and the procedures used to treat them.</p>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 30 }}>
            {entTreatments.map((t, i) => (
              <Reveal key={t.condition} delay={(i % 3) * 90}>
                <div className="equip-block glass">
                  <span className="equip-tag">
                    <Icon name="ear" size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Condition
                  </span>
                  <h3>{t.condition}</h3>
                  <p>{t.treatment}</p>
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

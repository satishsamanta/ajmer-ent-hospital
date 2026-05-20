import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Icon from '../components/Icon'
import CtaBanner from '../components/CtaBanner'
import { departments } from '../data/content'

export default function Departments() {
  return (
    <>
      <PageHeader
        eyebrow="Departments"
        title="Specialties under"
        accent="one roof"
        sub="A list of key departments and the services each one provides at our multi-specialty hospital."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container">
          <div className="grid grid-3">
            {departments.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 90}>
                <div className="card glass">
                  <div className="c-icon"><Icon name={d.icon} size={28} /></div>
                  <h3>{d.name}</h3>
                  <p>{d.services}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal>
            <span className="eyebrow">At a glance</span>
            <h2 className="section-title">Departments & <span className="accent">key services</span></h2>
          </Reveal>
          <div className="grid grid-3" style={{ marginTop: 30 }}>
            {departments.map((d, i) => (
              <Reveal key={d.name} delay={(i % 3) * 90}>
                <div className="equip-block glass">
                  <span className="equip-tag">
                    <Icon name={d.icon} size={13} style={{ verticalAlign: -2, marginRight: 4 }} />Department
                  </span>
                  <h3>{d.name}</h3>
                  <p>{d.services}</p>
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

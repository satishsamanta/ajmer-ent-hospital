import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBanner from '../components/CtaBanner'
import { faqs } from '../data/content'

export default function Faqs() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently asked"
        accent="questions"
        sub="Answers to common questions about appointments, timings, schemes and admission."
      />

      <section className="section" style={{ paddingTop: 20 }}>
        <div className="container" style={{ maxWidth: 820 }}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 60}>
              <div
                className={`faq-item glass ${open === i ? 'open' : ''}`}
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <div className="faq-q">
                  <span>{f.q}</span>
                  <span className="chev">+</span>
                </div>
                <div className="faq-a">{f.a}</div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <p className="section-sub" style={{ margin: '24px auto 0', textAlign: 'center' }}>
              For exact details, please ask the relevant department or the hospital information office.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}

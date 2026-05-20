import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function PageHeader({ eyebrow, title, accent, sub }) {
  return (
    <header className="page-head container">
      <Reveal>
        <p className="crumbs"><Link to="/">Home</Link> · {eyebrow}</p>
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title} {accent && <span className="accent">{accent}</span>}</h1>
        {sub && <p>{sub}</p>}
      </Reveal>
    </header>
  )
}

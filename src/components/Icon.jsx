// Clean line-style medical SVG icons — replaces emoji placeholders.
const P = {
  hospital: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M12 7v6M9 10h6M9 17h6" /></>,
  stethoscope: <><path d="M5 3v4a5 5 0 0 0 10 0V3" /><path d="M3.5 3H6M14 3h2.5" /><path d="M10 12v2a5 5 0 0 0 10 0v-1" /><circle cx="20" cy="11" r="2" /></>,
  microscope: <><path d="M6 21h12M7 18h6" /><path d="M9 18a6 6 0 0 0 6-9" /><path d="M10 4l3-1 2 3-3 1z" /><path d="M10.5 5.5L13 9" /></>,
  ambulance: <><rect x="2" y="8" width="14" height="8" rx="1" /><path d="M16 11h3l3 3v2h-6z" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /><path d="M7 10v4M5 12h4" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  ear: <><path d="M6 14a6 6 0 1 1 12 0c0 2.5-2 3-3.5 3.5-1.5.5-1.5 3-3.5 3a3 3 0 0 1-3-3" /><path d="M9 12a3 3 0 0 1 5.5-1.5" /></>,
  scalpel: <><path d="M14 3l7 7-10 2z" /><path d="M11 12L3 20" /></>,
  pregnant: <><circle cx="12" cy="5" r="2.3" /><path d="M12 8c2.5 0 4 2 4 6 0 2-1 3-1 3M12 8c-1.5 0-2.5 1.2-2.5 3.5V15l2 2" /></>,
  baby: <><circle cx="12" cy="7" r="3.2" /><path d="M10.5 7h.01M13.5 7h.01" /><path d="M6 21v-3a6 6 0 0 1 12 0v3" /></>,
  bone: <><path d="M8.5 15.5l7-7" /><circle cx="6.5" cy="17.5" r="2" /><circle cx="9.5" cy="14.5" r="2" /><circle cx="17.5" cy="6.5" r="2" /><circle cx="14.5" cy="9.5" r="2" /></>,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></>,
  tooth: <><path d="M12 3c3 0 5 1.5 5 4 0 2-.6 3-1 6s-.4 7-2 7-1.4-4-2-4-1.4 4-2 4c-1.6 0-1.6-4-2-7s-1-4-1-6c0-2.5 2-4 5-4z" /></>,
  skin: <><rect x="4" y="4" width="16" height="16" rx="3.5" /><path d="M8 9h.01M12 13h.01M16 8h.01M9.5 16h.01M15 16h.01" /></>,
  brain: <><path d="M12 5a3 3 0 0 0-5 1.2A3 3 0 0 0 5.5 12 3 3 0 0 0 8 17a3 3 0 0 0 4 1 3 3 0 0 0 4-1 3 3 0 0 0 2.5-5A3 3 0 0 0 17 6.2 3 3 0 0 0 12 5z" /><path d="M12 5v14" /></>,
  nerve: <><path d="M13 3L4 14h6l-1 7 9-11h-6z" /></>,
  scan: <><circle cx="12" cy="12" r="5" /><path d="M7 3v3M3 7h3M17 3v3M21 7h-3M7 21v-3M3 17h3M17 21v-3M21 17h-3" /></>,
  flask: <><path d="M9 3h6M10 3v6l-5 9a1.8 1.8 0 0 0 1.6 2.8h10.8A1.8 1.8 0 0 0 19 18l-5-9V3" /><path d="M8 14h8" /></>,
  emergency: <><circle cx="12" cy="12" r="9" /><path d="M12 8v8M8 12h8" /></>,
  bed: <><path d="M3 7v13M3 13h18v7M21 20v-5a4 4 0 0 0-4-4H9v3" /><circle cx="7" cy="10" r="1.7" /></>,
  nose: <><path d="M10 3v8c-1 1-3 2.5-3 5a5 5 0 0 0 10 0c0-2-1-3.2-2.2-4.2" /><path d="M9 16.5c1.2 1 4 1 5.5 0" /></>,
  throat: <><path d="M12 3a4 4 0 0 0-4 4c0 3 1 4 1 7a3 3 0 0 0 6 0c0-3 1-4 1-7a4 4 0 0 0-4-4z" /><path d="M12 9v6" /></>,
  headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="2.5" y="13.5" width="4.5" height="7" rx="2" /><rect x="17" y="13.5" width="4.5" height="7" rx="2" /></>,
  gear: <><circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" /></>,
  lungs: <><path d="M12 3v9" /><path d="M12 7.5c-1 0-1.9 1-2.4 2C8 12 6 13 6 17a2 2 0 0 0 4 0v-5" /><path d="M12 7.5c1 0 1.9 1 2.4 2C16 12 18 13 18 17a2 2 0 0 1-4 0v-5" /></>,
  allergy: <><circle cx="8" cy="8.5" r="2" /><circle cx="16" cy="10" r="2" /><circle cx="11" cy="16" r="2" /><circle cx="17.5" cy="17" r="1.4" /><circle cx="6" cy="15.5" r="1.4" /></>,
  sleep: <><path d="M21 13a8 8 0 1 1-9-9 7 7 0 0 0 9 9z" /><path d="M14 4h4l-4 4.5h4" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></>,
  trophy: <><path d="M8 4h8v4.5a4 4 0 0 1-8 0z" /><path d="M8 5.5H5v2a3 3 0 0 0 3 3M16 5.5h3v2a3 3 0 0 1-3 3" /><path d="M12 12v4M9 20h6M10 20l.6-4M14 20l-.6-4" /></>,
  heart: <><path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z" /></>,
  voice: <><path d="M11 5L6 9H3v6h3l5 4z" /><path d="M15 9a3.5 3.5 0 0 1 0 6M18 6.5a7 7 0 0 1 0 11" /></>,
  document: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4M9 12h6M9 16h5" /></>,
  location: <><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  phone: <><path d="M6 3h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5 2 2 0 0 1 6 3z" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>,
  check: <><path d="M5 12l5 5L20 6" /></>,
  message: <><path d="M4 5h16v11H9l-4 4V5z" /><path d="M8 9h8M8 12.5h5" /></>,
  compass: <><circle cx="12" cy="12" r="9" /><path d="M15.5 8.5l-2 5-5 2 2-5z" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="M21 21l-5.2-5.2" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  video: <><rect x="3" y="6" width="13" height="12" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></>,
}

export default function Icon({ name, size = 24, className = '', style }) {
  const path = P[name] || P.hospital
  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}

// Central content for Ajmer ENT Hospital website
// Sourced from the hospital facilities & services report.
// `icon` values map to names in components/Icon.jsx

export const hospital = {
  name: 'Ajmer ENT Hospital',
  longName: 'Chiranjeevi Regional Government Hospital & ENT Hospital, Ajmer',
  owner: 'Dr. Sikander',
  tagline: 'Advanced Ear, Nose & Throat care for the people of Ajmer',
  phone: '09982223450',
  address: '175-A, Pushkar Road, Haribhau Upadhyay Nagar, Ajmer — 305001, Rajasthan',
  opd: '9:00 AM – 2:00 PM (Monday to Friday)',
  emergency: '24×7 Emergency Services',
  beds: 20,
  coords: { lat: 26.4499, lng: 74.6399 },
}

const U = (id) => `https://images.unsplash.com/photo-${id}?w=640&q=70&auto=format&fit=crop`

export const highlights = [
  { icon: 'hospital', img: U('1538108149393-fbbd81895907'), title: 'Multi-Specialty Care', text: 'Advanced medical facilities across many branches, with a dedicated Ear, Nose & Throat department.' },
  { icon: 'stethoscope', img: U('1559839734-2b71ea197ec2'), title: 'Experienced Specialists', text: 'A team of trained ENT surgeons, audiologists and specialist doctors.' },
  { icon: 'microscope', img: U('1516841273335-e39b37888115'), title: 'Modern Diagnostics', text: 'State-of-the-art diagnostic equipment, audiometry, imaging and laboratory facilities.' },
  { icon: 'ambulance', img: U('1587351021759-3e566b6af7cc'), title: '24×7 Emergency', text: 'Round-the-clock emergency and OPD facilities with ICU/NICU support for critical patients.' },
]

export const schemes = [
  { name: 'Chiranjeevi Scheme', img: U('1505751172876-fa1923c5c528'), text: 'Free treatment up to ₹50,000 for common ailments and up to ₹4.5 lakh for serious ailments.' },
  { name: 'Ayushman Bharat (PMJAY)', img: U('1576091160550-2173dba999ef'), text: 'Cashless treatment under the national health protection scheme for eligible patients.' },
  { name: 'RGHS', img: U('1530026405186-ed1f139313f8'), text: 'Listed under the Rajasthan Government Health Scheme for empanelled treatment.' },
]

export const departments = [
  { name: 'Ear-Nose-Throat (ENT)', icon: 'ear', services: 'Diagnosis & treatment of ear, nose and throat diseases; microsurgery; hearing tests; sinus operations; tonsillectomy.' },
  { name: 'General Medicine', icon: 'stethoscope', services: 'Examination & treatment of diabetes, high blood pressure, infections, heart disease and more.' },
  { name: 'General Surgery', icon: 'scalpel', services: 'Surgeries for appendicitis, hernia, gallbladder stones and other conditions.' },
  { name: 'Gynaecology & Obstetrics', icon: 'pregnant', services: 'Childbirth, gynaecological examination & treatment; breast and uterine disease diagnosis.' },
  { name: 'Pediatrics', icon: 'baby', services: 'Treatment of newborns and children; vaccination; disease-diagnosis services for children.' },
  { name: 'Orthopaedics', icon: 'bone', services: 'Surgery and treatment for fractures, joint replacement and spinal diseases.' },
  { name: 'Ophthalmology', icon: 'eye', services: 'Cataract operations, retina examination and vision correction services.' },
  { name: 'Dentistry', icon: 'tooth', services: 'Tooth pain, extraction of decayed teeth and oral surgery.' },
  { name: 'Dermatology', icon: 'skin', services: 'Treatment of skin diseases, skin examination and care.' },
  { name: 'Psychiatry', icon: 'brain', services: 'Mental health assessment and counselling.' },
  { name: 'Cardiology', icon: 'heart', services: 'ECG, stress test, cardiac blood tests and cardiac treatment.' },
  { name: 'Neurology', icon: 'nerve', services: 'Brain-related diseases; neurological examination and treatment.' },
  { name: 'Imaging / Radiology', icon: 'scan', services: 'X-ray, ultrasound, CT scan and imaging tests.' },
  { name: 'Pathology', icon: 'flask', services: 'Blood tests, biopsy and other lab-diagnostic facilities.' },
  { name: 'Emergency', icon: 'emergency', services: '24×7 emergency services — immediate treatment for injuries and sudden illness.' },
  { name: 'ICU / NICU', icon: 'bed', services: 'Care for critical patients and intensive care for newborns.' },
]

export const entServices = [
  { title: 'Ear Services', icon: 'ear', img: U('1559757148-5c350d0d3c56'), text: 'Treatment of middle ear infection (otitis), tympanoplasty, mastoidectomy, cochlear implant, hearing aids and audiometry hearing tests.' },
  { title: 'Nasal Services', icon: 'nose', img: U('1576091160399-112ba8d25d1d'), text: 'Treatment of chronic sinusitis, Functional Endoscopic Sinus Surgery (FESS), deviated septum surgery, nasal tissue reconstruction and polyp removal.' },
  { title: 'Throat Services', icon: 'throat', img: U('1612277795421-9bc7706a4a34'), text: 'Tonsillectomy, adenoidectomy, treatment of laryngeal disorders, throat inflammation, voice disorders and swallowing difficulties.' },
  { title: 'Microscopic & Laser Surgery', icon: 'microscope', img: U('1581595220892-b0739db3ba8c'), text: 'Use of microscopes and laser equipment for minor operations such as ear microsurgery and laser treatment of the nose and throat.' },
  { title: 'Audiology & Speech Therapy', icon: 'headphones', img: U('1582750433449-648ed127bb54'), text: 'Hearing tests (audiometry, tuning fork test), ear canal examination and therapy to support speech and hearing.' },
]

export const specialties = [
  { name: 'Voice Disorders', icon: 'voice' },
  { name: 'Tonsils', icon: 'throat' },
  { name: 'Breathing Problems', icon: 'lungs' },
  { name: 'Nasal Congestion', icon: 'nose' },
  { name: 'Hearing Loss', icon: 'ear' },
  { name: 'Earaches', icon: 'ear' },
  { name: 'Allergies', icon: 'allergy' },
  { name: 'Earwax', icon: 'ear' },
  { name: 'Sleep Apnea', icon: 'sleep' },
]

export const entTreatments = [
  { condition: 'Long-term ear discharge (middle ear infection)', treatment: 'Antibiotic medication, tube placement, tympanoplasty, mastoid surgery.' },
  { condition: 'Headache / nasal congestion (chronic sinusitis)', treatment: 'FESS (mucosal membrane surgery), antibiotics, sinus drainage.' },
  { condition: 'Deformed nasal septum (deviated septum)', treatment: 'Septoplasty — nasal septum correction surgery.' },
  { condition: 'Hearing problems (hearing loss)', treatment: 'Audiometry, hearing aid fitting, cochlear implant.' },
  { condition: 'Lump in the throat / tonsil swelling (tonsillitis)', treatment: 'Tonsillectomy, antibiotics.' },
  { condition: 'Voice change / voice disorder (laryngitis)', treatment: 'Throat examination, voice therapy.' },
  { condition: 'Ear ringing (tinnitus)', treatment: 'Hearing examination, therapeutic treatment.' },
]

export const doctors = [
  { name: 'Dr. Sikander', role: 'Chief ENT Surgeon & Director', qual: 'MBBS, MS (ENT)', photo: `${import.meta.env.BASE_URL}dr-sikander.jpg`, text: 'Leads the hospital with extensive expertise in ear, nose and throat surgery and disease diagnosis.' },
  { name: 'ENT Specialist', role: 'ENT Surgeon', qual: 'MBBS, MS / DNB (ENT)', text: 'Proficient in ear, nose and throat surgery and comprehensive ENT disease diagnosis.' },
  { name: 'Consultant Physician', role: 'General Medicine', qual: 'MBBS, MD (Medicine)', text: 'Examination and treatment of diabetes, hypertension, infections and chronic illness.' },
  { name: 'Consultant Surgeon', role: 'General Surgery', qual: 'MBBS, MS / DNB (Surgery)', text: 'Performs general surgical procedures including hernia, appendix and gallbladder surgery.' },
  { name: 'Audiologist', role: 'Audiology & Speech-Language Pathology', qual: 'MSc (Audiology & SLP)', text: 'Specialist in hearing-related examinations, hearing aid fitting and diagnostic equipment.' },
  { name: 'Speech Therapist', role: 'Speech & Hearing', qual: 'MSc (Speech & Hearing)', text: 'Habilitation for speech disability and pronunciation problems.' },
]

export const equipment = [
  { name: 'Nasal Endoscope', purpose: 'Internal examination and surgery of the nose and sinuses.' },
  { name: 'ENT Microscope', purpose: 'Visual assistance in microscopic ear-nose-throat surgeries.' },
  { name: 'Audiometer', purpose: 'Hearing test — assessment of hearing ability.' },
  { name: 'Tympanometer', purpose: 'Examination of the eardrum and Eustachian tube function.' },
  { name: 'Laser Unit', purpose: 'Laser surgery of the throat or nose — coagulation and polyp removal.' },
  { name: 'X-ray & Ultrasound', purpose: 'General imaging and diagnosis of bones, nerves and soft tissue.' },
  { name: 'Operating Theatre Setup', purpose: 'Monitors, infusion sets and sterilizers for surgical procedures.' },
  { name: 'Physical Examination Kit', purpose: 'General health check-ups — blood pressure, pulse and vitals.' },
]

export const facilities = [
  { icon: 'bed', title: 'Bed Capacity', text: 'A total of 20 beds for inpatient care and recovery.' },
  { icon: 'hospital', title: 'ICU / NICU', text: 'Intensive care and newborn care units for critical patients.' },
  { icon: 'microscope', title: 'Diagnostic Facilities', text: 'Blood tests, biopsy, ultrasound, X-ray, audiometry and laboratory services.' },
  { icon: 'stethoscope', title: 'OPD Consultation', text: 'Regular OPD rooms — specialist consultation 9 AM to 2 PM, Mon–Fri.' },
  { icon: 'emergency', title: 'Emergency Room', text: '24×7 emergency ward for primary treatment of emergency patients.' },
  { icon: 'gear', title: 'Operating Theatre', text: 'A fully equipped OT with laparoscopic and micro-surgery equipment.' },
]

export const patientSteps = [
  { step: '01', title: 'Appointment Booking', text: 'Book an OPD time in advance by calling the hospital, or register directly at the counter.' },
  { step: '02', title: 'OPD & Registration', text: 'Arrive on time and register. Nursing staff record vitals before the specialist consultation.' },
  { step: '03', title: 'Consultation & Tests', text: 'The physician examines you, advises tests and prescribes medication as needed.' },
  { step: '04', title: 'Admission', text: 'On the doctor’s advice, the patient is admitted. Bring ID (Aadhaar / Bhamashah) and any insurance card.' },
  { step: '05', title: 'Surgery & Ward Care', text: 'Pre-operative tests are completed, surgery is performed, and recovery is monitored in the ward / ICU.' },
  { step: '06', title: 'Follow-up', text: 'Return for OPD follow-up examinations within the prescribed period after treatment.' },
]

export const faqs = [
  { q: 'How do I book an appointment?', a: 'Before visiting the OPD you can book an appointment by phone (09982223450) or at the hospital registration counter. When the online facility is available, a time slot can be taken on this website.' },
  { q: 'What are the OPD timings?', a: 'OPD timings are 9:00 AM to 2:00 PM, Monday to Friday. Emergency service remains open 24 hours.' },
  { q: 'Is there a special team of doctors?', a: 'Yes — experienced ENT specialists, surgeons and medicine specialists. ENT specialists are MS / DNB (ENT) qualified and the audiologist holds an MSc (Audiology) qualification.' },
  { q: 'Is the Chiranjeevi Scheme or Ayushman Bharat applicable?', a: 'The hospital is covered under the Chief Minister Chiranjeevi Health Insurance Scheme. Eligible patients receive cashless treatment of up to ₹50,000 or ₹4.5 lakh. RGHS and other government health schemes may also apply.' },
  { q: 'What documents are required for admission or surgery?', a: 'Bring an Aadhaar / Bhamashah card, photo ID, medical reports, illness details and an insurance card (if any). An admission form and operation consent letter must be filled.' },
  { q: 'Is there a ward visiting time?', a: 'Visiting hours are generally in the afternoon (3–4 PM). Please confirm exact ward visiting times with hospital staff.' },
]

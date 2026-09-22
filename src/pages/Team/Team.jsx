import { useState } from 'react'
import { ExternalLink, Users, ChevronDown, ChevronUp } from 'lucide-react'
import logoLse from '../../assets/logo_lse.png'
import logoLree from '../../assets/logo_lree.png'
import logoSqli from '../../assets/logo_sqli.png'
import heroBg from '../../assets/background-image1.jpg'
import './Team.css'

// ── Team member lists from teams.xlsx ────────────────────────────────────────
const LSE_MEMBERS = [
  'Sondes SKANDER MUSTAPHA',
  'Najiba MRABET BELLAJ',
  'Manel JEBALI BEN GHORBEL',
  'Marwa BEN SAID ROMDHANE',
  'Manef BOUROGAOUI',
  'Nidhal MDINI',
  'Safa SLOUMA',
  'Ines SANSA',
  'Mazen TAKRITI',
  'Mariem KAMMOUN',
  'Maty MOULAYE ELY',
  'Ali SAYEH',
  'Aymen CHAMROUKHI',
]

const LEE_MEMBERS = [
  'Mouna ELAKHDAR',
  'Ezzedine NEHDI',
  'Nizar BEN EZZINE',
  'Amel Soukaina CHERIF',
  'Moez YOUSSEF',
  'Rania HAMMEMI',
  'Maryem FEZAI',
  'Haythem SAHLI',
  'Khalil MANSOURI',
  'Sana BEN YAHIA',
  'Zaineb OMRI',
  'Nourheine JEMNI',
]

const SQLI_MEMBERS = [
  'Sami SBOUI',
  'Arij BOUDHINA',
  'Nahla MANNAI',
]

// ── Card definitions ──────────────────────────────────────────────────────────
const teamCards = [
  {
    name: 'Laboratory of Electrical Systems (LSE)',
    role: 'Coordinating Lab, ENIT',
    bio: 'Lead research laboratory at ENIT, recognised for innovative work in electrical energy conversion and distribution with focus on decentralised production. The QehnA team leads OS1 (partially), OS3, OS5, and OS6 covering PV system design, EMS development, and Digital Twin.',
    expertise: ['Electrical Systems', 'PV Sizing', 'EMS Development', 'Digital Twin'],
    avatar: logoLse,
    members: LSE_MEMBERS,
  },
  {
    name: 'Laboratory of Energy & Environment (LEE)',
    role: 'Research Partner, ENIT',
    bio: 'Specialises in thermal and energy performance, including industrial applications and sustainable energy management. Leads OS1, OS2, and OS4 energy needs assessment, thermal optimisation (COP, refrigeration cycles), and experimental validation with local farming communities.',
    expertise: ['Thermal Performance', 'Refrigeration Cycles', 'Energy Valorisation', 'CFD Modelling'],
    avatar: logoLree,
    members: LEE_MEMBERS,
  },
  {
    name: 'SQLI Services',
    role: 'Industrial Partner, Tunisia',
    bio: 'A leading Tunisian digital services company specialising in technology platforms, AI-powered information systems, mobile applications, e-commerce, and digital consulting. Invests 30% of revenue in R&D with numerous academic collaborations (including Mobidoc theses). Leads digital development for OS5 (EMS) and OS6 (Digital Twin, mobile app, web marketplace, observatory).',
    expertise: ['Digital Twin', 'Mobile Apps', 'Web Marketplace', 'AI & Data', 'R&D (30%)'],
    avatar: logoSqli,
    members: SQLI_MEMBERS,
  },
]

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
}

function Team() {
  // track which card's member panel is open (null = all closed)
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => setOpenIndex(prev => prev === index ? null : index)

  return (
    <div className="team">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src={heroBg} alt="" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="page-tag">Our Team</span>
          <h1 className="page-title">
            The Consortium Behind <span className="text-gold-light">SolarCold</span>
          </h1>
          <p className="page-description">
            A multidisciplinary consortium of research laboratories (LSE, LEE),
            industrial partner SQLI Services, and the core implementation team presented
            during the kickoff session of 28 April 2026.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-grid">
            {teamCards.map((card, index) => {
              const isOpen = openIndex === index
              return (
                <div className={`team-card ${isOpen ? 'team-card--open' : ''}`} key={index}>
                  {/* Card Header */}
                  <div className="team-card-header">
                    <div className="team-avatar">
                      {card.avatar ? (
                        <img src={card.avatar} alt={card.name} />
                      ) : (
                        <span className="team-avatar-initials">{getInitials(card.name)}</span>
                      )}
                    </div>
                    <div className="team-card-info">
                      <h3 className="team-name">{card.name}</h3>
                      <span className="team-role">{card.role}</span>
                    </div>
                  </div>

                  <p className="team-bio">{card.bio}</p>

                  <div className="team-expertise">
                    {card.expertise.map((skill, i) => (
                      <span className="team-skill" key={i}>{skill}</span>
                    ))}
                  </div>

                  {/* Team Members Toggle Button */}
                  <div className="team-actions">
                    <button
                      className={`team-members-btn ${isOpen ? 'team-members-btn--active' : ''}`}
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                    >
                      <Users size={15} />
                      <span>Team Members ({card.members.length})</span>
                      {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {/* Expandable Members Panel */}
                  {isOpen && (
                    <div className="team-members-panel">
                      <ul className="team-members-list">
                        {card.members.map((name, i) => {
                          // Split into parts; last word(s) in original are already caps
                          // Render with CSS: first-name normal, last-name via data
                          const parts = name.trim().split(' ')
                          // Find where the last name starts (first all-caps word)
                          const lastNameStart = parts.findIndex(p => p === p.toUpperCase() && p.length > 1)
                          const firstName = lastNameStart > 0 ? parts.slice(0, lastNameStart).join(' ') : ''
                          const lastName = lastNameStart >= 0 ? parts.slice(lastNameStart).join(' ').toUpperCase() : parts.join(' ').toUpperCase()
                          return (
                            <li key={i} className="team-member-item">
                              <span className="member-name">
                                {firstName && <span className="member-firstname">{firstName} </span>}
                                <span className="member-lastname">{lastName}</span>
                              </span>
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="team-cta-section">
        <div className="team-container">
          <div className="team-cta">
            <div className="team-cta-content">
              <h2>Interested in Collaborating?</h2>
              <p>
                We welcome researchers, students, and organisations interested in solar refrigeration,
                Digital Twin technology, and sustainable development. Explore research, Mobidoc thesis, and publication
                opportunities with our team.
              </p>
              <a href="mailto:sondes.skander@enit.utm.tn" className="btn btn-primary">
                Contact the Project Lead
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team

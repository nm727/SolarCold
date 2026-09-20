import { Linkedin, Github, Mail, ExternalLink } from 'lucide-react'
import logoQehna from '../../assets/logo_qehna.png'
import logoLse from '../../assets/logo_lse.png'
import logoLree from '../../assets/logo_lree.png'
import logoEni from '../../assets/logo_enit.png'
import logoSqli from '../../assets/logo_sqli.png'
import signCeremony from '../../assets/sign_ceremony.png'
import heroBg from '../../assets/background-image1.jpg'
import './Team.css'

const teamMembers = [

  {
    name: 'Laboratory of Electrical Systems (LSE)',
    role: 'Coordinating Lab, ENIT',
    bio: 'Lead research laboratory at ENIT, recognised for innovative work in electrical energy conversion and distribution with focus on decentralised production. The QehnA team leads OS1 (partially), OS3, OS5, and OS6 covering PV system design, EMS development, and Digital Twin.',
    expertise: ['Electrical Systems', 'PV Sizing', 'EMS Development', 'Digital Twin'],
    avatar: logoLse,
  },
  {
    name: 'Laboratory of Energy & Environment (LREE)',
    role: 'Research Partner, ENIT',
    bio: 'Specialises in thermal and energy performance, including industrial applications and sustainable energy management. Leads OS1, OS2, and OS4 energy needs assessment, thermal optimisation (COP, refrigeration cycles), and experimental validation with local farming communities.',
    expertise: ['Thermal Performance', 'Refrigeration Cycles', 'Energy Valorisation', 'CFD Modelling'],
    avatar: logoLree,
  },

  {
    name: 'SQLI Services',
    role: 'Industrial Partner, Tunisia',
    bio: 'A leading Tunisian digital services company specialising in technology platforms, AI-powered information systems, mobile applications, e-commerce, and digital consulting. Invests 30% of revenue in R&D with numerous academic collaborations (including Mobidoc theses). Leads digital development for OS5 (EMS) and OS6 (Digital Twin, mobile app, web marketplace, observatory).',
    expertise: ['Digital Twin', 'Mobile Apps', 'Web Marketplace', 'AI & Data', 'R&D (30%)'],
    avatar: logoSqli,
  },
  // {
  //   name: 'Mariem KAMMOUN',
  //   role: 'Project Team Member',
  //   bio: 'Core team member presented during kickoff, contributing to project execution across technical and coordination activities.',
  //   expertise: ['Project Execution', 'Coordination', 'Technical Support'],
  //   avatar: null,
  // },
  // {
  //   name: 'Aymen CHAMROUKHI',
  //   role: 'Project Team Member',
  //   bio: 'Core team member presented during kickoff, supporting technical development and project operations.',
  //   expertise: ['Technical Development', 'Operations', 'Project Support'],
  //   avatar: null,
  // },
  // {
  //   name: 'Sana Ben Yahia',
  //   role: 'Project Team Member',
  //   bio: 'Team member listed in the kickoff presentation and engaged in project activities and collaboration tasks.',
  //   expertise: ['Collaboration', 'Project Activities', 'Research Support'],
  //   avatar: null,
  // },
  // {
  //   name: 'Zaineb Omri',
  //   role: 'Project Team Member',
  //   bio: 'Team member listed in the kickoff presentation and involved in multidisciplinary project work.',
  //   expertise: ['Multidisciplinary Work', 'Project Support', 'Coordination'],
  //   avatar: null,
  // },
  // {
  //   name: 'Nourheine Jemni',
  //   role: 'Project Team Member',
  //   bio: 'Team member listed in the kickoff presentation and contributing to project implementation streams.',
  //   expertise: ['Implementation', 'Teamwork', 'Project Support'],
  //   avatar: null,
  // },

]

function getInitials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
}

function Team() {
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
            A multidisciplinary consortium of research laboratories (LSE, LREE),
            industrial partner SQLI Services, and the core implementation team presented
            during the kickoff session of 28 April 2026.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-card-header">
                  <div className="team-avatar">
                    {member.avatar ? (
                      <img src={member.avatar} alt={member.name} />
                    ) : (
                      <span className="team-avatar-initials">
                        {getInitials(member.name)}
                      </span>
                    )}
                  </div>
                  <div className="team-card-info">
                    <h3 className="team-name">{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                  </div>
                </div>

                <p className="team-bio">{member.bio}</p>

                <div className="team-expertise">
                  {member.expertise.map((skill, i) => (
                    <span className="team-skill" key={i}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="team-socials">
                  <a href="#" className="team-social" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                  <a href="#" className="team-social" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                  <a href="#" className="team-social" aria-label="Email">
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            ))}
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
                Digital Twin technology, and sustainable development. The consortium has published
                10+ papers and holds 3 patents. Explore research, Mobidoc thesis, and publication
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

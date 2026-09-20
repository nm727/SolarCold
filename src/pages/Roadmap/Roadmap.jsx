import { CheckCircle, Circle, Clock, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Roadmap.css'

const roadmapPhases = [
  {
    phase: 'OS1',
    title: 'Energy Needs Assessment',
    period: 'M1 – M2 · Led by LREE with LSE',
    status: 'current',
    description: 'Evaluate the energy requirements of the cold storage containers and define the PV specifications for integration.',
    milestones: [
      { text: 'Preliminary studies on energy, thermal and refrigeration needs', done: true },
      { text: 'Define PV integration technical specifications', done: false },
      { text: 'Analyse thermal and energy characteristics', done: false },
      { text: 'Define electrical loads for the refrigeration system', done: false },
      { text: 'Deliverable: Technical report on energy needs and PV specifications (M2)', done: false },
    ],
  },
  {
    phase: 'OS2',
    title: 'Thermal & Energy Optimisation',
    period: 'M3 – M6 · Led by LREE with LETTM',
    status: 'upcoming',
    description: 'Analyse thermal losses and refrigeration performance (COP, efficiency) to propose validated improvements.',
    milestones: [
      { text: 'Analytical study of thermal losses and refrigeration performance (COP)', done: false },
      { text: 'Simulate refrigeration cycles with optimised refrigerants', done: false },
      { text: 'Propose improvements to reduce losses and optimise cycles', done: false },
      { text: 'Deliverable: Thermal analysis report with optimisation solutions (M6)', done: false },
    ],
  },
  {
    phase: 'OS3',
    title: 'PV System Design & Sizing',
    period: 'M5 – M9 · Led by LSE',
    status: 'upcoming',
    description: 'Dimension, simulate and design the photovoltaic system for optimal integration with the optimised cold storage.',
    milestones: [
      { text: 'Dimension electrical energy needs for optimised cold storage', done: false },
      { text: 'Study, simulate and design the adapted PV system', done: false },
      { text: 'Theoretical validation and PV system modelling', done: false },
      { text: 'Deliverable: PV design and simulation report with validated sizing (M9)', done: false },
    ],
  },
  {
    phase: 'OS4',
    title: 'Experimental Validation',
    period: 'M9 – M18 · Led by LREE + LSE with Living Lab & LETTM',
    status: 'upcoming',
    description: 'Full installation, experimental monitoring of thermal and energy performance, cost analysis, and comparison with conventional systems.',
    milestones: [
      { text: 'Acquire containers and install cold storage + PV system', done: false },
      { text: 'Experimental monitoring of thermal and energy performance', done: false },
      { text: 'Evaluate energy gains and analyse operating costs', done: false },
      { text: 'Comparison with conventional system', done: false },
      { text: 'Deliverable: Final validation report and recommendations (M18)', done: false },
    ],
  },
  {
    phase: 'OS5',
    title: 'EMS Algorithm Development',
    period: 'M7 – M12 · Led by LSE with SQLI',
    status: 'upcoming',
    description: 'Design, develop, test, and optimise the intelligent Energy Management System algorithm integrating PV, storage, and cold loads.',
    milestones: [
      { text: 'Analyse specific energy management needs for sustainable buildings', done: false },
      { text: 'Design and develop EMS algorithm with IT principles', done: false },
      { text: 'Test algorithm on simulated and real use cases', done: false },
      { text: 'Fine-tune and optimise algorithm based on test results', done: false },
      { text: 'Deliverable: Functional EMS with documentation and validation report (M12)', done: false },
    ],
  },
  {
    phase: 'OS6',
    title: 'Digital Twin & Platforms',
    period: 'M12 – M24 · Led by LSE with SQLI, LREE & LETTM',
    status: 'upcoming',
    description: 'Complete Digital Twin model (PV, storage, loads, EMS), mobile farmer app, web marketplace for cold storage sharing, and national statistical observatory.',
    milestones: [
      { text: 'Acquire and process real system data (PV, storage, loads, EMS)', done: false },
      { text: 'Develop holistic mathematical and numerical model of the platform', done: false },
      { text: 'Integrate and calibrate Digital Twin across operational scenarios', done: false },
      { text: 'Validate model with real data and varied scenarios', done: false },
      { text: 'Implement virtual test environment for Digital Twin', done: false },
      { text: 'Develop mobile application for small-scale farmer cold room management', done: false },
      { text: 'Develop web marketplace for cold storage sharing and co-location in Tunisia', done: false },
      { text: 'Deploy statistical observatory on cold storage supply and demand', done: false },
      { text: 'Deliverable: Complete Digital Twin ecosystem + apps + marketplace (M24)', done: false },
    ],
  },
]

function getStatusConfig(status) {
  switch (status) {
    case 'completed':
      return { label: 'Completed', className: 'status--completed', icon: CheckCircle }
    case 'current':
      return { label: 'In Progress', className: 'status--current', icon: Clock }
    case 'upcoming':
      return { label: 'Upcoming', className: 'status--upcoming', icon: Circle }
    default:
      return { label: 'Planned', className: 'status--upcoming', icon: Circle }
  }
}

function Roadmap() {
  const completedCount = roadmapPhases.filter((p) => p.status === 'completed').length
  const totalPhases = roadmapPhases.length
  const currentPhase = roadmapPhases.find((p) => p.status === 'current')

  return (
    <div className="roadmap">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg" />
        <div className="page-hero-content">
          <span className="page-tag">Roadmap</span>
          <h1 className="page-title">
            Project <span className="text-gold-light">Roadmap</span>
          </h1>
          <p className="page-description">
            Follow the six specific objectives of Project T3P3 — from energy assessment
            through to a fully operational Digital Twin ecosystem.
          </p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="roadmap-overview">
        <div className="roadmap-container">
          <div className="progress-cards">
            <div className="progress-card progress-card--highlight">
              <Star size={20} className="progress-card-icon" />
              <div className="progress-card-content">
                <span className="progress-card-label">Current Objective</span>
                <span className="progress-card-value">{currentPhase?.title || 'N/A'}</span>
              </div>
            </div>
            <div className="progress-card">
              <CheckCircle size={20} className="progress-card-icon" />
              <div className="progress-card-content">
                <span className="progress-card-label">Objectives Completed</span>
                <span className="progress-card-value">{completedCount} / {totalPhases}</span>
              </div>
            </div>
            <div className="progress-card">
              <Clock size={20} className="progress-card-icon" />
              <div className="progress-card-content">
                <span className="progress-card-label">Next Key Event</span>
                <span className="progress-card-value">Workshop · October 2026</span>
              </div>
            </div>
          </div>

          {/* Overall Progress Bar */}
          <div className="overall-progress">
            <div className="overall-progress-header">
              <span>Overall Progress</span>
              <span className="overall-progress-pct">
                {Math.round(((completedCount + 0.4) / totalPhases) * 100)}%
              </span>
            </div>
            <div className="overall-progress-bar">
              <div
                className="overall-progress-fill"
                style={{ width: `${((completedCount + 0.4) / totalPhases) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="roadmap-timeline">
        <div className="roadmap-container">
          <div className="timeline">
            {roadmapPhases.map((phase, index) => {
              const statusConfig = getStatusConfig(phase.status)
              const StatusIcon = statusConfig.icon
              const completedMilestones = phase.milestones.filter((m) => m.done).length

              return (
                <div
                  className={`timeline-item ${phase.status === 'current' ? 'timeline-item--current' : ''}`}
                  key={index}
                >
                  {/* Timeline connector */}
                  <div className="timeline-connector">
                    <div className={`timeline-dot ${statusConfig.className}`}>
                      <StatusIcon size={16} />
                    </div>
                    {index < roadmapPhases.length - 1 && (
                      <div className={`timeline-line ${phase.status === 'completed' ? 'timeline-line--done' : ''}`} />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`timeline-content ${statusConfig.className}`}>
                    <div className="timeline-header">
                      <div>
                        <span className="timeline-phase">{phase.phase}</span>
                        <h3 className="timeline-title">{phase.title}</h3>
                        <span className="timeline-period">{phase.period}</span>
                      </div>
                      <span className={`timeline-status ${statusConfig.className}`}>
                        {statusConfig.label}
                      </span>
                    </div>

                    <p className="timeline-description">{phase.description}</p>

                    {/* Milestone Progress */}
                    <div className="milestone-progress">
                      <div className="milestone-progress-header">
                        <span>Milestones</span>
                        <span>{completedMilestones}/{phase.milestones.length}</span>
                      </div>
                      <div className="milestone-progress-bar">
                        <div
                          className="milestone-progress-fill"
                          style={{
                            width: `${(completedMilestones / phase.milestones.length) * 100}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Milestones List */}
                    <ul className="milestones-list">
                      {phase.milestones.map((milestone, mIndex) => (
                        <li key={mIndex} className={milestone.done ? 'milestone--done' : ''}>
                          {milestone.done ? (
                            <CheckCircle size={15} className="milestone-check" />
                          ) : (
                            <Circle size={15} className="milestone-circle" />
                          )}
                          <span>{milestone.text}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="roadmap-cta">
        <div className="roadmap-container" style={{ textAlign: 'center' }}>
          <h2 className="roadmap-cta-heading">Want to Learn More About Our Progress?</h2>
          <p className="roadmap-cta-text">
            Upcoming checkpoint: October 2026 partner workshop to present first results,
            run technical exchanges, and align the next scientific collaboration steps.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/overview" className="btn btn-primary">
              Project Overview <ArrowRight size={18} />
            </Link>
            <Link to="/gallery" className="btn btn-ghost">
              View Gallery
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Roadmap

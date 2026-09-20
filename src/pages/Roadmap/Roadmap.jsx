import { CheckCircle, Circle, Clock, ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/background-image1.jpg'
import './Roadmap.css'

const roadmapPhases = [
  {
    phase: 'OS1',
    title: `Analyse des besoins et spécifications techniques`,
    period: 'M2',
    status: 'current',
    description: `Au cours des deux premiers mois du projet, une étude préliminaire sera réalisée afin d'identifier les besoins énergétiques, thermiques et frigorifiques de la chambre froide. Cette phase aboutira également à la définition des spécifications techniques nécessaires à l'intégration du système photovoltaïque.`,
    milestones: [
      { text: `Étude préliminaire des besoins énergétiques, thermiques et frigorifiques`, done: true },
      { text: `Définition des spécifications techniques pour l'intégration du système PV`, done: false },
    ],
  },
  {
    phase: 'OS2',
    title: `Optimisation du système frigorifique`,
    period: 'M4 – M6',
    status: 'upcoming',
    description: `À partir des résultats de l'étude préliminaire, des simulations des cycles frigorifiques seront réalisées afin d'optimiser les performances énergétiques de l'installation (M4). Les améliorations proposées seront ensuite validées par des analyses et des simulations détaillées, conduisant à une configuration optimisée du système (M6).`,
    milestones: [
      { text: `Simulations des cycles frigorifiques pour optimiser les performances énergétiques (M4)`, done: false },
      { text: `Analyses et simulations détaillées pour valider les améliorations proposées`, done: false },
      { text: `Configuration optimisée du système frigorifique (M6)`, done: false },
    ],
  },
  {
    phase: 'OS3',
    title: `Conception du système photovoltaïque`,
    period: 'M9',
    status: 'upcoming',
    description: `Le système photovoltaïque destiné à alimenter la chambre froide sera modélisé et dimensionné en fonction des besoins identifiés. À l'issue de cette étape (M9), le dimensionnement sera validé et prêt pour la phase d'installation.`,
    milestones: [
      { text: `Modélisation et dimensionnement du système photovoltaïque`, done: false },
      { text: `Validation du dimensionnement PV et préparation pour l'installation (M9)`, done: false },
    ],
  },
  {
    phase: 'OS4',
    title: `Réalisation du démonstrateur`,
    period: 'M18',
    status: 'upcoming',
    description: `Cette étape comprend l'acquisition des conteneurs, l'installation de la chambre froide optimisée ainsi que l'intégration du système photovoltaïque. La mise en service du démonstrateur et le suivi de ses performances seront réalisés à l'échéance du mois 18.`,
    milestones: [
      { text: `Acquisition des conteneurs`, done: false },
      { text: `Installation de la chambre froide optimisée`, done: false },
      { text: `Intégration du système photovoltaïque`, done: false },
      { text: `Mise en service du démonstrateur et suivi des performances (M18)`, done: false },
    ],
  },
  {
    phase: 'OS5',
    title: `Développement du système de gestion énergétique (EMS)`,
    period: 'M12',
    status: 'upcoming',
    description: `Un premier prototype fonctionnel de l'algorithme de gestion de l'énergie (EMS) sera développé et testé en laboratoire. Les performances de cet algorithme seront ensuite optimisées à partir de cas d'utilisation réels, avec une validation prévue au mois 12.`,
    milestones: [
      { text: `Développement du prototype fonctionnel de l'algorithme EMS`, done: false },
      { text: `Tests en laboratoire de l'algorithme EMS`, done: false },
      { text: `Optimisation des performances sur la base de cas d'utilisation réels`, done: false },
      { text: `Validation de l'algorithme EMS (M12)`, done: false },
    ],
  },
  {
    phase: 'OS6',
    title: `Développement du jumeau numérique et de la plateforme collaborative`,
    period: 'M24',
    status: 'upcoming',
    description: `La dernière phase du projet portera sur le développement et la validation d'un premier prototype du Digital Twin de la chambre froide. En parallèle, une plateforme web destinée à la mutualisation et au suivi des chambres froides sera développée et mise en ligne. Ces deux livrables sont prévus pour le mois 24.`,
    milestones: [
      { text: `Développement d'un premier prototype du Digital Twin de la chambre froide`, done: false },
      { text: `Validation du prototype du Digital Twin`, done: false },
      { text: `Développement de la plateforme web de mutualisation et suivi des chambres froides`, done: false },
      { text: `Mise en ligne de la plateforme collaborative (M24)`, done: false },
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
        <div className="page-hero-bg">
          <img src={heroBg} alt="" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay" />
        </div>
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

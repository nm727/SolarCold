import {
  Sun,
  Thermometer,
  Zap,
  Leaf,
  Battery,
  Globe,
  Target,
  CheckCircle,
  ArrowRight,
  Layers,
  CloudSun,
  Cpu,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import logoLse from '../../assets/logo_lse.png'
import logoLree from '../../assets/logo_lree.png'
import logoSqli from '../../assets/logo_sqli.png'
import logoGreenImpact from '../../assets/logo_green_impact.png'
import logoEni from '../../assets/logo_enit.png'
import logoQehna from '../../assets/logo_qehna.png'
import heroBg from '../../assets/background-image2.jpg'
import './Overview.css'

function Overview() {
  return (
    <div className="overview">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src={heroBg} alt="" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="page-tag">Project Overview</span>
          <h1 className="page-title">
            What is <span className="text-gold-light">SolarCold</span>?
          </h1>
          <p className="page-description">
            Project T3P3 — Development of a smart, connected and mobile cold storage
            container powered by photovoltaic panels, integrating EMS and Digital Twin
            technology for small-scale farmers in rural Tunisia.
          </p>
        </div>
      </section>

      {/* About the Project */}
      <section className="ov-section">
        <div className="ov-container">
          <div className="ov-two-col">
            <div className="ov-text-block">
              <span className="section-tag">About the Project</span>
              <h2 className="ov-heading">A Mobile, Connected Cold Storage Container Powered by Solar Energy</h2>
              <p>
                SolarCold (Project Code: <strong>T3P3</strong>) is a research and development project under
                the <strong>Green Impact</strong> initiative, coordinated by the <strong>Laboratory of Electrical
                  Systems (LSE)</strong> at ENIT, with project lead <strong>Sondes SKANDER-MUSTAPHA</strong>.
                The project's QehnA team within LSE brings extensive expertise in renewable energy,
                modelling, design, control, and integration of energy systems.
              </p>
              <p>
                Our general objective is to develop <strong>a mobile, connected cold storage
                  container</strong> powered by solar photovoltaic energy installed at <strong>ENIT</strong> — integrating intelligent energy management
                (EMS) and a Digital Twin to reduce post-harvest losses by 25% and improve food security
                for small-scale farmers in rural Tunisia. The project starts at TRL 4 and targets
                TRL 7 for cooling technology and TRL 6 for Digital Twin.
              </p>
              <p>
                Cold storage in Tunisia lies at the intersection of multiple challenges: reducing
                postharvest losses, improving farmers' income, enhancing access to infrastructure,
                and transitioning toward sustainable energy systems. Existing facilities are concentrated
                with industrial operators (Tunisie Industrie), and conventional technologies are
                energy-intensive, raising economic and environmental concerns. SolarCold provides a
                decentralised, autonomous alternative designed for these conditions.
              </p>
            </div>
            <div className="ov-info-cards">
              <div className="info-card">
                <Target size={22} className="info-card-icon" />
                <div>
                  <strong>Project Goal</strong>
                  <span>Develop a mobile, connected solar-powered cold storage containers with EMS and Digital Twin — 24-month project (M1–M24)</span>
                </div>
              </div>
              <div className="info-card">
                <Globe size={22} className="info-card-icon" />
                <div>
                  <strong>Coordinating Lab</strong>
                  <span>Laboratory of Electrical Systems (LSE / QehnA team) — with LREE and SQLI Services</span>
                </div>
              </div>
              <div className="info-card">
                <Leaf size={22} className="info-card-icon" />
                <div>
                  <strong>Target & Impact</strong>
                  <span>Rural Tunisia — TRL 4→7 for cooling, TRL 4→6 for Digital Twin, 25% reduction in post-harvest losses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="ov-section ov-section--alt">
        <div className="ov-container">
          <div className="ov-section-header">
            <span className="section-tag">How It Works</span>
            <h2 className="ov-heading">The Technology Behind SolarCold</h2>
            <p className="ov-subheading">
              Six specific objectives and a 7-phase methodology drive delivery — from launch and thermal analysis to Digital Twin and final field validation.
            </p>
          </div>

          <div className="how-it-works-grid">
            <div className="how-step">
              <div className="how-step-number">01</div>
              <div className="how-step-icon">
                <Zap size={32} />
              </div>
              <h3>OS1 — Energy Needs Assessment <small>(M2)</small></h3>
              <p>
                Evaluate the energy requirements of the cold storage containers and define
                PV specifications. Led by <strong>LREE</strong> with LSE. Deliverable: Technical
                report on electrical needs and PV specifications.
              </p>
            </div>

            <div className="how-step">
              <div className="how-step-number">02</div>
              <div className="how-step-icon how-step-icon--green">
                <Thermometer size={32} />
              </div>
              <h3>OS2 — Thermal & Energy Optimisation <small>(M6)</small></h3>
              <p>
                Analyse thermal losses, COP and refrigeration performance. Simulate cycles with
                optimised refrigerants. Led by <strong>LREE</strong>. Deliverable:
                Analysis report with optimisation solutions.
              </p>
            </div>

            <div className="how-step">
              <div className="how-step-number">03</div>
              <div className="how-step-icon how-step-icon--blue">
                <Sun size={32} />
              </div>
              <h3>OS3 — PV System Design & Sizing <small>(M9)</small></h3>
              <p>
                Dimension, simulate, and design the photovoltaic system for optimal integration.
                Led by <strong>LSE</strong>. Deliverable: PV design and simulation report with
                validated theoretical model.
              </p>
            </div>

            <div className="how-step">
              <div className="how-step-number">04</div>
              <div className="how-step-icon how-step-icon--navy">
                <Layers size={32} />
              </div>
              <h3>OS4 — Experimental Validation <small>(M18)</small></h3>
              <p>
                Full installation, experimental monitoring, cost analysis, and comparison with
                conventional systems. Led by <strong>LREE + LSE</strong> with local farmers (Living Lab). Deliverable: Final validation report and recommendations.
              </p>
            </div>

            <div className="how-step">
              <div className="how-step-number">05</div>
              <div className="how-step-icon how-step-icon--green">
                <Cpu size={32} />
              </div>
              <h3>OS5 — EMS Algorithm <small>(M12)</small></h3>
              <p>
                Design, develop, test, and optimise the intelligent EMS algorithm integrating
                PV generation, storage, and cold loads. Led by <strong>LSE</strong> with SQLI.
                Deliverable: Functional EMS with documentation and validation report.
              </p>
            </div>

            <div className="how-step">
              <div className="how-step-number">06</div>
              <div className="how-step-icon">
                <Globe size={32} />
              </div>
              <h3>OS6 — Digital Twin & Platforms <small>(M24)</small></h3>
              <p>
                Complete Digital Twin model (PV, storage, loads, EMS). Plus: mobile app for farmers,
                web marketplace for cold storage sharing/co-location, and a national statistical
                observatory. Led by <strong>LSE</strong> with SQLI and LREE.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Specs */}
      <section className="ov-section">
        <div className="ov-container">
          <div className="ov-section-header">
            <span className="section-tag">Specifications</span>
            <h2 className="ov-heading">Technical Performance</h2>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <Thermometer size={24} className="spec-icon" />
              <div className="spec-value">2°C – 8°C</div>
              <div className="spec-label">Operating Temperature Range</div>
            </div>
            <div className="spec-card">
              <Sun size={24} className="spec-icon" />
              <div className="spec-value">200W</div>
              <div className="spec-label">Solar Panel Capacity</div>
            </div>
            <div className="spec-card">
              <Battery size={24} className="spec-icon" />
              <div className="spec-value">0</div>
              <div className="spec-label">Batteries Required</div>
            </div>
            <div className="spec-card">
              <CloudSun size={24} className="spec-icon" />
              <div className="spec-value">72h</div>
              <div className="spec-label">Holdover Time (No Sun)</div>
            </div>
            <div className="spec-card">
              <Zap size={24} className="spec-icon" />
              <div className="spec-value">0 kg</div>
              <div className="spec-label">CO₂ Emissions Per Year</div>
            </div>
            <div className="spec-card">
              <Leaf size={24} className="spec-icon" />
              <div className="spec-value">50L</div>
              <div className="spec-label">Storage Capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Snapshot */}
      <section className="ov-section ov-section--alt">
        <div className="ov-container">
          <div className="ov-section-header">
            <span className="section-tag">Budget Snapshot</span>
            <h2 className="ov-heading">Figures</h2>
            <p className="ov-subheading">
              Consolidated project budget and the main expenditure distribution presented during kickoff.
            </p>
          </div>

          <div className="specs-grid">
            <div className="spec-card">
              <Target size={24} className="spec-icon" />
              <div className="spec-value">639,160 DT</div>
              <div className="spec-label">Total Budget</div>
            </div>
            <div className="spec-card">
              <Zap size={24} className="spec-icon" />
              <div className="spec-value">479,580 DT</div>
              <div className="spec-label">Year 1</div>
            </div>
            <div className="spec-card">
              <CloudSun size={24} className="spec-icon" />
              <div className="spec-value">159,580 DT</div>
              <div className="spec-label">Year 2</div>
            </div>
            <div className="spec-card">
              <Sun size={24} className="spec-icon" />
              <div className="spec-value">236,000 DT</div>
              <div className="spec-label">Equipment</div>
            </div>
            <div className="spec-card">
              <Leaf size={24} className="spec-icon" />
              <div className="spec-value">147,360 DT</div>
              <div className="spec-label">Personnel</div>
            </div>
            <div className="spec-card">
              <Battery size={24} className="spec-icon" />
              <div className="spec-value">167,500 DT</div>
              <div className="spec-label">Services</div>
            </div>
          </div>

          <div className="ov-info-cards" style={{ marginTop: '24px' }}>
            <div className="info-card">
              <CheckCircle size={22} className="info-card-icon" />
              <div>
                <strong>SQLI Services Contribution</strong>
                <span>70,000 DT declared in the kickoff presentation as direct partner contribution.</span>
              </div>
            </div>
            <div className="info-card">
              <ArrowRight size={22} className="info-card-icon" />
              <div>
                <strong>Next Event</strong>
                <span>Partner workshop planned for October 2026: first results, technical exchanges, and scientific collaboration sessions.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Impact Connection */}
      <section className="ov-section ov-section--dark">
        <div className="ov-container">
          <div className="green-impact-block">
            <div className="gi-content">
              <span className="section-tag section-tag--light">Green Impact Initiative</span>
              <h2 className="ov-heading ov-heading--light">Proudly Part of Green Impact</h2>
              <p className="gi-text">
                SolarCold (T3P3) is developed under the Green Impact convention, signed on
                February 11, 2026. The project is coordinated by the <strong>Laboratory of
                  Electrical Systems (LSE)</strong> at ENIT and led by <strong>Sondes SKANDER-MUSTAPHA</strong>.
                The consortium includes 10+ scientific publications and 3 patents filed or pending.
              </p>
              <p className="gi-text">
                Our consortium brings together the <strong>Laboratory of Energy and Environment
                  (LREE)</strong> and industrial partner <strong>SQLI Services</strong> — a leading
                Tunisian digital services company (30% of revenue invested in R&D) contributing
                expertise in Digital Twin, mobile applications, AI-powered platforms, and web
                marketplace development.
              </p>
              <div className="gi-values">
                <div className="gi-value">
                  <CheckCircle size={18} />
                  <span>Food Security & 25% Loss Reduction</span>
                </div>
                <div className="gi-value">
                  <CheckCircle size={18} />
                  <span>Rural Development & Job Creation</span>
                </div>
                <div className="gi-value">
                  <CheckCircle size={18} />
                  <span>Technology Transfer & Patent Protection</span>
                </div>
                <div className="gi-value">
                  <CheckCircle size={18} />
                  <span>10+ Publications & New Research Axis</span>
                </div>
              </div>
              <div className="gi-logos">
                <img src={logoGreenImpact} alt="Green Impact" />
                <img src={logoLse} alt="LSE" />
                <img src={logoQehna} alt="QehnA" />
                <img src={logoLree} alt="LREE" />
                <img src={logoSqli} alt="SQLI Services" />
                <img src={logoEni} alt="ENIT" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ov-section">
        <div className="ov-container" style={{ textAlign: 'center' }}>
          <h2 className="ov-heading">Want to See Where We're Headed?</h2>
          <p className="ov-subheading" style={{ marginBottom: '32px' }}>
            Check out our roadmap to see our milestones and upcoming goals.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/roadmap" className="btn btn-primary">
              View Roadmap <ArrowRight size={18} />
            </Link>
            <Link to="/team" className="btn btn-ghost">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Overview

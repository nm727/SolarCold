import { Link } from 'react-router-dom'
import {
  Sun,
  Zap,
  Leaf,
  Thermometer,
  ArrowRight,
  ChevronDown,
  Globe,
  Battery,
  Droplets,
  Shield,
} from 'lucide-react'
import heroBg from '../../assets/home_background_img.png'
import allLogosBand from '../../assets/all-logos-together-band.png'
import logoSolarcold from '../../assets/logo_solarcold.png'
import logoGreenImpact from '../../assets/logo_green_impact.png'
import logoEni from '../../assets/logo_enit.png'
import logoUtm from '../../assets/logo_utm.png'
import logoAnpr from '../../assets/logo_anpr.png'
import logoLse from '../../assets/logo_lse.png'
import logoLree from '../../assets/logo_lree.png'
import logoSqli from '../../assets/logo_sqli.png'
import logoQehna from '../../assets/logo_qehna.png'
import './Home.css'

function Home() {
  return (
    <div className="home">

      {/* Logos Band */}
      <div className="logos-band">
        <img src={allLogosBand} alt="Project partner logos" className="logos-band__img" />
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img src={heroBg} alt="" className="hero-bg-image" />
          <div className="hero-gradient" />
          <div className="hero-pattern" />
          <div className="hero-glow hero-glow--1" />
          <div className="hero-glow hero-glow--2" />
        </div>

        <div className="hero-content">

          <h1 className="hero-title">
            Smart, Connected &
            <br />
            <span className="hero-highlight">Mobile Cold Storage</span>
            <br />
            Powered by Solar Energy
          </h1>

          <p className="hero-description">
            SolarCold is developing a mobile, connected cold storage container powered by
            photovoltaic panels, integrating smart energy management (EMS) and Digital Twin
            technology to reduce post-harvest losses by 25% and improve food security for
            small-scale farmers in rural Tunisia.
          </p>

          <div className="hero-actions">
            <Link to="/overview" className="btn btn-primary">
              <span>Explore the Project</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/roadmap" className="btn btn-secondary">
              <span>View Roadmap</span>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">1</span>
              <span className="stat-label">Mobile Containers</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">TRL 7</span>
              <span className="stat-label">Target Readiness</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">25%</span>
              <span className="stat-label">Loss Reduction Goal</span>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <ChevronDown size={20} />
        </div>
      </section>

      {/* Mission Section */}
      <section className="section section--mission">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Mission</span>
            <h2 className="section-title">
              Bridging the Gap Between
              <br />
              <span className="text-gold">Solar Energy</span> &{' '}
              <span className="text-green">Cold Storage</span>
            </h2>
            <p className="section-subtitle">
              Cold storage in Tunisia is a strategic challenge: postharvest losses of perishable
              products like fruits, vegetables, potatoes, and dates reach significant levels due
              to the lack of an efficient cold chain (FAO, CIHEAM). Existing facilities are
              concentrated with industrial operators, making access difficult for small-scale
              farmers. SolarCold develops decentralised, smart, solar-powered cold storage to
              bridge this gap.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon feature-icon--gold">
                <Sun size={28} />
              </div>
              <h3>Photovoltaic Powered</h3>
              <p>
                A mobile cold storage containers powered entirely by solar PV panels, sized
                and optimised for Tunisian rural conditions, delivering autonomous off-grid
                refrigeration. Starting at TRL 4, targeting TRL 7.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon--green">
                <Leaf size={28} />
              </div>
              <h3>Eco-Friendly</h3>
              <p>
                Zero greenhouse gas emissions during operation, with a target of reducing
                post-harvest losses and food waste by 25%. A sustainable alternative to
                energy-intensive conventional refrigeration systems.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon--blue">
                <Thermometer size={28} />
              </div>
              <h3>Thermal Optimisation</h3>
              <p>
                CFD modelling and simulation of refrigeration cycles with optimised refrigerants
                ensure thermal uniformity and improved COP, reducing quality degradation of
                stored agricultural products.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon--navy">
                <Battery size={28} />
              </div>
              <h3>Smart Energy Management</h3>
              <p>
                An intelligent EMS algorithm optimises power distribution between PV generation,
                energy storage, and cold storage loads, developed and validated through simulation
                and real-world testing.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon--coral">
                <Globe size={28} />
              </div>
              <h3>Digital Twin & Marketplace</h3>
              <p>
                A calibrated Digital Twin (target TRL 6), mobile app for farmers, web marketplace
                for cold storage sharing and co-location, and a national statistical observatory
                on cold storage supply and demand.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon feature-icon--sky">
                <Shield size={28} />
              </div>
              <h3>Mobile & Connected</h3>
              <p>
                A container-based cold room installed at
                ENIT connected, portable, and designed for repurposed logistics containers
                adapted to rural agricultural zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section section--impact">
        <div className="container">
          <div className="impact-layout">
            <div className="impact-content">
              <span className="section-tag">Why It Matters</span>
              <h2 className="section-title">
                The Cold Chain Crisis in Tunisia
              </h2>
              <p className="impact-text">
                Cold storage in Tunisia is a <strong>strategic challenge</strong>: postharvest losses of
                perishable products like fruits, vegetables, potatoes, and dates reach alarming
                levels. Studies by <strong>FAO and CIHEAM</strong> confirm that the absence of adequate
                storage infrastructure forces farmers to sell immediately at low prices, directly
                affecting incomes and national food security.
              </p>
              <p className="impact-text">
                Existing cold storage facilities are <strong>concentrated with industrial and logistics
                  operators</strong>, making access difficult for small-scale farmers and reinforcing
                value chain imbalances. Conventional systems are energy-intensive and rely on
                outdated technologies. SolarCold develops <strong>a mobile, connected, solar-powered
                  container</strong> as a decentralised alternative targeting a 25% reduction in
                post-harvest losses.
              </p>

              <div className="impact-highlights">
                <div className="impact-highlight">
                  <Droplets size={20} className="impact-icon" />
                  <div>
                    <strong>Food Security</strong>
                    <span>Reducing post-harvest losses for small-scale rural farmers in Tunisia</span>
                  </div>
                </div>
                <div className="impact-highlight">
                  <Zap size={20} className="impact-icon" />
                  <div>
                    <strong>Energy Independence</strong>
                    <span>Fully autonomous operation via solar photovoltaic energy, no grid required</span>
                  </div>
                </div>
                <div className="impact-highlight">
                  <Shield size={20} className="impact-icon" />
                  <div>
                    <strong>Environmental Protection</strong>
                    <span>Reducing food waste and environmental footprint through green technology</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="impact-visual">
              <div className="impact-card impact-card--1">
                <span className="impact-card-number">40%+</span>
                <span className="impact-card-label">Harvest losses without adequate storage infrastructure</span>
              </div>
              <div className="impact-card impact-card--2">
                <span className="impact-card-number">25%</span>
                <span className="impact-card-label">Food losses that can be prevented with better storage access</span>
              </div>
              <div className="impact-card impact-card--3">
                <span className="impact-card-number">1st km</span>
                <span className="impact-card-label">Most critical stage between harvest and distribution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section--cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <h2>Ready to Learn More?</h2>
              <p>
                Explore our detailed project overview, meet the team, and discover how SolarCold is
                making an impact in the fight against climate change.
              </p>
              <div className="cta-actions">
                <Link to="/overview" className="btn btn-primary">
                  Project Overview
                  <ArrowRight size={18} />
                </Link>
                <Link to="/team" className="btn btn-ghost">
                  Meet the Team
                </Link>
              </div>
            </div>
            <div className="cta-decoration">
              <Sun size={120} className="cta-sun" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                <img src={logoSolarcold} alt="SolarCold" className="footer-logo-img" />
                <span>SolarCold</span>
              </div>
              <p>Project T3P3: A Green Impact initiative. Development of a smart, connected and mobile cold storage container powered by photovoltaic panels for rural Tunisia.</p>
            </div>
            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/overview">Overview</Link>
              <Link to="/team">Team</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/roadmap">Roadmap</Link>
            </div>
          </div>
          <div className="footer-partners">
            <span className="footer-partners-label">Partners &amp; Affiliations</span>
            <div className="footer-partner-logos">
              <img src={logoGreenImpact} alt="Green Impact" />
              <img src={logoAnpr} alt="ANPR" />
              <img src={logoEni} alt="ENIT" />
              <img src={logoUtm} alt="UTM" />
              <img src={logoLse} alt="LSE" />
              <img src={logoLree} alt="LREE" />
              <img src={logoSqli} alt="SQLI" />
              <img src={logoQehna} alt="Qehna" />
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 SolarCold, Green Impact. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home

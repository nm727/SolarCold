import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Images, Calendar } from 'lucide-react'
import heroBg from '../../assets/background-image2.jpg'

// ── Event 1: Signing Ceremony — 11 February 2026 ──────────────────────────────
import feb_cover from '../../assets/event11feb/signature11feb.jpg'
import feb_img1 from '../../assets/event11feb/signature11feb.jpg'
import feb_img2 from '../../assets/event11feb/event11feb2.jpg'
import feb_img3 from '../../assets/event11feb/gwerra11feb.jpg'
import feb_img4 from '../../assets/event11feb/mitouz11feb.jpg'
import feb_img5 from '../../assets/event11feb/mitouz11feb2.jpg'
import feb_img6 from '../../assets/event11feb/mitouz11feb3.jpg'

// ── Event 2: Financial Management Training — 13 February 2026 ────────────────
import gest_cover from '../../assets/gest13feb/forgestfin13feb.jpg'
import gest_img1 from '../../assets/gest13feb/forgestfin13feb.jpg'
import gest_img2 from '../../assets/gest13feb/mitouz13feb.jpg'
import gest_img3 from '../../assets/gest13feb/mitouzz13feb.jpg'

// ── Event 3: PhD Defense of Mazen Takriti — 15 April 2026 ───────────────────
import mazen_cover from '../../assets/thesemazen15april/mazenthese15aprl.jpg'
import mazen_img1 from '../../assets/thesemazen15april/mazenthese15aprl.jpg'
import mazen_img2 from '../../assets/thesemazen15april/thesemazen2.jpg'

// ── Event 4: Kick-off Meeting — 28 April 2026 ────────────────────────────────
import kick_cover from '../../assets/background-image2.jpg'
import kick_img1 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 17.41.49.jpeg'
import kick_img2 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 17.41.52.jpeg'
import kick_img3 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 17.45.29.jpeg'
import kick_img4 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.01.06.jpeg'
import kick_img5 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.01.11.jpeg'
import kick_img6 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.01.54.jpeg'
import kick_img7 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.02.26.jpeg'
import kick_img8 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.02.49.jpeg'
import kick_img9 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.02.56.jpeg'
import kick_img10 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.15.15.jpeg'
import kick_img11 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.16.09.jpeg'
import kick_img12 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.24.46.jpeg'
import kick_img13 from '../../assets/kickoff28april/WhatsApp Image 2026-06-14 at 18.26.32.jpeg'

// ── Event 5: Journée de la Recherche UTM — 6 May 2026 ───────────────────────
import utm_cover from '../../assets/journeerechercheUTM6mai/rechUTM6mai.jpg'
import utm_img1 from '../../assets/journeerechercheUTM6mai/rechUTM6mai.jpg'
import utm_img2 from '../../assets/journeerechercheUTM6mai/mitouz6mai.jpg'

// ── Event 6: ICEPA 2026 — 23-24 June 2026 ───────────────────────────────────
import icepa_cover from '../../assets/internationalcongresICEPA23-24juin/1000043302.jpg'
import icepa_img1 from '../../assets/internationalcongresICEPA23-24juin/1000043302.jpg'
import icepa_img2 from '../../assets/internationalcongresICEPA23-24juin/1000043303.jpg'
import icepa_img3 from '../../assets/internationalcongresICEPA23-24juin/1000043304.jpg'
import icepa_img4 from '../../assets/internationalcongresICEPA23-24juin/1000043305.jpg'
import icepa_img5 from '../../assets/internationalcongresICEPA23-24juin/1000043306.jpg'

// ── Event 7: Habilitation Defense of Marwa Ben Said Romdane — 27 June 2026 ──
import marwa_cover from '../../assets/soutenancemarwa27juin/background-image1.jpg'
import marwa_img1 from '../../assets/soutenancemarwa27juin/background-image1.jpg'

import './Gallery.css'

// ── Event definitions ──────────────────────────────────────────────────────────
const events = [
  {
    id: 'event11feb',
    title: 'Cérémonie de signature des conventions Green Impact',
    date: '11 Février 2026',
    category: 'Événements',
    description:
      `Cérémonie de signature des conventions Green Impact: lancement officiel du projet T3P3 (SolarCold). Les partenaires et représentants institutionnels se sont réunis à l'ENIT pour signer la convention.`,
    cover: feb_cover,
    images: [
      { src: feb_img1, caption: 'Cérémonie de signature' },
      { src: feb_img2, caption: 'Temps forts, 11 février' },
      { src: feb_img3, caption: 'Prof. Gwerra lors de la cérémonie' },
      { src: feb_img4, caption: `Allocution d'ouverture du coordinateur` },
      { src: feb_img5, caption: 'Partenaires du consortium à la table de signature' },
      { src: feb_img6, caption: 'Procédures officielles: lancement SolarCold' },
    ],
  },
  {
    id: 'gest13feb',
    title: 'Formation sur la gestion financière des projets Green Impact',
    date: '13 Février 2026',
    category: 'Formation',
    description:
      `Session de formation dédiée à la gestion financière des projets Green Impact, réunissant les équipes partenaires pour renforcer leurs compétences en suivi budgétaire et reporting.`,
    cover: gest_cover,
    images: [
      { src: gest_img1, caption: 'Formation: gestion financière des projets' },
      { src: gest_img2, caption: 'Session de travail avec les équipes partenaires' },
      { src: gest_img3, caption: 'Ateliers pratiques de suivi budgétaire' },
    ],
  },
  {
    id: 'thesemazen15april',
    title: 'Soutenance de thèse de Mazen Takriti',
    date: '15 Avril 2026',
    category: 'Académique',
    description:
      `Soutenance de thèse de doctorat de Mazen Takriti, membre de l'équipe SolarCold. Une étape importante marquant l'avancement de la recherche liée au projet.`,
    cover: mazen_cover,
    images: [
      { src: mazen_img1, caption: 'Mazen Takriti lors de sa soutenance de thèse' },
      { src: mazen_img2, caption: 'Session de questions du jury' },
    ],
  },
  {
    id: 'kickoff28april',
    title: 'Kick off Projet SOLARCOLD',
    date: '28 Avril 2026',
    category: 'Événements',
    description:
      `Réunion de lancement officielle du projet SolarCold, réunissant tous les partenaires du consortium pour s'aligner sur la feuille de route, les responsabilités des lots de travaux et les prochaines étapes.`,
    cover: kick_cover,
    images: [
      { src: kick_img1, caption: 'Ouverture de la réunion de lancement' },
      { src: kick_img2, caption: 'Tour de présentation du consortium' },
      { src: kick_img3, caption: 'Présentation générale du projet' },
      { src: kick_img4, caption: 'Discussion sur le lot de travaux: WP1' },
      { src: kick_img5, caption: 'Discussion sur le lot de travaux: WP2' },
      { src: kick_img6, caption: 'Session technique' },
      { src: kick_img7, caption: 'Présentations des partenaires' },
      { src: kick_img8, caption: 'Questions & discussion ouverte' },
      { src: kick_img9, caption: 'Session de travail en groupe' },
      { src: kick_img10, caption: 'Planification des jalons' },
      { src: kick_img11, caption: 'Pause, réseautage' },
      { src: kick_img12, caption: 'Session finale: accords' },
      { src: kick_img13, caption: 'Photo de clôture' },
    ],
  },
  {
    id: 'journeerechercheUTM6mai',
    title: `Journée de la Recherche de l'UTM`,
    date: '6 Mai 2026',
    category: 'Recherche',
    description:
      `Journée annuelle de la recherche de l'Université de Tunis el Manar, au cours de laquelle l'équipe SolarCold a présenté ses avancées et échangé avec d'autres chercheurs.`,
    cover: utm_cover,
    images: [
      { src: utm_img1, caption: 'Journée de la Recherche, UTM 2026' },
      { src: utm_img2, caption: 'Présentation SolarCold lors de la journée' },
    ],
  },
  {
    id: 'icepa2026',
    title: 'International Congress on Environment, Processes and Automation (ICEPA 2026)',
    date: '23-24 Juin 2026',
    category: 'Congrès',
    description:
      `Participation de l'équipe SolarCold au congrès international ICEPA 2026, dédié à l'environnement, aux procédés et à l'automatisation. Une occasion de partager les résultats scientifiques du projet.`,
    cover: icepa_cover,
    images: [
      { src: icepa_img1, caption: `ICEPA 2026, session d'ouverture` },
      { src: icepa_img2, caption: 'Présentation scientifique SolarCold' },
      { src: icepa_img3, caption: 'Échanges entre chercheurs' },
      { src: icepa_img4, caption: 'Poster SolarCold au congrès' },
      { src: icepa_img5, caption: 'Session plénière ICEPA 2026' },
    ],
  },
  {
    id: 'soutenancemarwa27juin',
    title: 'Soutenance habilitation Marwa Ben Said Romdane',
    date: '27 Juin 2026',
    category: 'Académique',
    description:
      `Soutenance de l'habilitation universitaire de Marwa Ben Said Romdane, chercheuse associée au projet SolarCold. Une étape majeure dans son parcours académique.`,
    cover: marwa_cover,
    images: [
      { src: marwa_img1, caption: `Soutenance d'habilitation de Marwa Ben Said Romdane` },
    ],
  },
]

// ── Component ──────────────────────────────────────────────────────────────────
function Gallery() {
  // Which event's lightbox is open (event id string or null)
  const [openEvent, setOpenEvent] = useState(null)
  // Which image index within that event's lightbox
  const [photoIndex, setPhotoIndex] = useState(0)

  const activeEvent = events.find((e) => e.id === openEvent)

  const openLightbox = (eventId, idx = 0) => {
    setOpenEvent(eventId)
    setPhotoIndex(idx)
  }

  const closeLightbox = () => {
    setOpenEvent(null)
    setPhotoIndex(0)
  }

  const goPrev = () => {
    if (!activeEvent) return
    setPhotoIndex((i) => (i - 1 + activeEvent.images.length) % activeEvent.images.length)
  }

  const goNext = () => {
    if (!activeEvent) return
    setPhotoIndex((i) => (i + 1) % activeEvent.images.length)
  }

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') goNext()
    if (e.key === 'ArrowLeft') goPrev()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <div className="gallery">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src={heroBg} alt="" className="page-hero-bg-img" />
          <div className="page-hero-bg-overlay" />
        </div>
        <div className="page-hero-content">
          <span className="page-tag">Gallery</span>
          <h1 className="page-title">
            Project <span className="text-gold-light">Gallery</span>
          </h1>
          <p className="page-description">
            Visual documentation of our events, field work, and the milestones
            behind SolarCold. Click any event to browse its full photo album.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="gallery-grid gallery-grid--events">
            {events.map((event) => (
              <div
                key={event.id}
                className="event-card"
                onClick={() => openLightbox(event.id, 0)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(event.id, 0)}
                aria-label={`Open gallery for ${event.title}`}
              >
                {/* Cover image */}
                <div className="event-card__cover">
                  <img src={event.cover} alt={event.title} className="event-card__img" />
                  <div className="event-card__overlay">
                    <ZoomIn size={28} />
                    <span>View {event.images.length} Photos</span>
                  </div>
                  <span className="event-card__count">
                    <Images size={14} />
                    {event.images.length}
                  </span>
                </div>

                {/* Card info */}
                <div className="event-card__info">
                  <div className="event-card__meta">
                    <span className="gallery-category">{event.category}</span>
                    <span className="event-card__date">
                      <Calendar size={12} />
                      {event.date}
                    </span>
                  </div>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>

                  {/* Thumbnail strip */}
                  <div className="event-card__thumbs">
                    {event.images.slice(0, 4).map((img, i) => (
                      <button
                        key={i}
                        className="event-card__thumb"
                        onClick={(e) => { e.stopPropagation(); openLightbox(event.id, i) }}
                        aria-label={`Open photo ${i + 1}`}
                      >
                        <img src={img.src} alt={img.caption} />
                      </button>
                    ))}
                    {event.images.length > 4 && (
                      <div className="event-card__thumb event-card__thumb--more">
                        +{event.images.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeEvent && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-label={activeEvent.title}
        >
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">
              <X size={24} />
            </button>

            {/* Prev */}
            <button className="lightbox-nav lightbox-nav--prev" onClick={goPrev} aria-label="Previous">
              <ChevronLeft size={28} />
            </button>

            {/* Body */}
            <div className="lightbox-body">
              <div className="lightbox-image">
                <img
                  src={activeEvent.images[photoIndex].src}
                  alt={activeEvent.images[photoIndex].caption}
                  className="lightbox-real-img"
                />
              </div>

              <div className="lightbox-info">
                <div className="lightbox-info__header">
                  <span className="gallery-category">{activeEvent.category}</span>
                  <span className="lightbox-counter">
                    {photoIndex + 1} / {activeEvent.images.length}
                  </span>
                </div>
                <h3>{activeEvent.title}</h3>
                <p>{activeEvent.images[photoIndex].caption}</p>
              </div>

              {/* Thumbnail strip inside lightbox */}
              <div className="lightbox-thumbstrip">
                {activeEvent.images.map((img, i) => (
                  <button
                    key={i}
                    className={`lightbox-thumb ${i === photoIndex ? 'lightbox-thumb--active' : ''}`}
                    onClick={() => setPhotoIndex(i)}
                    aria-label={`Photo ${i + 1}`}
                  >
                    <img src={img.src} alt={img.caption} />
                  </button>
                ))}
              </div>
            </div>

            {/* Next */}
            <button className="lightbox-nav lightbox-nav--next" onClick={goNext} aria-label="Next">
              <ChevronRight size={28} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery

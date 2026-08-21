import { useState } from 'react'
import './App.css'


/* =========================================================
   TYPES
========================================================= */

type Screenshot = {
  src: string
  alt: string
  title: string
  description: string
}

type ProjectVideo = {
  src: string
  title: string
  description: string
}

type Experience = {
  id: string
  period: string
  title: string
  company: string
  projectTitle: string
  shortDescription: string
  description: string
  technologies: string[]
  missions: string[]
  confidentiality?: boolean
  highlight?: string
  screenshots?: Screenshot[]
}

type ProjectDetail = {
  title: string
  description: string
}

type Project = {
  id: string
  category: string
  title: string
  subtitle: string
  status: string
  shortDescription: string
  description: string
  technologies: string[]
  details: ProjectDetail[]
  learning: string
  challenges?: string
  screenshots?: Screenshot[]
  video?: ProjectVideo
}


/* =========================================================
   ASSETS
========================================================= */

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`


/* =========================================================
   EXPERIENCES
========================================================= */

const experiences: Experience[] = [
  {
    id: 'winms',
    period: 'Février 2026 — Août 2026',
    title: 'Ingénieur Développement C# / WPF',
    company: 'WiN-MS',
    projectTitle: 'TRINITY / TrinityStudio',

    shortDescription:
      'Évolution d’une application desktop industrielle de configuration et de tests électriques.',

    description:
      'Participation à l’évolution de TrinityStudio, une application desktop WPF utilisée pour préparer et configurer des scénarios de tests de câblages électriques. Intervention sur plusieurs couches de l’application, depuis les interfaces XAML et les ViewModels jusqu’aux services métier et à la persistance SQLite.',

    technologies: [
      'C#',
      '.NET Framework 4.8',
      'WPF',
      'XAML',
      'MVVM',
      'SQLite',
      'Prism',
      'Git / GitLab',
      'CSV',
      'JSON',
    ],

    missions: [
      'Refonte et fiabilisation de la persistance SQLite : relations entre entités, GUID, clés étrangères, transactions et suppressions contrôlées.',
      'Développement d’un système d’import CSV transactionnel permettant de reconstruire des configurations métier complexes.',
      'Conception des fonctions d’import/export total et partiel avec création du format d’échange .trinityexport.',
      'Refonte des tests dynamiques et de la sélection des nodes avec les modes EACH, GROUP et CASCADE.',
      'Amélioration de l’ergonomie WPF : DataGrid, popups, filtres, onglets, états visuels et optimisation pour une utilisation tactile.',
      'Maintenance applicative, diagnostic des anomalies, journalisation et mise à jour de la documentation utilisateur.',
    ],

    confidentiality: true,

    highlight:
      'Intervention sur l’ensemble de la chaîne applicative : interface WPF, architecture MVVM, logique métier, persistance SQLite et import/export de configurations.',
  },

  {
    id: 'medhub',
    period: 'Avril 2024 — Août 2024',
    title: 'Développeur Full Stack',
    company: 'MEDHUB',
    projectTitle: 'Application de gestion d’incidents',

    shortDescription:
      'Développement d’une application web permettant de centraliser et suivre le traitement des incidents.',

    description:
      'Participation au développement d’une application web permettant de centraliser les incidents, organiser leur traitement et suivre leur évolution depuis leur déclaration jusqu’à leur résolution.',

    technologies: [
      'C#',
      '.NET',
      'Développement Web',
      'SQL',
    ],

    missions: [
      'Développement du processus de création et de qualification des incidents.',
      'Gestion des catégories, niveaux de priorité et statuts associés aux incidents.',
      'Mise en place du workflow de suivi : création, prise en charge, traitement et résolution.',
      'Développement de fonctionnalités de recherche, filtrage et consultation des incidents.',
      'Exploitation de la base de données et développement des requêtes nécessaires au suivi des incidents.',
      'Maintenance applicative, correction d’anomalies et participation aux évolutions fonctionnelles.',
    ],

    screenshots: [
      {
        src: asset('projects/medhub/acceuil.png'),
        alt: 'Page d’accueil de MEDHUB',
        title: 'Accueil',
        description:
          'Interface principale de l’application de gestion des incidents.',
      },

      {
        src: asset('projects/medhub/demande.png'),
        alt: 'Création d’une demande MEDHUB',
        title: 'Création d’une demande',
        description:
          'Interface permettant de créer et renseigner une nouvelle demande.',
      },

      {
        src: asset('projects/medhub/detail.png'),
        alt: 'Détail d’une demande MEDHUB',
        title: 'Détail d’une demande',
        description:
          'Consultation des informations et du suivi d’une demande sélectionnée.',
      },

      {
        src: asset('projects/medhub/liste.png'),
        alt: 'Liste des demandes MEDHUB',
        title: 'Liste des demandes',
        description:
          'Vue permettant de consulter et suivre les demandes enregistrées.',
      },
    ],
  },

  {
    id: 'commune-fes',
    period: 'Mai 2023 — Octobre 2023',
    title: 'Développeur Full Stack',
    company: 'Commune de Fès',
    projectTitle: 'Gestion de formulaires administratifs',

    shortDescription:
      'Conception et développement individuel d’une application web de gestion de formulaires administratifs.',

    description:
      'Conception et développement complet d’une application web de gestion de formulaires administratifs. La plateforme propose un espace utilisateur pour la saisie et la soumission des demandes, ainsi qu’un espace administrateur pour leur consultation, le suivi des demandes urgentes et la visualisation de statistiques.',

    technologies: [
      'ASP.NET',
      'ASP.NET MVC',
      '.NET Framework',
      'Entity Framework Core',
      'Microsoft SQL Server',
      'Google Maps API',
      'UML',
      'Sécurité des bases de données',
    ],

    missions: [
      'Analyse des besoins, conception UML et développement complet de l’application web.',
      'Développement du processus de saisie et de soumission des formulaires administratifs.',
      'Conception et exploitation de la base SQL Server avec Entity Framework.',
      'Développement de l’espace administrateur : authentification, consultation et gestion des demandes urgentes.',
      'Intégration de Google Maps API pour afficher la localisation des différentes communes.',
      'Mise en place de statistiques et de fonctionnalités de téléchargement de documents.',
    ],

    screenshots: [
      {
        src: asset('projects/stage2/home.png'),
        alt: "Interface d'accueil de l'application Commune de Fès",
        title: "Interface d'accueil",
        description:
          'Page principale destinée aux utilisateurs.',
      },

      {
        src: asset('projects/stage2/services.png'),
        alt: 'Page des services',
        title: 'Services',
        description:
          'Accès aux différentes fonctionnalités proposées.',
      },

      {
        src: asset('projects/stage2/formulaire.png'),
        alt: 'Formulaire administratif',
        title: 'Formulaire de demande',
        description:
          'Interface utilisée pour saisir une demande.',
      },

      {
        src: asset('projects/stage2/admin-dashboard.png'),
        alt: 'Tableau de bord administrateur',
        title: 'Dashboard administrateur',
        description:
          'Consultation et suivi des demandes enregistrées.',
      },
    ],
  },

  {
    id: 'elephant-vert',
    period: 'Juin 2022 — Septembre 2022',
    title: 'Développeur',
    company: "L'Éléphant Vert",
    projectTitle: 'Application de gestion de stock',

    shortDescription:
      'Conception et développement d’une application destinée au suivi et à la gestion des stocks.',

    description:
      'Conception et développement d’une application de gestion de stock permettant de centraliser les produits, suivre les mouvements d’entrée et de sortie et améliorer la visibilité sur les quantités disponibles.',

    technologies: [
      'C#',
      '.NET',
      'MySQL',
      'SQL',
    ],

    missions: [
      'Analyse des besoins fonctionnels liés au suivi et à la gestion des stocks.',
      'Développement des fonctionnalités de gestion des produits et des données associées.',
      'Mise en place des opérations d’entrée et de sortie de stock.',
      'Gestion et mise à jour des quantités disponibles dans le stock.',
      'Conception et exploitation de la base de données MySQL.',
      'Développement des opérations CRUD, recherche, filtrage et correction d’anomalies.',
    ],

    screenshots: [
      {
        src: asset('projects/elephantvert/interface.png'),
        alt: "Interface principale de l'application de gestion de stock",
        title: 'Interface principale',
        description:
          'Vue principale de l’application permettant de consulter les informations de stock.',
      },

      {
        src: asset('projects/elephantvert/mouvement.png'),
        alt: 'Gestion des mouvements de stock',
        title: 'Mouvements de stock',
        description:
          'Interface permettant de suivre les entrées et sorties de stock.',
      },

      {
        src: asset('projects/elephantvert/inventaire.png'),
        alt: 'Inventaire du stock',
        title: 'Inventaire',
        description:
          'Vue dédiée au contrôle et au suivi des quantités disponibles.',
      },
    ],
  },
]


/* =========================================================
   PROJECTS
========================================================= */

const projects: Project[] = [
  {
    id: 'password-manager',
    category: 'Sécurité · Application Desktop',
    title: 'Password Manager Sécurisé',
    subtitle: 'Gestion sécurisée d’informations sensibles en C#',
    status: 'Projet académique',

    shortDescription:
      'Gestionnaire sécurisé intégrant double authentification, chiffrement et protection des sessions.',

    description:
      'Développement d’une application C# permettant de gérer des informations utilisateurs sensibles tout en intégrant plusieurs mécanismes de protection : double authentification, chiffrement des mots de passe, contrôle d’accès et fermeture automatique après une période d’inactivité.',

    technologies: [
      'C#',
      '.NET',
      'POO',
      '2FA',
      'Encryption',
      'Gmail',
      'UML',
    ],

    details: [
      {
        title: 'Double authentification',
        description:
          'Authentification en deux étapes avec validation locale liée à la machine puis vérification d’un code à usage unique envoyé par e-mail.',
      },

      {
        title: 'Gestion des utilisateurs',
        description:
          'Ajout, modification, suppression et recherche dynamique des utilisateurs et de leurs informations.',
      },

      {
        title: 'Protection des données',
        description:
          'Chiffrement des mots de passe avant leur sauvegarde afin de protéger les informations sensibles.',
      },

      {
        title: 'Sauvegarde & chargement',
        description:
          'Sauvegarde des informations dans un fichier puis rechargement des données pour une utilisation ultérieure.',
      },

      {
        title: 'Session sécurisée',
        description:
          'Fermeture automatique de l’application après une période d’inactivité afin de limiter les accès non autorisés.',
      },

      {
        title: 'Conception UML',
        description:
          'Modélisation des principaux composants de l’application et de leurs interactions.',
      },
    ],

    learning:
      'Programmation orientée objet, sécurité applicative, authentification, chiffrement, gestion des données sensibles et conception logicielle.',
  },

  {
    id: 'resources-aspnet',
    category: 'ASP.NET · Application métier',
    title: 'Gestion des ressources & appels d’offres',
    subtitle:
      'Système de gestion pour un établissement universitaire',
    status: 'Projet académique',

    shortDescription:
      'Application web de gestion des ressources matérielles et du suivi des appels d’offres.',

    description:
      'Développement d’une application web permettant de gérer les ressources matérielles d’un établissement ainsi que le suivi des appels d’offres associés à l’acquisition de nouveaux équipements.',

    technologies: [
      'ASP.NET',
      'C#',
      'SQL Server',
      'Web',
      'Architecture',
    ],

    details: [
      {
        title: 'Analyse des besoins',
        description:
          'Identification des besoins liés à la gestion des équipements et aux processus d’acquisition.',
      },

      {
        title: 'Gestion des équipements',
        description:
          'Centralisation et suivi des ressources matérielles utilisées par l’établissement.',
      },

      {
        title: 'Allocation des ressources',
        description:
          'Organisation et suivi de l’affectation des équipements selon les besoins.',
      },

      {
        title: "Appels d'offres",
        description:
          'Mise en place de fonctionnalités permettant de suivre les appels d’offres liés aux acquisitions de matériel.',
      },

      {
        title: 'Base de données',
        description:
          'Conception et exploitation d’une base SQL Server pour assurer la persistance des informations métier.',
      },

      {
        title: 'Architecture applicative',
        description:
          'Structuration de l’application et séparation des responsabilités entre interface, logique métier et données.',
      },
    ],

    learning:
      'ASP.NET, développement C#, modélisation de données, SQL Server, analyse fonctionnelle et conception d’applications métier.',
  },

  {
    id: 'benzscore',
    category: 'Web · Data · Sport',
    title: 'BenzScore',
    subtitle:
      'Plateforme web de résultats et statistiques sportives',
    status: "Projet de fin d'année",

    shortDescription:
      'Plateforme regroupant scores live, matchs à venir, actualités, statistiques et classements sportifs.',

    description:
      'Conception d’une plateforme web dynamique permettant de consulter les actualités sportives, les scores en direct, les matchs à venir, les classements, les statistiques des équipes et des joueurs ainsi que des prédictions de résultats.',

    technologies: [
      'Python',
      'Flask',
      'HTML',
      'CSS',
      'JavaScript',
      'Beautiful Soup',
      'Web Scraping',
      'Power BI',
      'Insomnia',
      'UML',
    ],

    details: [
      {
        title: 'Scores en direct',
        description:
          'Affichage des résultats live selon la catégorie sportive sélectionnée par l’utilisateur.',
      },

      {
        title: 'Matchs à venir',
        description:
          'Consultation des prochains matchs selon le sport sélectionné et la date.',
      },

      {
        title: 'Web Scraping',
        description:
          'Collecte automatisée de données sportives avec Python et Beautiful Soup.',
      },

      {
        title: 'Statistiques & classements',
        description:
          'Affichage des performances des équipes, des statistiques des joueurs et des classements.',
      },

      {
        title: 'Actualités sportives',
        description:
          'Organisation des actualités par catégories afin de faciliter la navigation.',
      },

      {
        title: 'Analyse de données',
        description:
          'Traitement des données collectées et création de visualisations avec Power BI.',
      },
    ],

    challenges:
      'Collecte et nettoyage des données sportives, intégration de sources temps réel et conception d’une interface capable de présenter plusieurs catégories de sports de manière claire.',

    learning:
      'Développement web Python/Flask, intégration de données, web scraping, consommation d’API, visualisation, tests et conception UML.',

    video: {
      src: asset('projects/benzscore/pfavideo.mp4'),
      title: 'Démonstration de BenzScore',
      description:
        'Présentation des principales fonctionnalités de la plateforme : navigation, résultats sportifs, statistiques et consultation des données.',
    },
  },

  {
    id: 'chess-ai',
    category: 'Intelligence Artificielle · Desktop',
    title: "Jeu d'Échecs avec IA",
    subtitle: 'Application desktop développée en C++ / Qt',
    status: 'Projet académique',

    shortDescription:
      'Jeu d’échecs desktop intégrant la logique de jeu et une intelligence artificielle.',

    description:
      'Développement d’un jeu d’échecs desktop intégrant une intelligence artificielle permettant à un utilisateur d’affronter la machine, avec gestion du plateau, des pièces, des déplacements et de la logique de jeu.',

    technologies: [
      'C++',
      'Qt',
      'POO',
      'Algorithmique',
      'IA',
    ],

    details: [
      {
        title: 'Modélisation du jeu',
        description:
          'Représentation du plateau, des pièces et de l’état courant d’une partie.',
      },

      {
        title: 'Règles des échecs',
        description:
          'Implémentation de la logique de déplacement et validation des actions des différentes pièces.',
      },

      {
        title: 'Intelligence artificielle',
        description:
          'Mise en place d’une logique permettant à la machine de sélectionner et exécuter ses propres mouvements.',
      },

      {
        title: 'Interface graphique',
        description:
          'Développement de l’interface desktop et des interactions utilisateur avec Qt.',
      },
    ],

    learning:
      'C++, programmation orientée objet, algorithmique, logique de jeu, conception d’interfaces Qt et introduction aux algorithmes d’IA.',

    screenshots: [
      {
        src: asset('projects/chess/ChessInterface.png'),
        alt: "Interface principale du jeu d'échecs",
        title: 'Interface principale',
        description:
          'Menu principal permettant de choisir le mode de jeu : joueur contre joueur ou joueur contre IA.',
      },

      {
        src: asset('projects/chess/ChessBoard.png'),
        alt: "Plateau du jeu d'échecs",
        title: "Plateau d'échecs",
        description:
          'Interface de jeu avec le plateau, les pièces et la gestion des déplacements.',
      },
    ],
  },
]


/* =========================================================
   APP
========================================================= */

function App() {
  const [selectedImage, setSelectedImage] =
    useState<string | null>(null)

  const [
    selectedExperienceId,
    setSelectedExperienceId,
  ] = useState<string | null>(null)

  const [
    selectedProjectId,
    setSelectedProjectId,
  ] = useState<string | null>(null)


  const selectedExperience =
    experiences.find(
      (experience) =>
        experience.id === selectedExperienceId
    )

  const selectedProject =
    projects.find(
      (project) =>
        project.id === selectedProjectId
    )


  return (
    <div className="app">

      {/* =====================================================
          HOME
      ====================================================== */}

      <section id="home" className="home">

        <div className="profile-image-wrapper">

          <img
            src={asset('photoPortfolio.png')}
            alt="Ahmed Rhalem"
            className="profile-image"
          />

        </div>


        <h1>
          Ahmed Rhalem
        </h1>


        <h2>
          Software Engineer
          <span> · C# / .NET</span>
        </h2>


        <p className="intro">

          Software Engineer spécialisé en C#/.NET, titulaire
          d&apos;un Master en Organisation et Protection des
          Systèmes d&apos;Information en Entreprise à
          l&apos;Université Lumière Lyon 2. Expérimenté dans le
          développement d&apos;applications desktop et web avec
          C#, .NET, WPF, ASP.NET Core, React et Angular, ainsi
          que dans la conception de bases de données et
          d&apos;architectures applicatives. Mon parcours
          m&apos;a également permis de développer de solides
          bases en cybersécurité, sécurité applicative et bonnes
          pratiques de développement.

        </p>


        <nav className="profile-navigation">

          <a href="#about">
            À propos
          </a>

          <a href="#experience">
            Expériences
          </a>

          <a href="#projects">
            Projets
          </a>

          <a href="#skills">
            Compétences
          </a>

          <a href="#education">
            Formation
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        <a
          href="#about"
          className="scroll-down"
        >
          ↓
        </a>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section
        id="about"
        className="content-section about-section"
      >

        <div className="section-heading">

          <span className="section-number">
            01 — À propos
          </span>

          <h2>
            À propos de moi
          </h2>

        </div>


        <div className="about-grid">

          <div className="about-text">

            <p>
              Je suis ingénieur logiciel spécialisé dans
              le développement d&apos;applications en
              C#/.NET, avec une expérience en développement
              desktop, web et en conception
              d&apos;applications maintenables.
            </p>

            <p>
              Mon parcours m&apos;a également permis de
              développer un intérêt particulier pour la
              cybersécurité et la sécurité applicative.
              Je souhaite aujourd&apos;hui évoluer dans un
              environnement où je peux combiner
              développement logiciel, qualité du code et
              sécurité.
            </p>

          </div>


          <div className="about-infos">

            <div className="info-item">
              <span>Profil</span>
              <strong>Software Engineer</strong>
            </div>

            <div className="info-item">
              <span>Spécialité</span>
              <strong>C# / .NET</strong>
            </div>

            <div className="info-item">
              <span>Domaines</span>
              <strong>
                Software Engineering · Cybersecurity
              </strong>
            </div>

            <div className="info-item">
              <span>Disponibilité</span>
              <strong>
                Septembre 2026
              </strong>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXPERIENCES
      ====================================================== */}

      <section
        id="experience"
        className="content-section experience-section"
      >

        <div className="section-heading">

          <span className="section-number">
            02 — Expériences
          </span>

          <h2>
            Expériences professionnelles
          </h2>

          <p className="section-intro">
            Sélectionnez une expérience pour consulter ses
            missions, technologies et principaux apports.
          </p>

        </div>


        <div
          className={`master-detail-layout ${
            selectedExperience
              ? 'detail-open'
              : 'detail-closed'
          }`}
        >

          <div className="master-list">

            {experiences.map((experience) => {

              const isActive =
                selectedExperienceId === experience.id

              return (

                <button
                  key={experience.id}
                  type="button"
                  className={`summary-card master-card ${
                    isActive ? 'active' : ''
                  }`}
                  aria-expanded={isActive}
                  onClick={() =>
                    setSelectedExperienceId(
                      isActive
                        ? null
                        : experience.id
                    )
                  }
                >

                  <span className="summary-period">
                    {experience.period}
                  </span>

                  <h3>
                    {experience.title}
                  </h3>

                  <p className="summary-company">
                    {experience.company}
                  </p>

                  <p className="summary-description">
                    {experience.shortDescription}
                  </p>


                  <div className="summary-technologies">

                    {experience.technologies
                      .slice(0, 4)
                      .map((tech) => (

                        <span key={tech}>
                          {tech}
                        </span>

                      ))}

                  </div>


                  <span className="summary-link">

                    {isActive
                      ? 'Masquer les détails ↑'
                      : 'Voir les détails →'}

                  </span>

                </button>

              )

            })}

          </div>


          {selectedExperience && (

            <div className="master-detail-column">

              <article className="project-card experience-card detail-panel">

                <div className="detail-panel-top">

                  <span className="detail-panel-label">
                    Expérience sélectionnée
                  </span>

                  <button
                    type="button"
                    className="detail-close"
                    onClick={() =>
                      setSelectedExperienceId(null)
                    }
                  >
                    Fermer ×
                  </button>

                </div>


                <div className="experience-top">

                  <div className="experience-main-info">

                    <span className="project-type">
                      {selectedExperience.period}
                    </span>

                    <h3>
                      {selectedExperience.title}
                    </h3>

                    <p className="project-company">
                      {selectedExperience.company}
                    </p>

                  </div>


                  <div className="project-role">

                    <span>
                      Projet principal
                    </span>

                    <strong>
                      {selectedExperience.projectTitle}
                    </strong>

                  </div>

                </div>


                {selectedExperience.confidentiality && (

                  <div className="confidentiality-note">

                    <span>
                      Confidentialité
                    </span>

                    <p>
                      Les captures d&apos;écran et certains
                      détails fonctionnels de
                      l&apos;application ne peuvent pas être
                      présentés publiquement en raison de
                      contraintes de confidentialité.
                    </p>

                  </div>

                )}


                <p className="project-description">
                  {selectedExperience.description}
                </p>


                <div className="project-technologies">

                  {selectedExperience.technologies.map(
                    (tech) => (

                      <span key={tech}>
                        {tech}
                      </span>

                    )
                  )}

                </div>


                <div className="experience-subtitle">
                  Missions principales
                </div>


                <div className="project-features">

                  {selectedExperience.missions.map(
                    (mission, index) => (

                      <div
                        className="feature"
                        key={mission}
                      >

                        <span>
                          {String(index + 1)
                            .padStart(2, '0')}
                        </span>

                        <p>
                          {mission}
                        </p>

                      </div>

                    )
                  )}

                </div>


                {selectedExperience.highlight && (

                  <div className="experience-highlight">

                    <span>
                      Apport principal
                    </span>

                    <p>
                      {selectedExperience.highlight}
                    </p>

                  </div>

                )}


                {selectedExperience.screenshots && (

                  <>

                    <div className="experience-subtitle gallery-title">
                      Aperçu de l&apos;application
                    </div>


                    <div className="project-gallery">

                      <div className="gallery-main">

                        <img
                          src={
                            selectedExperience
                              .screenshots[0].src
                          }
                          alt={
                            selectedExperience
                              .screenshots[0].alt
                          }
                          className="clickable-image"
                          onClick={() =>
                            setSelectedImage(
                              selectedExperience
                                .screenshots![0].src
                            )
                          }
                        />


                        <div className="gallery-caption">

                          <span>01</span>

                          <div>

                            <strong>
                              {
                                selectedExperience
                                  .screenshots[0]
                                  .title
                              }
                            </strong>

                            <p>
                              {
                                selectedExperience
                                  .screenshots[0]
                                  .description
                              }
                            </p>

                          </div>

                        </div>

                      </div>


                      <div className="gallery-grid">

                        {selectedExperience.screenshots
                          .slice(1)
                          .map(
                            (screenshot, index) => (

                              <div
                                className="gallery-item"
                                key={screenshot.src}
                              >

                                <img
                                  src={screenshot.src}
                                  alt={screenshot.alt}
                                  className="clickable-image"
                                  onClick={() =>
                                    setSelectedImage(
                                      screenshot.src
                                    )
                                  }
                                />


                                <div className="gallery-caption">

                                  <span>
                                    {String(
                                      index + 2
                                    ).padStart(
                                      2,
                                      '0'
                                    )}
                                  </span>


                                  <div>

                                    <strong>
                                      {screenshot.title}
                                    </strong>

                                    <p>
                                      {screenshot.description}
                                    </p>

                                  </div>

                                </div>

                              </div>

                            )
                          )}

                      </div>

                    </div>

                  </>

                )}

              </article>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <section
        id="projects"
        className="content-section portfolio-projects-section"
      >

        <div className="section-heading">

          <span className="section-number">
            03 — Projets
          </span>

          <h2>
            Projets réalisés
          </h2>

          <p className="section-intro">
            Sélectionnez un projet pour consulter ses
            fonctionnalités, technologies et compétences
            développées.
          </p>

        </div>


        <div
          className={`master-detail-layout ${
            selectedProject
              ? 'detail-open'
              : 'detail-closed'
          }`}
        >

          <div className="master-list">

            {projects.map((project) => {

              const isActive =
                selectedProjectId === project.id

              return (

                <button
                  key={project.id}
                  type="button"
                  className={`summary-card master-card ${
                    isActive ? 'active' : ''
                  }`}
                  aria-expanded={isActive}
                  onClick={() =>
                    setSelectedProjectId(
                      isActive
                        ? null
                        : project.id
                    )
                  }
                >

                  <span className="summary-period">
                    {project.category}
                  </span>


                  <h3>
                    {project.title}
                  </h3>


                  <p className="summary-company">
                    {project.subtitle}
                  </p>


                  <p className="summary-description">
                    {project.shortDescription}
                  </p>


                  <div className="summary-technologies">

                    {project.technologies
                      .slice(0, 4)
                      .map((tech) => (

                        <span key={tech}>
                          {tech}
                        </span>

                      ))}

                  </div>


                  <span className="summary-link">

                    {isActive
                      ? 'Masquer les détails ↑'
                      : 'Voir les détails →'}

                  </span>

                </button>

              )

            })}

          </div>


          {selectedProject && (

            <div className="master-detail-column">

              <article className="portfolio-project-card detail-panel">

                <div className="portfolio-project-content">


                  <div className="detail-panel-top">

                    <span className="detail-panel-label">
                      Projet sélectionné
                    </span>

                    <button
                      type="button"
                      className="detail-close"
                      onClick={() =>
                        setSelectedProjectId(null)
                      }
                    >
                      Fermer ×
                    </button>

                  </div>


                  <div className="portfolio-project-header">

                    <div>

                      <span className="portfolio-project-category">
                        {selectedProject.category}
                      </span>

                      <h3>
                        {selectedProject.title}
                      </h3>

                      <p className="portfolio-project-subtitle">
                        {selectedProject.subtitle}
                      </p>

                    </div>


                    <div className="portfolio-project-status">
                      {selectedProject.status}
                    </div>

                  </div>


                  <p className="portfolio-project-description">
                    {selectedProject.description}
                  </p>


                  <div className="project-technologies">

                    {selectedProject.technologies.map(
                      (tech) => (

                        <span key={tech}>
                          {tech}
                        </span>

                      )
                    )}

                  </div>


                  <div className="project-detail-grid">

                    {selectedProject.details.map(
                      (detail, index) => (

                        <div
                          className="project-detail-card"
                          key={detail.title}
                        >

                          <span>
                            {String(index + 1)
                              .padStart(2, '0')}
                          </span>

                          <h4>
                            {detail.title}
                          </h4>

                          <p>
                            {detail.description}
                          </p>

                        </div>

                      )
                    )}

                  </div>


                  {selectedProject.challenges && (

                    <div className="project-challenges">

                      <span>
                        Défis techniques
                      </span>

                      <p>
                        {selectedProject.challenges}
                      </p>

                    </div>

                  )}


                  <div className="project-learning">

                    <span>
                      Compétences développées
                    </span>

                    <p>
                      {selectedProject.learning}
                    </p>

                  </div>


                  {selectedProject.video && (

                    <div className="project-video-section">

                      <div className="experience-subtitle project-video-title">
                        Démonstration du projet
                      </div>


                      <div className="project-video-card">

                        <video
                          className="project-video-player"
                          controls
                          preload="metadata"
                        >

                          <source
                            src={selectedProject.video.src}
                            type="video/mp4"
                          />

                          Votre navigateur ne prend pas en charge
                          la lecture de vidéos.

                        </video>


                        <div className="project-video-caption">

                          <strong>
                            {selectedProject.video.title}
                          </strong>

                          <p>
                            {selectedProject.video.description}
                          </p>

                        </div>

                      </div>

                    </div>

                  )}


                  {selectedProject.screenshots && (

                    <>

                      <div className="experience-subtitle gallery-title">
                        Aperçu du projet
                      </div>


                      <div className="project-gallery">

                        <div className="gallery-main">

                          <img
                            src={
                              selectedProject
                                .screenshots[0].src
                            }
                            alt={
                              selectedProject
                                .screenshots[0].alt
                            }
                            className="clickable-image"
                            onClick={() =>
                              setSelectedImage(
                                selectedProject
                                  .screenshots![0].src
                              )
                            }
                          />


                          <div className="gallery-caption">

                            <span>01</span>

                            <div>

                              <strong>
                                {
                                  selectedProject
                                    .screenshots[0]
                                    .title
                                }
                              </strong>

                              <p>
                                {
                                  selectedProject
                                    .screenshots[0]
                                    .description
                                }
                              </p>

                            </div>

                          </div>

                        </div>


                        {selectedProject.screenshots.length > 1 && (

                          <div className="gallery-grid">

                            {selectedProject.screenshots
                              .slice(1)
                              .map(
                                (
                                  screenshot,
                                  index
                                ) => (

                                  <div
                                    className="gallery-item"
                                    key={screenshot.src}
                                  >

                                    <img
                                      src={screenshot.src}
                                      alt={screenshot.alt}
                                      className="clickable-image"
                                      onClick={() =>
                                        setSelectedImage(
                                          screenshot.src
                                        )
                                      }
                                    />


                                    <div className="gallery-caption">

                                      <span>
                                        {String(
                                          index + 2
                                        ).padStart(
                                          2,
                                          '0'
                                        )}
                                      </span>


                                      <div>

                                        <strong>
                                          {
                                            screenshot.title
                                          }
                                        </strong>

                                        <p>
                                          {
                                            screenshot.description
                                          }
                                        </p>

                                      </div>

                                    </div>

                                  </div>

                                )
                              )}

                          </div>

                        )}

                      </div>

                    </>

                  )}

                </div>

              </article>

            </div>

          )}

        </div>

      </section>


      {/* =====================================================
          SKILLS
      ====================================================== */}

      <section
        id="skills"
        className="content-section skills-section"
      >

        <div className="section-heading">

          <span className="section-number">
            04 — Compétences
          </span>

          <h2>
            Technologies & expertise
          </h2>

        </div>


        <div className="skills-grid">

          <div className="skill-card">

            <h3>
              Développement Backend .NET
            </h3>

            <div className="skill-tags">
              <span>C#</span>
              <span>.NET</span>
              <span>.NET Framework</span>
              <span>ASP.NET</span>
              <span>ASP.NET Core</span>
              <span>ASP.NET MVC</span>
              <span>Entity Framework Core</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Applications Desktop
            </h3>

            <div className="skill-tags">
              <span>WPF</span>
              <span>XAML</span>
              <span>MVVM</span>
              <span>C++</span>
              <span>Qt</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Développement Frontend
            </h3>

            <div className="skill-tags">
              <span>React</span>
              <span>Angular</span>
              <span>TypeScript</span>
              <span>JavaScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Bases de données & Persistance
            </h3>

            <div className="skill-tags">
              <span>Microsoft SQL Server</span>
              <span>SQLite</span>
              <span>MySQL</span>
              <span>PostgreSQL</span>
              <span>Entity Framework Core</span>
              <span>SQL</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Architecture & Qualité Logicielle
            </h3>

            <div className="skill-tags">
              <span>MVVM</span>
              <span>MVC</span>
              <span>DDD</span>
              <span>TDD</span>
              <span>BDD</span>
              <span>Clean Code</span>
              <span>Code Review</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Sécurité Applicative
            </h3>

            <div className="skill-tags">
              <span>Authentication</span>
              <span>Authorization</span>
              <span>2FA</span>
              <span>Encryption</span>
              <span>Secure Coding</span>
              <span>Database Security</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Data, APIs & Intégration
            </h3>

            <div className="skill-tags">
              <span>Web Scraping</span>
              <span>Beautiful Soup</span>
              <span>CSV</span>
              <span>JSON</span>
              <span>Google Maps API</span>
              <span>Postman</span>
              <span>Insomnia</span>
              <span>Power BI</span>
            </div>

          </div>


          <div className="skill-card">

            <h3>
              Outils & Environnement
            </h3>

            <div className="skill-tags">
              <span>Git</span>
              <span>GitLab</span>
              <span>Visual Studio</span>
              <span>VS Code</span>
              <span>NuGet</span>
              <span>SQLiteStudio</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section
        id="education"
        className="content-section education-section"
      >

        <div className="section-heading">

          <span className="section-number">
            05 — Formation
          </span>

          <h2>
            Parcours académique
          </h2>

        </div>


        <div className="education-timeline">

          <div className="education-item">

            <div className="education-date">
              <span>
                2024 — 2026
              </span>
            </div>


            <div className="education-content">

              <div className="education-header">

                <img
                  src={asset('logos/lyon2.png')}
                  alt="Logo Université Lumière Lyon 2"
                  className="education-logo"
                />


                <div>

                  <h3>
                    Master Organisation et Protection
                    des Systèmes d&apos;Information en
                    Entreprise (OPSIE)
                  </h3>

                  <p className="education-school">
                    Université Lumière Lyon 2
                  </p>

                </div>

              </div>


              <div className="education-badges">

                <span>
                  Labellisation ANSSI
                </span>

                <span>
                  Soutenance prévue le 11 septembre 2026
                </span>

              </div>


              <p className="education-description">
                Formation orientée systèmes
                d&apos;information, cybersécurité,
                protection des SI et ingénierie
                logicielle.
              </p>

            </div>

          </div>


          <div className="education-item">

            <div className="education-date">
              <span>
                2023 — 2024
              </span>
            </div>


            <div className="education-content">

              <div className="education-header">

                <img
                  src={asset('logos/esisa.png')}
                  alt="Logo ESISA"
                  className="education-logo"
                />


                <div>

                  <h3>
                    Master 1 Ingénierie des
                    Systèmes d&apos;Information
                  </h3>

                  <p className="education-school">
                    ESISA — Fès
                  </p>

                </div>

              </div>


              <p className="education-description">
                Approfondissement des compétences
                en conception de systèmes
                d&apos;information, développement
                logiciel et architecture applicative.
              </p>

            </div>

          </div>


          <div className="education-item">

            <div className="education-date">
              <span>
                2020 — 2023
              </span>
            </div>


            <div className="education-content">

              <div className="education-header">

                <img
                  src={asset('logos/esisa.png')}
                  alt="Logo ESISA"
                  className="education-logo"
                />


                <div>

                  <h3>
                    Licence Ingénierie Logicielle
                  </h3>

                  <p className="education-school">
                    ESISA — Fès
                  </p>

                </div>

              </div>


              <p className="education-description">
                Formation en développement logiciel,
                programmation, bases de données,
                conception et développement
                d&apos;applications web.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTACT
      ====================================================== */}

      <section
        id="contact"
        className="content-section contact-section"
      >

        <div className="section-heading">

          <span className="section-number">
            06 — Contact
          </span>

          <h2>
            Restons en contact
          </h2>

        </div>


        <div className="contact-container">

          <div className="contact-intro">

            <p>
              Je suis actuellement ouvert aux
              opportunités en développement logiciel,
              notamment autour de C#/.NET, ainsi
              qu&apos;aux environnements où le
              développement et la sécurité peuvent
              se compléter.
            </p>

            <p>
              N&apos;hésitez pas à me contacter pour
              échanger autour d&apos;une opportunité
              ou de mon parcours.
            </p>

          </div>


          <div className="contact-links">

            <a
              href="mailto:Rhalem.ahmed3@gmail.com"
              className="contact-card"
            >

              <span>Email</span>

              <strong>
                Rhalem.ahmed3@gmail.com
              </strong>

            </a>


            <a
              href="tel:+33745957291"
              className="contact-card"
            >

              <span>
                Numéro Téléphone
              </span>

              <strong>
                +33 7 45 95 72 91
              </strong>

            </a>


            <a
              href="https://linkedin.com/in/ahmed-rhalem"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >

              <span>
                LinkedIn
              </span>

              <strong>
                Ahmed Rhalem
              </strong>

            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          LIGHTBOX
      ====================================================== */}

      {selectedImage && (

        <div
          className="image-lightbox"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            type="button"
            className="lightbox-close"
            onClick={() =>
              setSelectedImage(null)
            }
            aria-label="Fermer l'image"
          >
            ×
          </button>


          <img
            src={selectedImage}
            alt="Aperçu agrandi"
            className="lightbox-image"
            onClick={(event) =>
              event.stopPropagation()
            }
          />

        </div>

      )}

    </div>
  )
}

export default App
import type { SiteContent } from "./types";

const GITHUB_URL = "https://github.com/AmineHamane";

export const site: SiteContent = {
  identity: {
    name: "Amine Hamane",
    title: {
      en: "Python Developer · Data Science · Machine Learning · Generative AI",
      fr: "Développeur Python · Data Science · Machine Learning · IA générative",
    },
    location: { en: "Brossard, QC · Canada", fr: "Brossard, QC · Canada" },
    phone: "514-464-8278",
    email: "aminemtlhm@gmail.com",
    github: "AmineHamane",
    githubUrl: GITHUB_URL,
    languages: [
      { en: "French — native", fr: "Français — natif" },
      { en: "English — professional", fr: "Anglais — professionnel" },
    ],
  },

  hero: {
    eyebrow: {
      en: "Python · ML · Data · Generative AI",
      fr: "Python · ML · Data · IA générative",
    },
    headline: {
      en: "I turn data and machine learning into systems that actually run.",
      fr: "Je transforme la donnée et le machine learning en systèmes qui tournent vraiment.",
    },
    subhead: {
      en: "Python developer with 5+ years in IT — building end-to-end ML, data pipelines, and AI-powered backends, from deep-learning models to live, API-integrated applications.",
      fr: "Développeur Python avec plus de 5 ans en TI — je conçois du ML de bout en bout, des pipelines de données et des backends propulsés par l'IA, des modèles de deep learning aux applications connectées en temps réel.",
    },
    rotatingRoles: [
      { en: "Python Developer", fr: "Développeur Python" },
      { en: "Full-Stack Developer", fr: "Développeur Full-Stack" },
      { en: "Machine Learning Engineer", fr: "Ingénieur Machine Learning" },
      { en: "Data Scientist", fr: "Data Scientist" },
      { en: "Generative AI Builder", fr: "Créateur d'IA générative" },
      { en: "Data Engineer", fr: "Ingénieur de données" },
    ],
    ctaPrimary: { en: "View Projects", fr: "Voir les projets" },
    ctaSecondary: { en: "Get in Touch", fr: "Me contacter" },
  },

  about: {
    heading: { en: "From notebook to production", fr: "Du notebook à la production" },
    body: {
        en: "I'm a Python developer who builds complete systems end-to-end — data pipelines, Python and API services, and the web and mobile interfaces on top of them with React/TypeScript and Expo/React Native — along with the automation that keeps everything running in production. That delivery focus is backed by 5+ years in IT, including an IT Operations foundation covering monitoring, log analysis, testing, security basics, documentation and deployment. My flagship freelance project is an AI trading prototype combining data pipelines, anomaly detection and deep learning, and I'm currently shipping JD Market, a live full-stack SaaS. I work fluently in French and professional English across Québec teams.",
        fr: "Je suis un développeur Python qui construit des systèmes complets de bout en bout — pipelines de données, services Python et API, et les interfaces web et mobiles qui s'appuient dessus avec React/TypeScript et Expo/React Native — ainsi que l'automatisation qui maintient le tout en production. Cette orientation livraison repose sur plus de 5 ans en TI, dont un socle en Opérations TI couvrant la surveillance, l'analyse de journaux, les tests, les bases de la sécurité, la documentation et le déploiement. Mon projet phare en freelance est un prototype de trading IA mêlant pipelines de données, détection d'anomalies et apprentissage profond, et je livre actuellement JD Market, un SaaS full-stack en production. Je travaille couramment en français et en anglais professionnel au sein d'équipes québécoises."
      },
  },

  stats: [
    { label: { en: "Years in IT", fr: "Années en TI" }, value: "5+" },
    { label: { en: "Projects", fr: "Projets" }, value: "6" },
    { label: { en: "Core skill areas", fr: "Domaines clés" }, value: "3" },
    { label: { en: "Certifications", fr: "Certifications" }, value: "4" },
  ],

  skillGroups: [
    {
      name: {
        en: "Data Science & ML",
        fr: "Science des données & ML"
      },
      icon: "brain",
      blurb: {
        en: "Building reliable models from messy real-world data — from feature engineering and validation to classification, time-series and NLP, including the anomaly-detection and deep-learning work behind my AI trading prototype.",
        fr: "Construire des modèles fiables à partir de données réelles imparfaites — de l'ingénierie de variables à la validation, jusqu'à la classification, les séries temporelles et le TAL, incluant la détection d'anomalies et l'apprentissage profond derrière mon prototype de trading IA."
      },
      skills: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-Learn",
        "Feature engineering",
        "Model validation",
        "Classification",
        "Regression",
        "Clustering",
        "Time-series",
        "NLP",
        "Embeddings",
        "Anomaly detection / Isolation Forest",
        "PyTorch",
        "PyTorch Lightning"
      ]
    },
    {
      name: {
        en: "Web, Mobile & AI Services",
        fr: "Web, Mobile & Services IA"
      },
      icon: "server",
      blurb: {
        en: "Shipping complete products end-to-end: Python APIs and async workers on the backend, React/TypeScript and Expo/React Native on the front, wired to LLM and AI services for features users actually touch.",
        fr: "Livrer des produits complets de bout en bout : APIs Python et workers asynchrones côté serveur, React/TypeScript et Expo/React Native côté client, branchés à des services LLM et IA pour des fonctionnalités réellement utilisées."
      },
      skills: [
        "FastAPI",
        "Flask",
        "Django",
        "REST APIs",
        "React",
        "TypeScript",
        "Vite",
        "Expo / React Native",
        "Async workers",
        "LLM / AI services",
        "OpenAI",
        "Claude",
        "Gemini",
        "Prompt engineering",
        "Streamlit"
      ]
    },
    {
      name: {
        en: "Data, DevOps & Systems",
        fr: "Données, DevOps & Systèmes"
      },
      icon: "database",
      blurb: {
        en: "Moving data and code into production safely: SQL and warehouses, tested and containerized services, infrastructure-as-code, and the operations background to keep them running on Linux, Windows Server and the cloud.",
        fr: "Amener données et code en production de façon sûre : SQL et entrepôts de données, services testés et conteneurisés, infrastructure-as-code, et le bagage opérationnel pour les maintenir sur Linux, Windows Server et le cloud."
      },
      skills: [
        "SQL",
        "Stored procedures",
        "PostgreSQL",
        "Snowflake / BigQuery",
        "PySpark",
        "Git",
        "pytest",
        "Docker",
        "Terraform",
        "Linux / Unix",
        "Windows Server",
        "Azure / AWS"
      ]
    }
  ],

  projects: [
    {
      id: "forex-algo-trader",
      name: "AI Trading System",
      category: "flagship",
      status: "prototype",
      featured: true,
      accent: "cyan",
      period: "Oct–Nov 2025",
      role: {
        en: "Python Developer / ML Engineer (Freelance)",
        fr: "Développeur Python / ML Engineer (Freelance)"
      },
      tagline: {
        en: "A decision-support prototype that turns a private trading client's daily market checks into one explainable Buy/Sell/Hold dashboard.",
        fr: "Un prototype d'aide à la décision qui transforme les vérifications de marché quotidiennes d'un client privé en un tableau de bord Acheter/Vendre/Conserver explicable."
      },
      summary: {
        en: "Freelance engagement for a private finance/trading client. I built an end-to-end prototype that automates the client's daily routine of manual market checks for EUR/USD: it collects historical and live candles via the OANDA API, engineers technical-indicator and pattern features, runs a Temporal Fusion Transformer (PyTorch Lightning) to forecast the next-bar move, and fuses that forecast with per-indicator votes into a single, transparent signal surfaced in a Streamlit dashboard. It is an advisory tool — the model powers an explainable dashboard to help the client structure decisions; it does not place live trades autonomously.",
        fr: "Mandat freelance pour un client privé en finance/trading. J'ai construit un prototype de bout en bout qui automatise la routine quotidienne du client de vérifications manuelles de marché sur l'EUR/USD : il collecte des chandelles historiques et en temps réel via l'API OANDA, calcule des features d'indicateurs techniques et de patterns, exécute un Temporal Fusion Transformer (PyTorch Lightning) pour prévoir le prochain mouvement, puis fusionne cette prévision avec des votes par indicateur en un signal unique et transparent affiché dans un tableau de bord Streamlit. C'est un outil d'aide à la décision — le modèle alimente un tableau de bord explicable pour aider le client à structurer ses décisions ; il ne place pas de transactions de façon autonome."
      },
      problem: {
        en: "The client was running their EUR/USD trading process by hand every day: pulling candles, eyeballing indicators across timeframes, weighing candlestick patterns, and checking session liquidity and news windows before deciding Buy, Sell, or Hold. The process was slow, hard to reproduce, and gave no consolidated, defensible rationale behind a given call.",
        fr: "Le client menait son processus de trading EUR/USD à la main chaque jour : extraire les chandelles, examiner les indicateurs sur plusieurs horizons, juger les patterns en chandeliers, et vérifier la liquidité de session et les fenêtres de nouvelles avant de décider Acheter, Vendre ou Conserver. Le processus était lent, difficile à reproduire et ne fournissait aucune justification consolidée et défendable derrière une décision donnée."
      },
      approach: {
        en: "I designed the system as a decision-support pipeline rather than an autopilot. Data collection and feature engineering were made reproducible in pandas/NumPy; a Temporal Fusion Transformer was trained to predict the next-bar log-return; and an explainable decision engine fuses the model prediction with a per-indicator Buy/Sell/Hold confidence table and separately scored candlestick patterns into one capped global confidence. Every output is interpretable — the client can see exactly which indicators and patterns drove the signal, plus session-quality and news-window context, instead of a black-box number.",
        fr: "J'ai conçu le système comme un pipeline d'aide à la décision plutôt qu'un pilote automatique. La collecte de données et le feature engineering ont été rendus reproductibles en pandas/NumPy ; un Temporal Fusion Transformer a été entraîné à prévoir le log-rendement de la prochaine barre ; et un moteur de décision explicable fusionne la prédiction du modèle avec une table de confiance Acheter/Vendre/Conserver par indicateur et des patterns en chandeliers notés séparément en une confiance globale plafonnée. Chaque sortie est interprétable — le client voit exactement quels indicateurs et patterns ont produit le signal, avec le contexte de qualité de session et de fenêtres de nouvelles, au lieu d'un score boîte noire."
      },
      architecture: {
        en: "A modular Python codebase: an OANDA REST v3 wrapper for candles and pricing; an infrastructure layer for bulk paged historical collection; vectorized pandas technical indicators (Bollinger, ATR, RSI, MACD, EMA) and candlestick-pattern detection; a TFT inference core that loads a PyTorch Lightning checkpoint, builds a one-step dataset and predicts; an AI decision engine that fuses model output with indicator and pattern votes; and a Streamlit dashboard with Plotly charts, trading-session coloring, and economic-news awareness. Several architectures (TFT at H1/H4/M5, Transformer, ConvLSTM, ConvBiLSTM, CNN) were explored during research.",
        fr: "Un code Python modulaire : un wrapper OANDA REST v3 pour les chandelles et les prix ; une couche d'infrastructure pour la collecte historique paginée en masse ; des indicateurs techniques pandas vectorisés (Bollinger, ATR, RSI, MACD, EMA) et la détection de patterns en chandeliers ; un cœur d'inférence TFT qui charge un checkpoint PyTorch Lightning, construit un jeu de données à un pas et prédit ; un moteur de décision IA qui fusionne la sortie du modèle avec les votes d'indicateurs et de patterns ; et un tableau de bord Streamlit avec graphiques Plotly, coloration des sessions de trading et prise en compte des nouvelles économiques. Plusieurs architectures (TFT en H1/H4/M5, Transformer, ConvLSTM, ConvBiLSTM, CNN) ont été explorées durant la recherche."
      },
      outcome: {
        en: "Delivered a working prototype that consolidates the client's manual daily checks into a single live dashboard, with an explainable signal the client can audit indicator by indicator. The model produces an advisory Buy/Sell/Hold view with confidence; it runs against an OANDA practice account and does not execute live trades on its own. Reported model checkpoint numbers are validation losses, not profitability — the prototype does not include a profitability backtest of the signal.",
        fr: "Livré un prototype fonctionnel qui consolide les vérifications quotidiennes manuelles du client en un seul tableau de bord en direct, avec un signal explicable auditable indicateur par indicateur. Le modèle produit une vue consultative Acheter/Vendre/Conserver avec confiance ; il fonctionne sur un compte OANDA practice et n'exécute pas de transactions de lui-même. Les valeurs de checkpoint rapportées sont des pertes de validation, pas de la rentabilité — le prototype n'inclut pas de backtest de rentabilité du signal."
      },
      recruiterPitch: {
        en: "A real freelance engagement showing I can scope a problem with a paying client and ship an end-to-end ML system: data engineering, deep-learning forecasting with a Temporal Fusion Transformer, an explainable decision layer, and a clean Streamlit interface — all built with honest framing as decision support rather than overclaimed automated profits.",
        fr: "Un véritable mandat freelance montrant que je peux cadrer un problème avec un client payant et livrer un système ML de bout en bout : ingénierie de données, prévision par apprentissage profond avec un Temporal Fusion Transformer, une couche de décision explicable et une interface Streamlit soignée — le tout présenté honnêtement comme une aide à la décision plutôt qu'une promesse de profits automatisés."
      },
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "PyTorch",
        "PyTorch Lightning",
        "Temporal Fusion Transformer",
        "pytorch-forecasting",
        "Streamlit",
        "Plotly",
        "OANDA API"
      ],
      skillsShown: {
        en: [
          "Client scoping and freelance delivery",
          "End-to-end ML pipeline design",
          "Time-series forecasting (deep learning)",
          "Feature engineering for financial data",
          "Explainable / interpretable ML",
          "Data dashboards and visualization",
          "REST API integration",
          "Honest scoping and communication"
        ],
        fr: [
          "Cadrage client et livraison en freelance",
          "Conception de pipeline ML de bout en bout",
          "Prévision de séries temporelles (apprentissage profond)",
          "Feature engineering pour données financières",
          "ML explicable / interprétable",
          "Tableaux de bord et visualisation de données",
          "Intégration d'API REST",
          "Cadrage et communication honnêtes"
        ]
      },
      features: {
        en: [
          "Automated collection of historical and live EUR/USD candles via the OANDA API",
          "Vectorized technical indicators (Bollinger, ATR, RSI, MACD, EMA) and candlestick-pattern detection",
          "Temporal Fusion Transformer forecasting the next-bar move",
          "Explainable decision engine fusing model prediction with per-indicator Buy/Sell/Hold votes",
          "Live Streamlit dashboard with Plotly charts, session coloring, and news-window awareness",
          "Configurable thresholds, encoder length, and timeframe from the dashboard sidebar"
        ],
        fr: [
          "Collecte automatisée de chandelles EUR/USD historiques et en direct via l'API OANDA",
          "Indicateurs techniques vectorisés (Bollinger, ATR, RSI, MACD, EMA) et détection de patterns en chandeliers",
          "Temporal Fusion Transformer prévoyant le prochain mouvement de barre",
          "Moteur de décision explicable fusionnant la prédiction du modèle avec des votes Acheter/Vendre/Conserver par indicateur",
          "Tableau de bord Streamlit en direct avec graphiques Plotly, coloration de session et prise en compte des fenêtres de nouvelles",
          "Seuils, longueur d'encodeur et horizon configurables depuis la barre latérale du tableau de bord"
        ]
      },
      highlights: {
        en: [
          "Explainable by design: a transparent confidence table where each indicator and pattern contributes its own vote",
          "Decision-support framing — the model advises, it does not autonomously place live trades",
          "Built and delivered for a real private finance/trading client as a freelance engagement",
          "Explored multiple architectures (TFT at H1/H4/M5, Transformer, ConvLSTM, ConvBiLSTM, CNN)"
        ],
        fr: [
          "Explicable par conception : une table de confiance transparente où chaque indicateur et pattern apporte son propre vote",
          "Cadrage en aide à la décision — le modèle conseille, il ne place pas de transactions de façon autonome",
          "Construit et livré pour un véritable client privé en finance/trading dans le cadre d'un mandat freelance",
          "Exploration de plusieurs architectures (TFT en H1/H4/M5, Transformer, ConvLSTM, ConvBiLSTM, CNN)"
        ]
      },
      metrics: [],
      pipeline: [
        {
          label: {
            en: "Data Collection",
            fr: "Collecte de données"
          },
          desc: {
            en: "Pull historical and live EUR/USD candles across timeframes via the OANDA REST API, with bulk paged collection for several years of history.",
            fr: "Récupérer des chandelles EUR/USD historiques et en direct sur plusieurs horizons via l'API REST OANDA, avec une collecte paginée en masse pour plusieurs années d'historique."
          }
        },
        {
          label: {
            en: "Feature Engineering",
            fr: "Feature Engineering"
          },
          desc: {
            en: "Compute vectorized technical indicators (Bollinger, ATR, RSI, MACD, EMA), EMA-stack trend, candlestick patterns, and time features in pandas/NumPy.",
            fr: "Calculer des indicateurs techniques vectorisés (Bollinger, ATR, RSI, MACD, EMA), la tendance de la pile d'EMA, les patterns en chandeliers et des features temporelles en pandas/NumPy."
          }
        },
        {
          label: {
            en: "TFT Model",
            fr: "Modèle TFT"
          },
          desc: {
            en: "Run a Temporal Fusion Transformer (PyTorch Lightning) to forecast the next-bar log-return; checkpoint numbers are validation losses, not profitability.",
            fr: "Exécuter un Temporal Fusion Transformer (PyTorch Lightning) pour prévoir le log-rendement de la prochaine barre ; les valeurs de checkpoint sont des pertes de validation, pas de la rentabilité."
          }
        },
        {
          label: {
            en: "Decision Engine (explainable signals)",
            fr: "Moteur de décision (signaux explicables)"
          },
          desc: {
            en: "Fuse the model prediction with a per-indicator Buy/Sell/Hold confidence table and separately scored patterns into one capped, interpretable global signal.",
            fr: "Fusionner la prédiction du modèle avec une table de confiance Acheter/Vendre/Conserver par indicateur et des patterns notés séparément en un signal global plafonné et interprétable."
          }
        },
        {
          label: {
            en: "Risk & Execution context",
            fr: "Contexte de risque et d'exécution"
          },
          desc: {
            en: "Add trading-session quality coloring and economic-news windows as context so the client weighs signals appropriately — advisory only, no autonomous live trading.",
            fr: "Ajouter la coloration de qualité des sessions de trading et les fenêtres de nouvelles économiques comme contexte pour que le client pondère les signaux correctement — consultatif uniquement, sans trading autonome en direct."
          }
        },
        {
          label: {
            en: "Live Dashboard",
            fr: "Tableau de bord en direct"
          },
          desc: {
            en: "Surface the signal, confidence, indicator breakdown, patterns, and Plotly price chart in a Streamlit dashboard the client uses for daily decisions.",
            fr: "Afficher le signal, la confiance, le détail des indicateurs, les patterns et le graphique de prix Plotly dans un tableau de bord Streamlit que le client utilise pour ses décisions quotidiennes."
          }
        }
      ],
      repoPath: "Forex_algo/code",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AmineHamane/forex-ai-trading",
          kind: "github"
        }
      ]
    },

    {
      id: "jd-market-v2",
      name: "JD Market v2",
      category: "fullstack",
      status: "production",
      featured: true,
      accent: "purple",
      period: "2025 — Present",
      role: {
        en: "Full-Stack Python Developer · Web & Mobile",
        fr: "Développeur full-stack Python · Web & Mobile"
      },
      tagline: {
        en: "A live marketplace-monitoring SaaS that scores new listings with AI and alerts you in seconds — so you reach the seller first.",
        fr: "Un SaaS de veille de marketplace en production qui évalue les nouvelles annonces avec l'IA et vous alerte en quelques secondes — pour contacter le vendeur en premier."
      },
      summary: {
        en: "JD Market is a solo-built, production SaaS (live at jdmarket.cc) that continuously watches Facebook Marketplace, scores each new listing with AI against the user's rules, and pushes instant alerts (e.g. Telegram) so the user can act before anyone else. It spans a Django API gateway, FastAPI services, a scheduler/worker for orchestration, scraping and storage helpers, a local desktop agent, a React/TypeScript web app, and an Expo/React Native mobile app — all containerized and shipped through Docker Compose and GitHub Actions.",
        fr: "JD Market est un SaaS en production conçu en solo (en ligne sur jdmarket.cc) qui surveille en continu Facebook Marketplace, évalue chaque nouvelle annonce avec l'IA selon les règles de l'utilisateur et envoie des alertes instantanées (ex. Telegram) afin d'agir avant tout le monde. Il réunit une passerelle d'API Django, des services FastAPI, un scheduler/worker d'orchestration, des utilitaires de scraping et de stockage, un agent local de bureau, une application web React/TypeScript et une application mobile Expo/React Native — le tout conteneurisé et déployé via Docker Compose et GitHub Actions."
      },
      problem: {
        en: "On fast-moving marketplaces, the best deals disappear within minutes — by the time a buyer notices a relevant listing and evaluates it, the seller is already gone. Manually refreshing search pages is slow, noisy, and impossible to keep up around the clock.",
        fr: "Sur des marketplaces qui bougent vite, les meilleures aubaines disparaissent en quelques minutes — le temps qu'un acheteur repère une annonce pertinente et l'évalue, le vendeur a déjà répondu à quelqu'un d'autre. Rafraîchir manuellement les pages de recherche est lent, bruyant et impossible à tenir en continu."
      },
      approach: {
        en: "I designed a research-and-monitoring platform around a clear separation of concerns: a Django gateway fronts authentication and the public API, FastAPI services handle the data and scoring workloads, and a scheduler/worker drives periodic ingestion. New listings are pulled in via scraping/storage helpers (with a local desktop agent for sources that need a real session), scored by AI, and matched against each user's saved rules. When a listing clears the threshold, the user gets an instant push notification. I built the React/TypeScript web client and contributed to the Expo/React Native mobile app so users get the same search, saved rules, alerts, and notifications on web and phone.",
        fr: "J'ai conçu une plateforme de veille autour d'une séparation claire des responsabilités : une passerelle Django gère l'authentification et l'API publique, des services FastAPI portent les charges de données et de scoring, et un scheduler/worker pilote l'ingestion périodique. Les nouvelles annonces sont récupérées via des utilitaires de scraping/stockage (avec un agent local de bureau pour les sources nécessitant une vraie session), évaluées par l'IA, puis confrontées aux règles enregistrées de chaque utilisateur. Lorsqu'une annonce dépasse le seuil, l'utilisateur reçoit une notification instantanée. J'ai développé le client web React/TypeScript et contribué à l'application mobile Expo/React Native pour offrir la même recherche, les mêmes règles, alertes et notifications sur le web et le téléphone."
      },
      architecture: {
        en: "Service-oriented backend: a Django API gateway, FastAPI data and scoring services, and a scheduler/worker for job orchestration, backed by PostgreSQL for persistence and Redis for queues and caching. Scraping and storage helpers feed the pipeline, and a local/desktop agent extends ingestion to session-bound sources. The web frontend is React + TypeScript built with Vite; the mobile app is Expo/React Native. Everything runs under Docker Compose with health checks and structured logs, tested with pytest, and deployed through GitHub Actions with deployment docs.",
        fr: "Backend orienté services : une passerelle d'API Django, des services FastAPI de données et de scoring, et un scheduler/worker pour l'orchestration des tâches, le tout appuyé par PostgreSQL pour la persistance et Redis pour les files et le cache. Des utilitaires de scraping et de stockage alimentent le pipeline, et un agent local/de bureau étend l'ingestion aux sources liées à une session. Le frontend web est React + TypeScript bâti avec Vite ; l'application mobile est Expo/React Native. Tout s'exécute sous Docker Compose avec health checks et logs structurés, est testé avec pytest et déployé via GitHub Actions, avec une documentation de déploiement."
      },
      outcome: {
        en: "JD Market is live in production at jdmarket.cc as the candidate's own product: a working end-to-end pipeline from continuous ingestion to AI scoring to second-scale alerts, delivered across both a web app and a mobile app. As a solo build it covers the full lifecycle — architecture, backend services, two frontends, containerization, CI, and deployment.",
        fr: "JD Market est en production sur jdmarket.cc en tant que produit du candidat : un pipeline complet et fonctionnel, de l'ingestion continue au scoring par IA jusqu'aux alertes à l'échelle de la seconde, livré à la fois sur une application web et une application mobile. En tant que projet solo, il couvre tout le cycle de vie — architecture, services backend, deux frontends, conteneurisation, CI et déploiement."
      },
      recruiterPitch: {
        en: "A solo developer who shipped and operates a real, live full-stack SaaS end to end: Python backend (Django + FastAPI) with job orchestration on PostgreSQL/Redis, a React/TypeScript web app, an Expo/React Native mobile app, AI-based scoring, and a Dockerized deployment with CI. JD Market shows ownership across the entire stack — from architecture and data pipelines to two production clients and DevOps.",
        fr: "Un développeur solo qui a livré et opère un véritable SaaS full-stack en production, de bout en bout : backend Python (Django + FastAPI) avec orchestration de tâches sur PostgreSQL/Redis, application web React/TypeScript, application mobile Expo/React Native, scoring par IA et déploiement conteneurisé avec CI. JD Market démontre une appropriation de toute la stack — de l'architecture et des pipelines de données jusqu'à deux clients en production et au DevOps."
      },
      techStack: [
        "Python",
        "Django",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "Docker",
        "Docker Compose",
        "nginx",
        "React",
        "TypeScript",
        "Vite",
        "Expo",
        "React Native",
        "pytest",
        "GitHub Actions"
      ],
      skillsShown: {
        en: [
          "Full-stack product ownership (web + mobile)",
          "Service-oriented backend design (Django + FastAPI)",
          "Job orchestration with scheduler/worker, PostgreSQL and Redis",
          "AI-based scoring and rule matching",
          "Real-time alerts and push notifications",
          "Scraping and data ingestion pipelines",
          "React/TypeScript and Expo/React Native development",
          "Containerization, health checks, and structured logging",
          "Testing with pytest and CI/CD with GitHub Actions",
          "Deployment with Docker Compose, nginx, and deployment docs"
        ],
        fr: [
          "Appropriation produit full-stack (web + mobile)",
          "Conception backend orientée services (Django + FastAPI)",
          "Orchestration de tâches avec scheduler/worker, PostgreSQL et Redis",
          "Scoring par IA et correspondance de règles",
          "Alertes en temps réel et notifications push",
          "Pipelines de scraping et d'ingestion de données",
          "Développement React/TypeScript et Expo/React Native",
          "Conteneurisation, health checks et journalisation structurée",
          "Tests avec pytest et CI/CD avec GitHub Actions",
          "Déploiement avec Docker Compose, nginx et documentation de déploiement"
        ]
      },
      features: {
        en: [
          "Continuous monitoring of new Facebook Marketplace listings",
          "AI scoring of each listing against user-defined rules",
          "Saved search rules with configurable criteria",
          "Instant alerts via channels such as Telegram",
          "Web app and mobile app with shared search, rules, alerts, and notifications",
          "Local/desktop agent for session-bound ingestion sources"
        ],
        fr: [
          "Surveillance continue des nouvelles annonces Facebook Marketplace",
          "Scoring par IA de chaque annonce selon des règles définies par l'utilisateur",
          "Règles de recherche enregistrées avec critères configurables",
          "Alertes instantanées via des canaux comme Telegram",
          "Application web et mobile partageant recherche, règles, alertes et notifications",
          "Agent local/de bureau pour les sources d'ingestion liées à une session"
        ]
      },
      highlights: {
        en: [
          "Live, solo-built SaaS running in production at jdmarket.cc",
          "End-to-end pipeline: ingest → AI score → rule match → second-scale alert",
          "Two production clients: React/TypeScript web and Expo/React Native mobile",
          "Service-oriented backend (Django gateway + FastAPI services) with scheduler/worker",
          "Dockerized with health checks, structured logs, pytest, and GitHub Actions CI"
        ],
        fr: [
          "SaaS en production, conçu en solo, en ligne sur jdmarket.cc",
          "Pipeline de bout en bout : ingestion → scoring IA → correspondance de règles → alerte en quelques secondes",
          "Deux clients en production : web React/TypeScript et mobile Expo/React Native",
          "Backend orienté services (passerelle Django + services FastAPI) avec scheduler/worker",
          "Conteneurisé avec health checks, logs structurés, pytest et CI GitHub Actions"
        ]
      },
      metrics: [],
      pipeline: [
        {
          label: {
            en: "Scrape & ingest",
            fr: "Scraping et ingestion"
          },
          desc: {
            en: "The scheduler/worker periodically pulls new Marketplace listings through scraping and storage helpers, with a local/desktop agent handling session-bound sources.",
            fr: "Le scheduler/worker récupère périodiquement les nouvelles annonces de Marketplace via les utilitaires de scraping et de stockage, un agent local/de bureau gérant les sources liées à une session."
          }
        },
        {
          label: {
            en: "AI scoring",
            fr: "Scoring par IA"
          },
          desc: {
            en: "Each new listing is scored by AI to estimate how well it matches what the user is looking for.",
            fr: "Chaque nouvelle annonce est évaluée par l'IA pour estimer son adéquation avec ce que recherche l'utilisateur."
          }
        },
        {
          label: {
            en: "Rules & alerts",
            fr: "Règles et alertes"
          },
          desc: {
            en: "Scores are matched against each user's saved rules; listings that clear the threshold trigger instant alerts (e.g. Telegram) within seconds.",
            fr: "Les scores sont confrontés aux règles enregistrées de chaque utilisateur ; les annonces qui dépassent le seuil déclenchent des alertes instantanées (ex. Telegram) en quelques secondes."
          }
        },
        {
          label: {
            en: "Web & mobile",
            fr: "Web et mobile"
          },
          desc: {
            en: "Users manage search, saved rules, alerts, and notifications through a React/TypeScript web app and an Expo/React Native mobile app.",
            fr: "Les utilisateurs gèrent la recherche, les règles enregistrées, les alertes et les notifications via une application web React/TypeScript et une application mobile Expo/React Native."
          }
        },
        {
          label: {
            en: "Backend services",
            fr: "Services backend"
          },
          desc: {
            en: "A Django API gateway fronts FastAPI data and scoring services, backed by PostgreSQL and Redis for persistence, queues, and caching.",
            fr: "Une passerelle d'API Django pilote les services de données et de scoring FastAPI, appuyés par PostgreSQL et Redis pour la persistance, les files et le cache."
          }
        },
        {
          label: {
            en: "Deploy & CI",
            fr: "Déploiement et CI"
          },
          desc: {
            en: "Everything runs under Docker Compose with nginx, health checks, and structured logs, tested with pytest and shipped through GitHub Actions.",
            fr: "Tout s'exécute sous Docker Compose avec nginx, health checks et logs structurés, testé avec pytest et déployé via GitHub Actions."
          }
        }
      ],
      repoPath: "jd-market",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/AmineHamane/jd-market",
          kind: "github"
        },
        {
          label: "Live site",
          href: "https://jdmarket.cc",
          kind: "demo"
        }
      ]
    },

    {
      id: "amazon-nlp-reviews",
      name: "Amazon NLP Reviews",
      category: "nlp",
      status: "prototype",
      featured: true,
      accent: "pink",
      period: "2023",
      role: {
        en: "Python Developer / NLP",
        fr: "Développeur Python / NLP"
      },
      tagline: {
        en: "An NLP-driven product recommender built on Amazon review sentiment.",
        fr: "Un recommandeur de produits piloté par NLP, basé sur le sentiment des avis Amazon.",
      },
      summary: {
        en: "A Flask and SQLAlchemy web application that recommends Amazon products using NLP over customer reviews. It implements an end-to-end pipeline covering data collection, cleaning, and language filtering with NLTK, sentiment analysis using both VADER and a pretrained RoBERTa transformer, and a recommendation layer that surfaces products based on the resulting sentiment signals.",
        fr: "Une application web Flask et SQLAlchemy qui recommande des produits Amazon via le NLP appliqué aux avis clients. Elle met en œuvre un pipeline de bout en bout : collecte, nettoyage et filtrage par langue avec NLTK, analyse de sentiment avec VADER et un transformer RoBERTa pré-entraîné, et une couche de recommandation qui met en avant les produits selon les signaux de sentiment obtenus.",
      },
      problem: {
        en: "Raw Amazon reviews are noisy, multilingual, and unstructured, making it hard to turn customer opinion into a reliable signal for recommending products.",
        fr: "Les avis Amazon bruts sont bruités, multilingues et non structurés, ce qui rend difficile la transformation de l'opinion client en un signal fiable pour recommander des produits.",
      },
      approach: {
        en: "Built a full NLP pipeline: collected review data, cleaned and normalized it, and filtered by language using NLTK. Applied VADER for rule-based sentiment scoring alongside a pretrained RoBERTa transformer for deeper classification, then used the combined signals to drive recommendations. Wrapped the system in a Flask web app with SQLAlchemy persistence.",
        fr: "Construction d'un pipeline NLP complet : collecte des avis, nettoyage et normalisation, filtrage par langue avec NLTK. Application de VADER pour un score de sentiment à base de règles, en parallèle d'un transformer RoBERTa pré-entraîné pour une classification plus fine, puis utilisation des signaux combinés pour piloter les recommandations. Le tout encapsulé dans une application Flask avec persistance SQLAlchemy.",
      },
      architecture: {
        en: "A Flask web layer with SQLAlchemy-backed persistence sits on top of an NLP pipeline: data collection feeds cleaning and NLTK language filtering, which feeds dual sentiment analysis (VADER and pretrained RoBERTa), whose outputs drive the recommendation logic.",
        fr: "Une couche web Flask avec persistance SQLAlchemy repose sur un pipeline NLP : la collecte alimente le nettoyage et le filtrage de langue NLTK, qui alimentent une double analyse de sentiment (VADER et RoBERTa pré-entraîné), dont les sorties pilotent la logique de recommandation.",
      },
      outcome: {
        en: "A working web application that ingests and processes Amazon reviews, scores sentiment with both lexicon-based and transformer-based methods, and recommends products based on aggregated sentiment.",
        fr: "Une application web fonctionnelle qui ingère et traite les avis Amazon, évalue le sentiment par méthodes lexicales et par transformer, et recommande des produits selon le sentiment agrégé.",
      },
      recruiterPitch: {
        en: "Shows hands-on NLP skills end to end — a sentiment-driven recommendation system integrating both classic (VADER) and modern transformer (RoBERTa) techniques inside a real web application.",
        fr: "Montre des compétences NLP concrètes de bout en bout — un système de recommandation piloté par le sentiment intégrant techniques classiques (VADER) et modernes (RoBERTa) dans une vraie application web.",
      },
      pipeline: [
        {
          label: { en: "Collect", fr: "Collecte" },
          desc: { en: "Amazon review data", fr: "Données d'avis Amazon" },
        },
        {
          label: { en: "Clean & Filter", fr: "Nettoyage & Filtrage" },
          desc: { en: "NLTK language filtering", fr: "Filtrage de langue NLTK" },
        },
        {
          label: { en: "Sentiment", fr: "Sentiment" },
          desc: { en: "VADER + pretrained RoBERTa", fr: "VADER + RoBERTa pré-entraîné" },
        },
        {
          label: { en: "Recommend", fr: "Recommandation" },
          desc: { en: "Sentiment-driven ranking", fr: "Classement piloté par le sentiment" },
        },
        {
          label: { en: "Serve", fr: "Service" },
          desc: { en: "Flask + SQLAlchemy app", fr: "Application Flask + SQLAlchemy" },
        },
      ],
      techStack: ["Python", "Flask", "SQLAlchemy", "NLTK", "VADER", "RoBERTa", "Hugging Face Transformers"],
      skillsShown: {
        en: ["NLP pipeline development", "Sentiment analysis", "Transformer models", "Recommendation systems", "Data collection & cleaning", "Language filtering", "Flask web development", "SQLAlchemy / ORM"],
        fr: ["Développement de pipeline NLP", "Analyse de sentiment", "Modèles transformer", "Systèmes de recommandation", "Collecte & nettoyage de données", "Filtrage par langue", "Développement web Flask", "SQLAlchemy / ORM"],
      },
      features: {
        en: [
          "End-to-end data collection and cleaning pipeline",
          "Language filtering with NLTK",
          "VADER lexicon-based sentiment scoring",
          "Pretrained RoBERTa transformer sentiment analysis",
          "Product recommendations driven by sentiment signals",
          "Flask web app with SQLAlchemy persistence",
        ],
        fr: [
          "Pipeline de collecte et de nettoyage de bout en bout",
          "Filtrage par langue avec NLTK",
          "Score de sentiment lexical avec VADER",
          "Analyse de sentiment par transformer RoBERTa pré-entraîné",
          "Recommandations de produits pilotées par les signaux de sentiment",
          "Application web Flask avec persistance SQLAlchemy",
        ],
      },
      highlights: {
        en: [
          "Combines lexicon-based (VADER) and transformer-based (RoBERTa) sentiment analysis",
          "Full NLP pipeline from raw review collection through cleaning and language filtering",
          "Sentiment signals translated into a product recommendation layer",
          "Pretrained transformer integration within a deployable Flask application",
        ],
        fr: [
          "Combine l'analyse de sentiment lexicale (VADER) et par transformer (RoBERTa)",
          "Pipeline NLP complet, de la collecte d'avis au nettoyage et filtrage de langue",
          "Signaux de sentiment traduits en une couche de recommandation de produits",
          "Intégration d'un transformer pré-entraîné dans une application Flask déployable",
        ],
      },
      metrics: [],
      repoPath: "Amazon NLP Reviews",
      links: [{ label: "GitHub", href: "https://github.com/AmineHamane/Amazon-NLP-reviews", kind: "github" }],
    },

    {
      id: "data-engineering-stack",
      name: "Data Engineering Stack",
      category: "data-engineering",
      status: "coursework",
      featured: false,
      accent: "lime",
      period: "2023 — 2024",
      role: {
        en: "Data Engineer (Hands-On)",
        fr: "Data Engineer (pratique)"
      },
      tagline: {
        en: "An end-to-end modern data-engineering stack worked through hands-on: Docker, Postgres, Terraform, Mage, BigQuery, dbt, Spark, Kafka.",
        fr: "Une stack moderne d'ingénierie de données pratiquée à fond : Docker, Postgres, Terraform, Mage, BigQuery, dbt, Spark, Kafka.",
      },
      summary: {
        en: "A hands-on working folder from the DataTalksClub Data Engineering Zoomcamp, built up with real authored artifacts: a containerized NY-taxi ingestion pipeline (Dockerfile + Python loading a parquet into PostgreSQL via SQLAlchemy) and a full Mage AI orchestration project with multiple custom pipelines wired to a live Google Cloud project — parameterized loaders with typed schemas and data-quality tests, exporters to Postgres, GCS (date-partitioned parquet via PyArrow) and BigQuery, plus monitoring charts, multi-cloud Terraform templates, and the course modules on data warehousing, dbt, Spark batch, and Kafka streaming.",
        fr: "Un dossier de travail pratique issu du Data Engineering Zoomcamp de DataTalksClub, enrichi de vrais artefacts : un pipeline d'ingestion NY-taxi conteneurisé (Dockerfile + Python chargeant un parquet dans PostgreSQL via SQLAlchemy) et un projet d'orchestration Mage AI complet avec plusieurs pipelines personnalisés reliés à un vrai projet Google Cloud — loaders paramétrés à schémas typés et tests de qualité, exporters vers Postgres, GCS (parquet partitionné par date via PyArrow) et BigQuery, plus des graphiques de monitoring, des templates Terraform multi-cloud et les modules du cours sur l'entreposage, dbt, Spark et le streaming Kafka.",
      },
      problem: {
        en: "Learn and practice the full modern data-engineering toolchain end to end: ingesting raw trip data, moving it through a data lake into a cloud warehouse, transforming it, and orchestrating the whole flow reproducibly.",
        fr: "Apprendre et pratiquer toute la chaîne moderne d'ingénierie de données de bout en bout : ingérer des données de trajets brutes, les faire transiter par un data lake vers un entrepôt cloud, les transformer et orchestrer le tout de façon reproductible.",
      },
      approach: {
        en: "Followed the Zoomcamp syllabus module by module and implemented the hands-on pieces locally: containerized a Python/Postgres ingestion pipeline, then rebuilt the same NY-taxi flow as an orchestrated Mage project with loaders, transformers, exporters, monitoring charts, and dbt integration against a real GCP project (GCS + BigQuery).",
        fr: "Suivi du programme du Zoomcamp module par module avec implémentation locale des parties pratiques : conteneurisation d'un pipeline d'ingestion Python/Postgres, puis reconstruction du même flux NY-taxi en projet Mage orchestré avec loaders, transformers, exporters, graphiques de monitoring et intégration dbt sur un vrai projet GCP (GCS + BigQuery).",
      },
      architecture: {
        en: "Two layers of authored work plus course material. A Dockerfile and ingestion script read the NY-taxi parquet and write it to a Dockerized PostgreSQL via SQLAlchemy. A docker-compose Mage + Postgres stack runs a Mage project with parameterized data loaders (typed schema + test assertions), exporters (Postgres, GCS parquet, date-partitioned parquet via PyArrow, BigQuery), dbt profiles, and run-status charts, authenticated to GCP via a service account. Multi-cloud Mage Terraform templates sit alongside, and the course supplies the BigQuery, dbt, Spark, and Kafka modules.",
        fr: "Deux couches de travail personnel plus le matériel de cours. Un Dockerfile et un script d'ingestion lisent le parquet NY-taxi et l'écrivent dans un PostgreSQL dockerisé via SQLAlchemy. Une stack docker-compose Mage + Postgres exécute un projet Mage avec loaders paramétrés (schéma typé + assertions de test), exporters (Postgres, parquet GCS, parquet partitionné par date via PyArrow, BigQuery), profils dbt et graphiques de statut, authentifié à GCP via un compte de service. Des templates Terraform Mage multi-cloud l'accompagnent, et le cours fournit les modules BigQuery, dbt, Spark et Kafka.",
      },
      outcome: {
        en: "A populated, runnable DE workspace demonstrating each pipeline stage executed hands-on — data loaded into Postgres, parquet partitioned and pushed to GCS, tables written to BigQuery — with live cloud configuration.",
        fr: "Un espace de travail DE peuplé et exécutable démontrant chaque étape du pipeline réalisée à la main — données chargées dans Postgres, parquet partitionné et poussé vers GCS, tables écrites dans BigQuery — avec configuration cloud réelle.",
      },
      recruiterPitch: {
        en: "Demonstrates hands-on fluency across the entire modern data-engineering stack — Docker, Postgres, Mage orchestration, Terraform IaC, GCS/BigQuery, dbt, Spark, and Kafka — with real cloud-connected pipelines, not just tutorial playback.",
        fr: "Démontre une aisance pratique sur toute la stack moderne d'ingénierie de données — Docker, Postgres, orchestration Mage, IaC Terraform, GCS/BigQuery, dbt, Spark et Kafka — avec de vrais pipelines connectés au cloud, pas une simple relecture de tutoriel.",
      },
      pipeline: [
        {
          label: { en: "Ingest", fr: "Ingestion" },
          desc: { en: "NY-taxi parquet", fr: "Parquet NY-taxi" },
        },
        {
          label: { en: "Containerize", fr: "Conteneurisation" },
          desc: { en: "Docker + PostgreSQL", fr: "Docker + PostgreSQL" },
        },
        {
          label: { en: "Orchestrate", fr: "Orchestration" },
          desc: { en: "Mage AI pipelines", fr: "Pipelines Mage AI" },
        },
        {
          label: { en: "Data Lake", fr: "Data Lake" },
          desc: { en: "GCS partitioned parquet", fr: "Parquet partitionné GCS" },
        },
        {
          label: { en: "Warehouse", fr: "Entrepôt" },
          desc: { en: "BigQuery + dbt", fr: "BigQuery + dbt" },
        },
        {
          label: { en: "Process", fr: "Traitement" },
          desc: { en: "Spark batch + Kafka", fr: "Spark batch + Kafka" },
        },
      ],
      techStack: [
        "Docker", "docker-compose", "PostgreSQL", "Python", "SQLAlchemy", "PyArrow", "Mage AI",
        "Terraform", "Google Cloud", "BigQuery", "dbt", "Apache Spark", "Apache Kafka", "SQL",
      ],
      skillsShown: {
        en: [
          "Containerization with Docker & docker-compose", "Data ingestion pipelines (batch load to RDB)",
          "Relational databases (PostgreSQL) & SQL", "Workflow orchestration with Mage AI",
          "Parameterized pipelines with typed schemas", "Data-quality testing inside pipelines",
          "Cloud data-lake patterns (GCS, partitioned parquet)", "Cloud data warehousing (BigQuery)",
          "Analytics engineering with dbt", "Infrastructure as Code with Terraform",
          "Batch processing with Apache Spark", "Stream processing with Kafka",
        ],
        fr: [
          "Conteneurisation avec Docker & docker-compose", "Pipelines d'ingestion (chargement batch vers BDR)",
          "Bases relationnelles (PostgreSQL) & SQL", "Orchestration de workflows avec Mage AI",
          "Pipelines paramétrés à schémas typés", "Tests de qualité de données dans les pipelines",
          "Patterns de data lake cloud (GCS, parquet partitionné)", "Entreposage cloud (BigQuery)",
          "Analytics engineering avec dbt", "Infrastructure as Code avec Terraform",
          "Traitement batch avec Apache Spark", "Traitement de flux avec Kafka",
        ],
      },
      features: {
        en: [
          "Dockerized NY-taxi ingestion: read parquet → SQLAlchemy → PostgreSQL",
          "docker-compose Mage + Postgres development stack",
          "Mage data loader fetching gzip CSV with typed schema and assertions",
          "Mage exporters to Postgres, GCS parquet, partitioned parquet, and BigQuery",
          "Monitoring charts over completed vs failed pipeline runs",
          "dbt integration (profiles + analytics project with models, macros, seeds, snapshots)",
          "Multi-cloud Terraform templates (AWS, AWS-EKS, Azure, GCP, DigitalOcean)",
        ],
        fr: [
          "Ingestion NY-taxi dockerisée : lecture parquet → SQLAlchemy → PostgreSQL",
          "Stack de développement docker-compose Mage + Postgres",
          "Loader Mage récupérant un CSV gzip avec schéma typé et assertions",
          "Exporters Mage vers Postgres, parquet GCS, parquet partitionné et BigQuery",
          "Graphiques de monitoring des exécutions réussies vs échouées",
          "Intégration dbt (profils + projet analytics avec modèles, macros, seeds, snapshots)",
          "Templates Terraform multi-cloud (AWS, AWS-EKS, Azure, GCP, DigitalOcean)",
        ],
      },
      highlights: {
        en: [
          "Real GCP integration, not just local: pipelines authenticate via a service account and write date-partitioned parquet to GCS and tables to BigQuery.",
          "Partitioned-parquet export hand-written with PyArrow's GcsFileSystem and partition columns — data-lake partitioning beyond drag-and-drop.",
          "Data loader defines an explicit per-column dtype map and ships test blocks asserting non-empty output and correct column types.",
          "Same NY-taxi dataset taken through two implementations (raw Dockerized Python→Postgres, then orchestrated Mage→GCS/BigQuery).",
        ],
        fr: [
          "Vraie intégration GCP, pas seulement locale : les pipelines s'authentifient via un compte de service et écrivent du parquet partitionné par date dans GCS et des tables dans BigQuery.",
          "Export de parquet partitionné écrit à la main avec GcsFileSystem de PyArrow et des colonnes de partition — du partitionnement de data lake au-delà du glisser-déposer.",
          "Le loader définit une carte de dtypes par colonne et embarque des tests vérifiant une sortie non vide et les bons types de colonnes.",
          "Même jeu NY-taxi mené par deux implémentations (Python→Postgres dockerisé brut, puis Mage→GCS/BigQuery orchestré).",
        ],
      },
      metrics: [
        { label: { en: "Course modules", fr: "Modules du cours" }, value: "6" },
        { label: { en: "Authored Mage pipelines", fr: "Pipelines Mage créés" }, value: "5+" },
        { label: { en: "Terraform cloud targets", fr: "Cibles cloud Terraform" }, value: "5" },
      ],
      repoPath: "cours-data",
      links: [{ label: "GitHub", href: "https://github.com/AmineHamane/data-engineering", kind: "github" }],
    },

    {
      id: "groupe-wave",
      name: "Groupe Wave — CRM Automation",
      category: "automation",
      status: "production",
      featured: false,
      accent: "lime",
      period: "2021 — 2022",
      role: {
        en: "Python Developer (Freelance)",
        fr: "Développeur Python (Freelance)"
      },
      tagline: {
        en: "Automated CRM and marketing data workflows for a digital agency",
        fr: "Automatisation des flux de données CRM et marketing pour une agence numérique"
      },
      summary: {
        en: "A freelance engagement with a digital marketing agency to structure client and campaign data, stand up an internal CRM, and automate the recurring data work behind lead and campaign tracking. Python pipelines handled import, cleaning, transformation, validation, and report generation so the team could rely on consistent, up-to-date numbers instead of manual spreadsheet work.",
        fr: "Mandat en freelance avec une agence de marketing numérique pour structurer les données clients et campagnes, mettre en place un CRM interne et automatiser le travail récurrent de données derrière le suivi des leads et des campagnes. Des pipelines Python prenaient en charge l'import, le nettoyage, la transformation, la validation et la génération de rapports, afin que l'équipe puisse s'appuyer sur des chiffres cohérents et à jour plutôt que sur un travail manuel dans des tableurs."
      },
      problem: {
        en: "The agency tracked client and campaign data across scattered files and tools, with no single source of truth for leads or marketing results. Reporting was manual, slow, and error-prone, which made it hard to follow campaign performance reliably and to keep client information consistent across the team.",
        fr: "L'agence suivait les données clients et campagnes à travers des fichiers et outils dispersés, sans source unique de vérité pour les leads ou les résultats marketing. La production de rapports était manuelle, lente et sujette aux erreurs, ce qui rendait difficile le suivi fiable de la performance des campagnes et le maintien de la cohérence des informations clients au sein de l'équipe."
      },
      approach: {
        en: "I worked closely with the agency to map their operational workflows, then built Python and SQL pipelines to ingest data from APIs and files, clean and validate it, and load it into a structured internal CRM. On top of that, I automated the recurring reports the team relied on, replacing repetitive manual steps with scheduled, repeatable processes.",
        fr: "J'ai travaillé en étroite collaboration avec l'agence pour cartographier ses flux opérationnels, puis j'ai construit des pipelines Python et SQL pour ingérer les données issues d'API et de fichiers, les nettoyer, les valider et les charger dans un CRM interne structuré. Par-dessus, j'ai automatisé les rapports récurrents dont l'équipe dépendait, remplaçant des étapes manuelles répétitives par des processus planifiés et reproductibles."
      },
      architecture: {
        en: "Data flowed from external APIs and uploaded files into Python ingestion scripts built around Pandas for cleaning, transformation, and validation. Cleaned records were stored in a SQL-backed internal CRM, and reporting routines queried that data to generate recurring campaign and lead-tracking reports for the team.",
        fr: "Les données circulaient depuis des API externes et des fichiers téléversés vers des scripts d'ingestion Python construits autour de Pandas pour le nettoyage, la transformation et la validation. Les enregistrements nettoyés étaient stockés dans un CRM interne adossé à une base SQL, et des routines de reporting interrogeaient ces données pour générer les rapports récurrents de suivi des campagnes et des leads pour l'équipe."
      },
      outcome: {
        en: "The agency gained a structured internal CRM and a set of automated workflows that reduced manual data handling and made recurring reports faster and more consistent. Lead and campaign tracking became more reliable, giving the team dependable numbers to act on without re-keying data by hand.",
        fr: "L'agence a obtenu un CRM interne structuré et un ensemble de flux automatisés qui ont réduit la manipulation manuelle des données et rendu les rapports récurrents plus rapides et plus cohérents. Le suivi des leads et des campagnes est devenu plus fiable, donnant à l'équipe des chiffres solides sur lesquels agir sans ressaisir les données à la main."
      },
      recruiterPitch: {
        en: "A real-world freelance data engagement: I turned scattered client and campaign data into a structured internal CRM and automated the reporting around it. It shows I can scope operational needs with a non-technical team and deliver practical Python and SQL automation that saves time and improves data quality.",
        fr: "Un mandat freelance de données concret : j'ai transformé des données clients et campagnes dispersées en un CRM interne structuré et automatisé le reporting qui l'entoure. Cela montre que je sais cadrer des besoins opérationnels avec une équipe non technique et livrer une automatisation Python et SQL pragmatique qui fait gagner du temps et améliore la qualité des données."
      },
      techStack: [
        "Python",
        "SQL",
        "Pandas",
        "REST APIs",
        "Data Cleaning",
        "Reporting Automation"
      ],
      skillsShown: {
        en: [
          "Data pipeline design and automation",
          "Data cleaning and validation with Pandas",
          "API and file-based data ingestion",
          "SQL data modeling for an internal CRM",
          "Automated reporting",
          "Working with a non-technical agency team"
        ],
        fr: [
          "Conception et automatisation de pipelines de données",
          "Nettoyage et validation des données avec Pandas",
          "Ingestion de données via API et fichiers",
          "Modélisation SQL des données pour un CRM interne",
          "Reporting automatisé",
          "Collaboration avec une équipe d'agence non technique"
        ]
      },
      features: {
        en: [
          "Automated import of client and campaign data from APIs and files",
          "Cleaning, transformation, and validation pipelines built on Pandas",
          "Structured internal CRM backed by SQL",
          "Automated generation of recurring marketing and lead-tracking reports",
          "Improved consistency of client and campaign data across the team"
        ],
        fr: [
          "Import automatisé des données clients et campagnes depuis des API et des fichiers",
          "Pipelines de nettoyage, transformation et validation basés sur Pandas",
          "CRM interne structuré adossé à une base SQL",
          "Génération automatisée des rapports récurrents de marketing et de suivi des leads",
          "Cohérence améliorée des données clients et campagnes au sein de l'équipe"
        ]
      },
      highlights: {
        en: [
          "Replaced manual spreadsheet work with repeatable automated data workflows",
          "Stood up an internal CRM as a single source of truth for client and campaign data",
          "Automated recurring reporting to support lead and campaign tracking"
        ],
        fr: [
          "Remplacement du travail manuel dans des tableurs par des flux de données automatisés et reproductibles",
          "Mise en place d'un CRM interne comme source unique de vérité pour les données clients et campagnes",
          "Automatisation du reporting récurrent pour soutenir le suivi des leads et des campagnes"
        ]
      },
      metrics: [],
      pipeline: [
        {
          label: {
            en: "Ingest (APIs & files)",
            fr: "Ingestion (API et fichiers)"
          },
          desc: {
            en: "Pull client and campaign data from external APIs and uploaded files into Python ingestion scripts.",
            fr: "Récupération des données clients et campagnes depuis des API externes et des fichiers téléversés vers des scripts d'ingestion Python."
          }
        },
        {
          label: {
            en: "Clean & Validate",
            fr: "Nettoyage et validation"
          },
          desc: {
            en: "Standardize, deduplicate, and validate records with Pandas to ensure reliable, consistent data.",
            fr: "Normalisation, déduplication et validation des enregistrements avec Pandas pour garantir des données fiables et cohérentes."
          }
        },
        {
          label: {
            en: "Transform",
            fr: "Transformation"
          },
          desc: {
            en: "Reshape and enrich the cleaned data into the structure required by the internal CRM and reports.",
            fr: "Restructuration et enrichissement des données nettoyées dans le format requis par le CRM interne et les rapports."
          }
        },
        {
          label: {
            en: "Internal CRM",
            fr: "CRM interne"
          },
          desc: {
            en: "Load the prepared records into a SQL-backed internal CRM that serves as the single source of truth.",
            fr: "Chargement des enregistrements préparés dans un CRM interne adossé à SQL servant de source unique de vérité."
          }
        },
        {
          label: {
            en: "Automated Reports",
            fr: "Rapports automatisés"
          },
          desc: {
            en: "Generate recurring marketing and lead-tracking reports automatically from the CRM data.",
            fr: "Génération automatique des rapports récurrents de marketing et de suivi des leads à partir des données du CRM."
          }
        }
      ],
      repoPath: "",
      links: [
        {
          label: "Client site",
          href: "https://groupewave.com/",
          kind: "external"
        }
      ]
    },

    {
      id: "ds-diploma-portfolio",
      name: "Data Science Diploma Portfolio",
      category: "coursework",
      status: "coursework",
      featured: false,
      accent: "purple",
      period: "2022 — 2023",
      role: {
        en: "Data Science — Learner & Project Owner",
        fr: "Science des données — Apprenant & porteur de projet"
      },
      tagline: {
        en: "End-to-end data-science fundamentals, from Python and statistics to neural networks.",
        fr: "Les fondamentaux de la science des données de bout en bout, de Python et des statistiques aux réseaux de neurones.",
      },
      summary: {
        en: "A structured walkthrough of a full Data Science diploma program, organized into seven chapters of hands-on Jupyter notebooks spanning the complete classical-to-modern ML stack: Python and statistics foundations, data visualization, algorithms and data structures, regression and classification, SQL and big-data processing, unsupervised learning and NLP, and predictive modeling through neural networks and sequence models. It demonstrates broad, applied literacy across the standard data-science toolkit.",
        fr: "Un parcours structuré d'un programme complet de diplôme en science des données, organisé en sept chapitres de notebooks Jupyter pratiques couvrant toute la stack ML, du classique au moderne : fondations Python et statistiques, visualisation, algorithmes et structures de données, régression et classification, SQL et traitement à grande échelle, apprentissage non supervisé et NLP, et modélisation prédictive jusqu'aux réseaux de neurones et modèles de séquence. Il démontre une littératie appliquée et large sur la boîte à outils standard de la data science.",
      },
      problem: {
        en: "Building a credible, broad foundation across the entire data-science workflow — statistics, programming, data engineering, and machine learning — through guided, worked exercises.",
        fr: "Bâtir une base crédible et large sur tout le flux de la science des données — statistiques, programmation, ingénierie de données et machine learning — via des exercices guidés et résolus.",
      },
      approach: {
        en: "Worked through structured course modules as Jupyter notebooks (lecture, workshop, and stretch exercises) covering each topic area, plus an independent run-through of the 'Introduction to Statistical Learning (Python)' labs across chapters 2–13.",
        fr: "Travail à travers des modules de cours structurés en notebooks Jupyter (cours, ateliers et exercices avancés) couvrant chaque domaine, plus un parcours indépendant des labs « Introduction to Statistical Learning (Python) » sur les chapitres 2 à 13.",
      },
      architecture: {
        en: "Seven thematic clusters (chapters), each split into module folders containing lecture notebooks, workshop exercises, and datasets. Python/Jupyter throughout, with SQL and PySpark for data-at-scale and TensorFlow/Keras for the deep-learning modules.",
        fr: "Sept regroupements thématiques (chapitres), chacun divisé en dossiers de modules contenant notebooks de cours, exercices d'atelier et jeux de données. Python/Jupyter partout, avec SQL et PySpark pour la donnée à grande échelle et TensorFlow/Keras pour les modules de deep learning.",
      },
      outcome: {
        en: "A coherent coursework portfolio covering the breadth of foundational and intermediate data-science techniques, suitable as evidence of trained fundamentals across statistics, ML, and data engineering.",
        fr: "Un portfolio de travaux cohérent couvrant l'étendue des techniques fondamentales et intermédiaires de la science des données, témoignant de fondamentaux maîtrisés en statistiques, ML et ingénierie de données.",
      },
      recruiterPitch: {
        en: "Demonstrates trained, hands-on breadth across the entire data-science stack — from statistics and SQL to clustering, NLP, and neural networks — giving a reliable foundation to ramp quickly on real ML/data work.",
        fr: "Démontre une étendue pratique et maîtrisée sur toute la stack de la data science — des statistiques et du SQL au clustering, NLP et réseaux de neurones — offrant une base fiable pour monter vite en charge sur de vrais projets ML/data.",
      },
      pipeline: [
        {
          label: { en: "Python & Stats", fr: "Python & Stats" },
          desc: { en: "Foundations, probability", fr: "Fondations, probabilités" },
        },
        {
          label: { en: "Viz & EDA", fr: "Viz & EDA" },
          desc: { en: "pandas, Matplotlib, Seaborn", fr: "pandas, Matplotlib, Seaborn" },
        },
        {
          label: { en: "Regression & Class.", fr: "Régression & Class." },
          desc: { en: "scikit-learn, GLMs", fr: "scikit-learn, GLM" },
        },
        {
          label: { en: "SQL & Big Data", fr: "SQL & Big Data" },
          desc: { en: "SQL, PySpark", fr: "SQL, PySpark" },
        },
        {
          label: { en: "Clustering & NLP", fr: "Clustering & NLP" },
          desc: { en: "PCA, embeddings", fr: "PCA, embeddings" },
        },
        {
          label: { en: "Deep Learning", fr: "Deep Learning" },
          desc: { en: "CNNs, RNNs · TensorFlow/Keras", fr: "CNN, RNN · TensorFlow/Keras" },
        },
      ],
      techStack: ["Python", "Jupyter", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "statsmodels", "SQL", "PySpark", "TensorFlow", "Keras"],
      skillsShown: {
        en: [
          "Statistics & probability", "Data wrangling (pandas/NumPy)", "EDA & visualization",
          "Algorithms & data structures", "Regression, feature engineering & interpretation",
          "Classification & GLMs", "SQL & distributed processing (PySpark)",
          "Clustering & dimensionality reduction (PCA)", "Web scraping & API collection",
          "NLP & word embeddings", "Model validation", "SVMs",
          "Time-series forecasting (ARIMA)", "Neural networks & CNNs", "RNNs / sequence learning",
        ],
        fr: [
          "Statistiques & probabilités", "Manipulation de données (pandas/NumPy)", "EDA & visualisation",
          "Algorithmes & structures de données", "Régression, feature engineering & interprétation",
          "Classification & GLM", "SQL & traitement distribué (PySpark)",
          "Clustering & réduction de dimension (PCA)", "Web scraping & collecte par API",
          "NLP & word embeddings", "Validation de modèles", "SVM",
          "Prévision de séries temporelles (ARIMA)", "Réseaux de neurones & CNN", "RNN / apprentissage de séquences",
        ],
      },
      features: {
        en: [
          "Python and math/stats foundations (set theory, probability, distributions)",
          "Data visualization plus full ISL (Introduction to Statistical Learning) Python labs (ch. 2–13)",
          "Algorithms & data structures: recursion, graphs, knapsack, OOP",
          "Regression track: interpretation, feature engineering, classification, GLMs",
          "SQL track: intro, advanced queries, and PySpark / MapReduce for big data",
          "Data engineering: optimization, clustering, scraping/APIs, PCA, NLP embeddings",
          "Predictive modeling: cross-validation, SVMs, ARIMA, neural nets/CNNs, RNN sequence learning",
        ],
        fr: [
          "Fondations Python et maths/stats (théorie des ensembles, probabilités, distributions)",
          "Visualisation plus les labs Python complets de l'ISL (Introduction to Statistical Learning) (ch. 2–13)",
          "Algorithmes & structures de données : récursion, graphes, sac à dos, POO",
          "Piste régression : interprétation, feature engineering, classification, GLM",
          "Piste SQL : intro, requêtes avancées et PySpark / MapReduce pour le big data",
          "Ingénierie de données : optimisation, clustering, scraping/API, PCA, embeddings NLP",
          "Modélisation prédictive : validation croisée, SVM, ARIMA, réseaux de neurones/CNN, RNN",
        ],
      },
      highlights: {
        en: [
          "Covers the full arc from classical statistics and SQL to deep learning (CNNs, RNNs) in one organized body of work.",
          "Includes an independent walkthrough of the canonical 'Introduction to Statistical Learning' labs (Python edition) across 12 chapters.",
          "Spans both modeling and data-engineering concerns (scraping, APIs, distributed PySpark) rather than just model fitting.",
        ],
        fr: [
          "Couvre tout l'arc, des statistiques classiques et du SQL au deep learning (CNN, RNN) en un corpus organisé.",
          "Inclut un parcours indépendant des labs canoniques « Introduction to Statistical Learning » (édition Python) sur 12 chapitres.",
          "Couvre à la fois la modélisation et l'ingénierie de données (scraping, API, PySpark distribué), pas seulement l'ajustement de modèles.",
        ],
      },
      metrics: [
        { label: { en: "Topic clusters", fr: "Regroupements" }, value: "7" },
        { label: { en: "Module folders", fr: "Dossiers de modules" }, value: "29" },
        { label: { en: "ISL lab notebooks", fr: "Notebooks ISL" }, value: "12" },
      ],
      repoPath: "Chap1–Chap7",
      links: [{ label: "GitHub", href: GITHUB_URL, kind: "github" }],
    },
  ],

  experience: [
    {
      role: { en: "Data & ML Consultant / Python Developer", fr: "Consultant Data & ML / Développeur Python" },
      company: "Independent Projects",
      location: "Montréal, QC",
      period: "2021 – Present",
      bullets: {
        en: [
          "Build Python scripts, web apps, and prototypes to automate business processes and accelerate decision-making.",
          "Develop data pipelines with Pandas and SQL, and machine-learning models with Scikit-Learn, including NLP projects.",
          "Design and ship backends and APIs with FastAPI, Flask, and Django.",
          "Integrate LLM-assisted workflows using OpenAI, Claude, and Gemini, with human validation and data protection.",
        ],
        fr: [
          "Création de scripts Python, d'applications web et de prototypes pour automatiser des processus métier et accélérer la décision.",
          "Développement de pipelines de données avec Pandas et SQL, et de modèles de machine learning avec Scikit-Learn, incluant des projets NLP.",
          "Conception et mise en service de backends et d'API avec FastAPI, Flask et Django.",
          "Intégration de workflows assistés par LLM (OpenAI, Claude, Gemini), avec validation humaine et protection des données.",
        ],
      },
    },
    {
      role: {
        en: "Systems Administrator · IT Operations",
        fr: "Administrateur de systèmes · Opérations TI"
      },
      company: "Gildan",
      location: "Montréal, QC",
      period: "Feb 2020 – Oct 2025",
      bullets: {
        en: [
          "Worked within the IT Operations / Operations Center team, collaborating closely with infrastructure, network, security, applications and support groups to keep critical services running.",
          "Provided level 2/3 support and administered Windows Server, Active Directory, VMware, DNS/DHCP, VPN, Microsoft 365 and a range of internal applications.",
          "Automated recurring operational tasks with Python and PowerShell — including snapshot comparison, desynchronization detection and automated operational reporting.",
          "Handled operational monitoring, service continuity and shift handovers, while documenting procedures and tracking recurring incidents to prevent repeats.",
          "Performed log analysis and diagnosis of complex incidents, coordinating resolution across teams.",
          "Communicated clearly with technical and business stakeholders throughout incident resolution and change activities."
        ],
        fr: [
          "Intégré à l'équipe Opérations TI / Centre d'opérations, en collaboration étroite avec les groupes infrastructure, réseau, sécurité, applications et support pour assurer la disponibilité des services critiques.",
          "Assuré le support de niveau 2/3 et administré Windows Server, Active Directory, VMware, DNS/DHCP, VPN, Microsoft 365 ainsi que plusieurs applications internes.",
          "Automatisé des tâches opérationnelles récurrentes en Python et PowerShell — comparaison de snapshots, détection de désynchronisation et production automatisée de rapports opérationnels.",
          "Pris en charge la surveillance opérationnelle, la continuité de service et les passations de quart, tout en documentant les procédures et en effectuant le suivi des incidents récurrents pour éviter qu'ils ne se reproduisent.",
          "Réalisé l'analyse de journaux et le diagnostic d'incidents complexes, en coordonnant la résolution entre les équipes.",
          "Communiqué clairement avec les parties prenantes techniques et d'affaires tout au long de la résolution d'incidents et des activités de changement."
        ]
      }
    },
    {
      role: { en: "IT Support Technician", fr: "Technicien support informatique" },
      company: "CGI Group",
      location: "Montréal, QC",
      period: "Jun 2018 – Sep 2019",
      bullets: {
        en: [
          "Provided L1/L2 technical support to end users: incidents, access, workstations, software, and service requests.",
          "Prioritized and triaged tickets, escalating complex issues per established procedures.",
        ],
        fr: [
          "Support technique N1/N2 aux utilisateurs : incidents, accès, postes de travail, logiciels et demandes de service.",
          "Priorisation et tri des tickets, escalade des problèmes complexes selon les procédures établies.",
        ],
      },
    },
  ],

  education: [
    {
      degree: {
        en: "Data Science Diploma",
        fr: "Diplôme en science des données"
      },
      school: "Concordia University",
      detail: {
        en: "Applied program (2023) covering machine learning, data analysis and Python — the foundation for my data and ML work.",
        fr: "Programme appliqué (2023) couvrant l'apprentissage automatique, l'analyse de données et Python — le socle de mon travail en données et ML."
      }
    },
    {
      degree: {
        en: "Collegial Diploma",
        fr: "Diplôme collégial"
      },
      school: "Collège",
      detail: {
        en: "General collegial studies (2010).",
        fr: "Études collégiales générales (2010)."
      }
    }
  ],

  certifications: [
    { en: "Cisco CCNA", fr: "Cisco CCNA" },
    { en: "CompTIA Security+", fr: "CompTIA Security+" },
    { en: "CompTIA A+", fr: "CompTIA A+" },
    { en: "Microsoft AZ-104 (in progress)", fr: "Microsoft AZ-104 (en cours)" },
  ],

  cv: {
    headline: {
      en: "Python Developer · Data Science · Machine Learning · Generative AI",
      fr: "Développeur Python · Data Science · Machine Learning · IA générative",
    },
    summary: {
        en: "Python developer with 5+ years of IT experience, combining data and ML with full-stack web and mobile development and automation. I build complete systems end-to-end — data pipelines and Python/API services, React/TypeScript and Expo/React Native interfaces, and the operational automation around them — and ship them to production. Backed by an IT Operations foundation (monitoring, log analysis, testing, security basics, documentation, deployment). Native French, professional English.",
        fr: "Développeur Python avec plus de 5 ans d'expérience en TI, alliant données et ML au développement full-stack web et mobile et à l'automatisation. Je construis des systèmes complets de bout en bout — pipelines de données et services Python/API, interfaces React/TypeScript et Expo/React Native, et l'automatisation opérationnelle qui les entoure — et je les livre en production. Appuyé par un socle en Opérations TI (surveillance, analyse de journaux, tests, bases de la sécurité, documentation, déploiement). Français langue maternelle, anglais professionnel."
      },
  },

  ui: {
    navAbout: { en: "About", fr: "Profil" },
    navSkills: { en: "Skills", fr: "Compétences" },
    navProjects: { en: "Projects", fr: "Projets" },
    navExperience: { en: "Experience", fr: "Expérience" },
    navContact: { en: "Contact", fr: "Contact" },
    downloadCv: { en: "Download CV", fr: "Télécharger le CV" },
    openToWork: { en: "Open to opportunities", fr: "Ouvert aux opportunités" },
    scroll: { en: "Scroll", fr: "Défiler" },
    aboutEyebrow: { en: "01 — About", fr: "01 — Profil" },
    skillsEyebrow: { en: "02 — Skills", fr: "02 — Compétences" },
    skillsHeading: { en: "A full-stack data toolkit", fr: "Une boîte à outils data full-stack" },
    skillsSub: {
      en: "Three pillars that take a problem from raw data to a running, AI-powered service.",
      fr: "Trois piliers qui mènent un problème de la donnée brute à un service IA en production.",
    },
    projectsEyebrow: { en: "03 — Projects", fr: "03 — Projets" },
    projectsHeading: { en: "Selected work", fr: "Travaux sélectionnés" },
    projectsSub: {
      en: "From a live deep-learning trading system to data pipelines and NLP — each project maps to concrete, in-demand skills.",
      fr: "D'un système de trading en deep learning à des pipelines de données et du NLP — chaque projet renvoie à des compétences concrètes et recherchées.",
    },
    experienceEyebrow: { en: "04 — Experience", fr: "04 — Expérience" },
    experienceHeading: { en: "Where I've worked", fr: "Mon parcours" },
    educationHeading: { en: "Education", fr: "Formation" },
    certsHeading: { en: "Certifications", fr: "Certifications" },
    contactEyebrow: { en: "05 — Contact", fr: "05 — Contact" },
    contactHeading: { en: "Let's build something", fr: "Construisons quelque chose" },
    contactSub: {
      en: "Open to data, ML, and Python roles — full-time, contract, or freelance. The fastest way to reach me is email.",
      fr: "Ouvert aux postes data, ML et Python — temps plein, contrat ou freelance. Le plus rapide pour me joindre : le courriel.",
    },
    emailMe: { en: "Email me", fr: "Écrivez-moi" },
    copyEmail: { en: "Copy email", fr: "Copier le courriel" },
    copied: { en: "Copied!", fr: "Copié !" },
    viewGithub: { en: "GitHub", fr: "GitHub" },
    featured: { en: "Featured", fr: "En vedette" },
    explore: { en: "Explore project", fr: "Explorer le projet" },
    close: { en: "Close", fr: "Fermer" },
    viewCode: { en: "View code", fr: "Voir le code" },
    liveDemo: { en: "Live demo", fr: "Démo en direct" },
    mWhy: { en: "Why it matters", fr: "Pourquoi c'est pertinent" },
    mProblem: { en: "The problem", fr: "Le problème" },
    mApproach: { en: "Approach", fr: "Approche" },
    mPipeline: { en: "End-to-end pipeline", fr: "Pipeline de bout en bout" },
    mArchitecture: { en: "Architecture", fr: "Architecture" },
    mHighlights: { en: "Engineering highlights", fr: "Points forts d'ingénierie" },
    mFeatures: { en: "Key features", fr: "Fonctionnalités clés" },
    mTech: { en: "Tech stack", fr: "Stack technique" },
    mSkills: { en: "Skills demonstrated", fr: "Compétences démontrées" },
    mMetrics: { en: "Facts & figures", fr: "Faits & chiffres" },
    mOutcome: { en: "Outcome", fr: "Résultat" },
    statusProduction: { en: "Production", fr: "Production" },
    statusPrototype: { en: "Prototype", fr: "Prototype" },
    statusInProgress: { en: "In progress", fr: "En cours" },
    statusCoursework: { en: "Coursework", fr: "Formation" },
    statusExperiment: { en: "Experiment", fr: "Expérimentation" },
    filterAll: { en: "All", fr: "Tous" },
    catFlagship: { en: "Flagship", fr: "Projet phare" },
    catMl: { en: "Machine Learning", fr: "Machine Learning" },
    catFullstack: { en: "Full-Stack / SaaS", fr: "Full-Stack / SaaS" },
    catData: { en: "Data Engineering", fr: "Ingénierie de données" },
    catWeb: { en: "SaaS / Backend", fr: "SaaS / Backend" },
    catNlp: { en: "NLP", fr: "NLP" },
    catAutomation: { en: "Automation", fr: "Automatisation" },
    catCoursework: { en: "Foundations", fr: "Fondations" },
    backToTop: { en: "Back to top", fr: "Haut de page" },
    skillsWord: { en: "skills", fr: "compétences" },
    chartIllustrative: { en: "Illustrative — not live performance", fr: "Schéma illustratif — pas une performance réelle" },
    emptyFilter: { en: "No projects in this category yet.", fr: "Aucun projet dans cette catégorie pour l'instant." },
    techFootprint: { en: "Tech footprint", fr: "Empreinte technique" },
    techFootprintSub: {
      en: "Most-used technologies across these projects",
      fr: "Technologies les plus utilisées dans ces projets",
    },
    skipToContent: { en: "Skip to content", fr: "Aller au contenu" },
    langGroup: { en: "Language", fr: "Langue" },
    langEnglish: { en: "English", fr: "Anglais" },
    langFrench: { en: "French", fr: "Français" },
    menuToggle: { en: "Toggle menu", fr: "Ouvrir le menu" },
    builtWith: { en: "Built with Next.js, Tailwind & Motion", fr: "Conçu avec Next.js, Tailwind & Motion" },
    rights: { en: "All rights reserved.", fr: "Tous droits réservés." },
    cvPrint: { en: "Print / Save as PDF", fr: "Imprimer / Enregistrer en PDF" },
    cvBack: { en: "Back to site", fr: "Retour au site" },
    cvProfile: { en: "Profile", fr: "Profil" },
    cvSkills: { en: "Technical Skills", fr: "Compétences techniques" },
    cvExperience: { en: "Experience", fr: "Expérience professionnelle" },
    cvProjects: { en: "Selected Projects", fr: "Projets sélectionnés" },
    cvEducation: { en: "Education", fr: "Formation" },
    cvCerts: { en: "Certifications", fr: "Certifications" },
    cvLanguages: { en: "Languages", fr: "Langues" },
  },
};

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
      en: "I'm a Python developer with over five years of IT experience, focused on data science, machine learning, and generative AI. I build complete systems rather than isolated notebooks — collecting and engineering data, training models in PyTorch and Scikit-Learn, and shipping them behind FastAPI, Flask, and Django backends. My flagship work is an end-to-end EUR/USD trading research system that runs the full lifecycle, from historical data collection through Temporal Fusion Transformer training to live, broker-API execution with real risk management. Backed by a Data Science diploma and a strong systems and automation background, I bring both the modeling depth and the engineering discipline to take ML from prototype to something that runs.",
      fr: "Je suis développeur Python avec plus de cinq ans d'expérience en TI, spécialisé en science des données, machine learning et IA générative. Je construis des systèmes complets plutôt que des notebooks isolés : collecte et ingénierie des données, entraînement de modèles avec PyTorch et Scikit-Learn, puis mise en service derrière des backends FastAPI, Flask et Django. Mon projet phare est un système de recherche de trading EUR/USD de bout en bout, couvrant tout le cycle de vie — de la collecte de données historiques à l'entraînement de Temporal Fusion Transformers, jusqu'à l'exécution en direct via l'API d'un courtier avec une vraie gestion du risque. Fort d'un diplôme en science des données et d'un solide bagage en systèmes et automatisation, j'apporte à la fois la profondeur de modélisation et la rigueur d'ingénierie nécessaires pour mener le ML du prototype à un système qui tourne.",
    },
  },

  stats: [
    { label: { en: "Years in IT", fr: "Années en TI" }, value: "5+" },
    { label: { en: "Projects", fr: "Projets" }, value: "5" },
    { label: { en: "Core skill areas", fr: "Domaines clés" }, value: "3" },
    { label: { en: "Certifications", fr: "Certifications" }, value: "4" },
  ],

  skillGroups: [
    {
      name: { en: "Data Science & ML", fr: "Data Science & ML" },
      icon: "brain",
      blurb: {
        en: "From statistics and feature engineering to deep learning with PyTorch.",
        fr: "Des statistiques et du feature engineering au deep learning avec PyTorch.",
      },
      skills: [
        "Python", "Pandas", "NumPy", "Scikit-Learn", "Model validation", "Classification",
        "Regression", "Clustering", "Time-series forecasting", "NLP", "Embeddings",
        "Feature engineering", "PyTorch", "PyTorch Lightning", "CNN / RNN / Transformers",
      ],
    },
    {
      name: { en: "AI Services & Backend", fr: "Services IA & Backend" },
      icon: "server",
      blurb: {
        en: "Shipping models and LLM workflows behind clean, async APIs.",
        fr: "Mise en service de modèles et de workflows LLM derrière des API propres et asynchrones.",
      },
      skills: [
        "FastAPI", "Flask", "Django", "REST APIs", "Async workers", "LLM / AI services",
        "OpenAI", "Claude", "Gemini", "Prompt engineering", "Workflow integration", "Streamlit",
      ],
    },
    {
      name: { en: "Data, DevOps & Systems", fr: "Data, DevOps & Systèmes" },
      icon: "database",
      blurb: {
        en: "Pipelines, containers, and cloud — with a sysadmin's operational eye.",
        fr: "Pipelines, conteneurs et cloud — avec l'œil opérationnel d'un administrateur système.",
      },
      skills: [
        "SQL", "Stored procedures", "PostgreSQL", "Snowflake / BigQuery", "PySpark", "Git",
        "pytest", "Docker", "Terraform", "Linux / Unix", "Windows Server", "Azure / AWS",
      ],
    },
  ],

  projects: [
    {
      id: "forex-algo-trader",
      name: "EUR/USD AI Trading System",
      category: "flagship",
      status: "prototype",
      featured: true,
      accent: "cyan",
      tagline: {
        en: "A deep-learning forex forecaster wired into a live OANDA trading bot, technical-analysis engine, and real-time decision dashboard.",
        fr: "Un prévisionniste forex en deep learning relié à un bot de trading OANDA en direct, un moteur d'analyse technique et un tableau de bord décisionnel en temps réel.",
      },
      summary: {
        en: "An end-to-end algorithmic-trading research project for EUR/USD that spans the full pipeline: bulk historical candle collection from the OANDA v3 API, technical feature engineering (Bollinger Bands, ATR, RSI, MACD, EMAs, candlestick patterns), Temporal Fusion Transformer models trained with PyTorch Lightning to predict next-bar returns, an AI decision engine that fuses the model prediction with per-indicator Buy/Sell/Hold confidence scores, and a rule-based live bot that executes trades on an OANDA practice account with fixed-cash-risk position sizing.",
        fr: "Un projet de recherche en trading algorithmique pour l'EUR/USD couvrant tout le pipeline : collecte massive de chandelles historiques via l'API OANDA v3, ingénierie de features techniques (bandes de Bollinger, ATR, RSI, MACD, EMA, patterns de chandeliers), modèles Temporal Fusion Transformer entraînés avec PyTorch Lightning pour prédire le rendement de la prochaine barre, un moteur de décision IA qui fusionne la prédiction du modèle avec des scores de confiance Achat/Vente/Neutre par indicateur, et un bot en direct qui exécute des trades sur un compte de pratique OANDA avec un dimensionnement de position à risque monétaire fixe.",
      },
      problem: {
        en: "Forecasting short-horizon EUR/USD direction is noisy, and most retail indicators are used in isolation. This project combines a learned sequence model (TFT) with classical technical analysis and session/news context into a single, explainable trade signal — backed by an automatically executing live bot.",
        fr: "Prévoir la direction de l'EUR/USD à court terme est bruité, et la plupart des indicateurs grand public sont utilisés isolément. Ce projet combine un modèle de séquence appris (TFT) avec l'analyse technique classique et le contexte session/actualités en un seul signal de trading explicable — appuyé par un bot d'exécution automatique en direct.",
      },
      approach: {
        en: "Two complementary tracks. (1) A live rule-based bot polls OANDA every 10 seconds, detects newly completed candles, computes Bollinger Bands, and fires mean-reversion entries subject to spread and gain filters, with take-profit/stop-loss from a configurable risk:reward and units sized so a stop-out loses a fixed cash amount. (2) An AI/ML track collects ~8 years of M5/H1/H4 candles, engineers indicator, EMA, pattern and time features, trains Temporal Fusion Transformers to predict next-bar log-return, then fuses the prediction with indicator confirmation and candlestick votes into a blended confidence, surfaced live in a Streamlit dashboard.",
        fr: "Deux pistes complémentaires. (1) Un bot basé sur des règles interroge OANDA toutes les 10 secondes, détecte les nouvelles chandelles complétées, calcule les bandes de Bollinger et déclenche des entrées de retour à la moyenne selon des filtres d'écart et de gain, avec take-profit/stop-loss issus d'un ratio risque:rendement configurable et un nombre d'unités calculé pour qu'un stop coûte un montant fixe. (2) Une piste IA/ML collecte ~8 ans de chandelles M5/H1/H4, construit des features d'indicateurs, d'EMA, de patterns et de temps, entraîne des Temporal Fusion Transformers pour prédire le log-rendement de la prochaine barre, puis fusionne la prédiction avec la confirmation des indicateurs et le vote des chandeliers en une confiance combinée, affichée en direct dans un tableau de bord Streamlit.",
      },
      architecture: {
        en: "A layered, separation-of-concerns design. An OANDA REST v3 wrapper exposes candle dataframes, pricing with home-currency conversion, and market orders with TP/SL. An infrastructure layer handles bulk paged collection to datasets and instrument metadata. A technicals layer holds vectorized pandas indicators and a candlestick-pattern engine. Thin dataclasses model trades and settings. The bot orchestrates the live loop — new-candle detection, signal build, risk sizing, duplicate-position guard, order placement. The AI decision engine loads a TFT checkpoint, builds a one-step dataset from live candles, predicts, and fuses with indicators, patterns and trend. Streamlit is the presentation layer; a separate module backtests a moving-average crossover.",
        fr: "Une conception en couches, à responsabilités séparées. Un wrapper OANDA REST v3 expose les chandelles en dataframes, le pricing avec conversion vers la devise de base, et les ordres au marché avec TP/SL. Une couche infrastructure gère la collecte paginée massive vers des jeux de données et les métadonnées d'instruments. Une couche technique contient des indicateurs pandas vectorisés et un moteur de patterns de chandeliers. De fines dataclasses modélisent les trades et les paramètres. Le bot orchestre la boucle en direct — détection de nouvelle chandelle, construction du signal, dimensionnement du risque, garde anti-doublon, placement d'ordre. Le moteur de décision IA charge un checkpoint TFT, construit un jeu de données à un pas depuis les chandelles en direct, prédit et fusionne avec indicateurs, patterns et tendance. Streamlit est la couche de présentation ; un module distinct backteste un croisement de moyennes mobiles.",
      },
      outcome: {
        en: "A working live practice-account bot (Bollinger mean reversion) and a working live AI dashboard (TFT + indicator/pattern fusion) both run, backed by a real multi-year dataset and many trained checkpoints — demonstrating the full ML-to-execution lifecycle on real market data and a real broker API. It is an ambitious solo prototype: the live bot and the model/dashboard are still two parallel tracks, and there is no automated backtest of the model's profitability.",
        fr: "Un bot en direct fonctionnel sur compte de pratique (retour à la moyenne Bollinger) et un tableau de bord IA en direct (TFT + fusion indicateurs/patterns) tournent tous deux, appuyés par un vrai jeu de données pluriannuel et de nombreux checkpoints entraînés — démontrant tout le cycle du ML à l'exécution sur de vraies données de marché et une vraie API de courtier. C'est un prototype ambitieux mené en solo : le bot en direct et le modèle/tableau de bord restent deux pistes parallèles, et il n'existe pas de backtest automatisé de la rentabilité du modèle.",
      },
      recruiterPitch: {
        en: "Shows a developer who can take a deep-learning time-series model from data collection, through PyTorch Lightning training, to live API-integrated execution with real risk management — the rare full-stack ML-engineering-meets-quant skill set.",
        fr: "Montre un développeur capable de mener un modèle de séries temporelles en deep learning de la collecte de données à l'entraînement avec PyTorch Lightning, jusqu'à l'exécution en direct intégrée par API avec une vraie gestion du risque — la rare combinaison ingénierie ML et quant.",
      },
      techStack: [
        "Python", "PyTorch", "PyTorch Lightning", "pytorch-forecasting (TFT)", "pandas",
        "NumPy", "Streamlit", "Plotly", "OANDA REST API v3", "requests", "Jupyter",
      ],
      skillsShown: {
        en: [
          "Deep learning for time series (Temporal Fusion Transformers)",
          "PyTorch Lightning training & checkpointing",
          "Time-series feature engineering & windowing",
          "Financial technical analysis (Bollinger, ATR, RSI, MACD, EMA, patterns)",
          "REST API integration (OANDA v3: candles, pricing, orders)",
          "Real-time / event-driven system design",
          "Risk management & position sizing",
          "Interactive dashboard development (Streamlit + Plotly)",
          "Clean modular Python architecture",
          "Backtesting / simulation",
        ],
        fr: [
          "Deep learning pour séries temporelles (Temporal Fusion Transformers)",
          "Entraînement & checkpointing avec PyTorch Lightning",
          "Feature engineering & fenêtrage de séries temporelles",
          "Analyse technique financière (Bollinger, ATR, RSI, MACD, EMA, patterns)",
          "Intégration d'API REST (OANDA v3 : chandelles, pricing, ordres)",
          "Conception de systèmes temps réel / événementiels",
          "Gestion du risque & dimensionnement de position",
          "Développement de tableaux de bord interactifs (Streamlit + Plotly)",
          "Architecture Python modulaire et propre",
          "Backtesting / simulation",
        ],
      },
      features: {
        en: [
          "OANDA v3 wrapper: candle dataframes, pricing with home conversion, market orders with TP/SL",
          "Bulk historical collection across 7 currencies and M5/H1/H4 (2016–2024)",
          "Vectorized indicators: Bollinger Bands, ATR, RSI, MACD, Keltner Channels, EMAs",
          "Candlestick pattern engine (Engulfing, Morning/Evening Star, Shooting Star, and more)",
          "Temporal Fusion Transformer next-bar return forecasting loaded live from a checkpoint",
          "AI decision engine fusing model prediction with per-indicator Buy/Sell/Hold confidence",
          "RSI-vs-price divergence detector, EMA-stack trend classifier, round-level S/R estimate",
          "Live rule-based bot: 10s polling, new-candle detection, Bollinger mean-reversion entries",
          "Fixed-cash-risk position sizing converting stop distance in pips into units",
          "Streamlit dashboard: live signal, session coloring, news-window warnings, auto-refresh",
        ],
        fr: [
          "Wrapper OANDA v3 : chandelles en dataframes, pricing avec conversion, ordres au marché avec TP/SL",
          "Collecte historique massive sur 7 devises et M5/H1/H4 (2016–2024)",
          "Indicateurs vectorisés : bandes de Bollinger, ATR, RSI, MACD, canaux de Keltner, EMA",
          "Moteur de patterns de chandeliers (Engulfing, étoile du matin/soir, étoile filante, etc.)",
          "Prévision du rendement de la prochaine barre par Temporal Fusion Transformer chargé en direct",
          "Moteur de décision IA fusionnant la prédiction avec une confiance Achat/Vente/Neutre par indicateur",
          "Détecteur de divergence RSI/prix, classifieur de tendance par pile d'EMA, estimation des S/R ronds",
          "Bot en direct : interrogation 10 s, détection de nouvelle chandelle, entrées Bollinger",
          "Dimensionnement à risque monétaire fixe convertissant la distance de stop en pips en unités",
          "Tableau de bord Streamlit : signal en direct, coloration de session, alertes actualités, auto-refresh",
        ],
      },
      highlights: {
        en: [
          "Genuinely end-to-end: data collection → feature engineering → TFT training → inference → signal fusion → live order execution → dashboard.",
          "Explainable AI design: every indicator contributes a transparent Buy/Sell/Hold confidence row, patterns are scored separately, then blended into a capped global confidence.",
          "Risk-first execution: units are derived backwards from a fixed cash risk and the stop distance, using OANDA pip-location and home-currency conversion — not fixed lot sizes.",
          "Real experimentation breadth: multiple architectures attempted (TFT at H1/H4/M5, transformer, ConvLSTM, ConvBiLSTM, CNN), including a multi-horizon transfer experiment.",
          "Context awareness most retail bots skip: trading-session quality and economic-news windows down-weight confidence.",
        ],
        fr: [
          "Réellement de bout en bout : collecte → feature engineering → entraînement TFT → inférence → fusion de signaux → exécution d'ordres en direct → tableau de bord.",
          "IA explicable : chaque indicateur fournit une ligne de confiance Achat/Vente/Neutre transparente, les patterns sont notés séparément, puis fusionnés en une confiance globale plafonnée.",
          "Exécution axée risque : les unités sont déduites à rebours d'un risque monétaire fixe et de la distance de stop, via la pip-location OANDA et la conversion de devise — pas des lots fixes.",
          "Vraie ampleur d'expérimentation : plusieurs architectures testées (TFT en H1/H4/M5, transformer, ConvLSTM, ConvBiLSTM, CNN), dont un transfert multi-horizon.",
          "Conscience du contexte que la plupart des bots ignorent : la qualité de session et les fenêtres d'actualités économiques réduisent la confiance.",
        ],
      },
      metrics: [
        {
          label: { en: "Best TFT H1 val. loss", fr: "Meilleure perte val. TFT H1" },
          value: "0.000680",
          note: {
            en: "A regression loss on tiny log-returns — not a profitability figure.",
            fr: "Une perte de régression sur de minuscules log-rendements — pas une mesure de rentabilité.",
          },
        },
        { label: { en: "Historical span", fr: "Période historique" }, value: "2016–2024" },
        {
          label: { en: "Architectures explored", fr: "Architectures explorées" },
          value: "5",
          note: { en: "TFT, Transformer, ConvLSTM, ConvBiLSTM, CNN", fr: "TFT, Transformer, ConvLSTM, ConvBiLSTM, CNN" },
        },
        { label: { en: "Bot poll interval", fr: "Intervalle du bot" }, value: "10s" },
      ],
      pipeline: [
        {
          label: { en: "Data Collection", fr: "Collecte de données" },
          desc: { en: "OANDA v3 API · ~8 yrs of M5/H1/H4 candles", fr: "API OANDA v3 · ~8 ans de chandelles M5/H1/H4" },
        },
        {
          label: { en: "Feature Engineering", fr: "Ingénierie de features" },
          desc: { en: "Bollinger, ATR, RSI, MACD, EMAs, patterns, time", fr: "Bollinger, ATR, RSI, MACD, EMA, patterns, temps" },
        },
        {
          label: { en: "TFT Model", fr: "Modèle TFT" },
          desc: { en: "Temporal Fusion Transformer · PyTorch Lightning", fr: "Temporal Fusion Transformer · PyTorch Lightning" },
        },
        {
          label: { en: "Decision Engine", fr: "Moteur de décision" },
          desc: { en: "Fuse prediction + indicator confidence + patterns", fr: "Fusion prédiction + confiance indicateurs + patterns" },
        },
        {
          label: { en: "Risk & Execution", fr: "Risque & Exécution" },
          desc: { en: "Fixed-cash-risk sizing · live OANDA orders", fr: "Dimensionnement à risque fixe · ordres OANDA en direct" },
        },
        {
          label: { en: "Live Dashboard", fr: "Tableau de bord" },
          desc: { en: "Streamlit · session quality · news windows", fr: "Streamlit · qualité de session · fenêtres d'actualités" },
        },
      ],
      repoPath: "Forex_algo/code",
      links: [{ label: "GitHub", href: GITHUB_URL, kind: "github" }],
    },

    {
      id: "jd-market-v2",
      name: "JD Market v2",
      category: "web-app",
      status: "prototype",
      featured: true,
      accent: "violet",
      tagline: {
        en: "A SaaS platform for marketplace research & monitoring, built on a Python microservices backend.",
        fr: "Une plateforme SaaS de recherche et de surveillance de marketplace, bâtie sur un backend microservices Python.",
      },
      summary: {
        en: "JD Market v2 is a SaaS platform for marketplace research and monitoring, built on a Python microservices architecture. A Django gateway fronts a set of FastAPI services, with a dedicated scheduler/worker tier handling scraping and background jobs, data APIs serving collected information, and a notification system alerting users on changes. Containerized with Docker and backed by PostgreSQL and Redis, with pytest coverage and GitHub Actions CI.",
        fr: "JD Market v2 est une plateforme SaaS de recherche et de surveillance de marketplace, bâtie sur une architecture microservices Python. Une passerelle Django expose un ensemble de services FastAPI, avec une couche scheduler/worker dédiée au scraping et aux tâches de fond, des API de données et un système de notifications qui alerte les utilisateurs lors de changements. Conteneurisée avec Docker, appuyée par PostgreSQL et Redis, avec couverture pytest et CI GitHub Actions.",
      },
      problem: {
        en: "Monitoring online marketplaces requires continuously collecting data from external sources, processing it reliably in the background, and exposing it through clean APIs while keeping components independently deployable and testable.",
        fr: "Surveiller des marketplaces en ligne exige de collecter en continu des données externes, de les traiter de façon fiable en arrière-plan et de les exposer via des API propres, tout en gardant des composants déployables et testables indépendamment.",
      },
      approach: {
        en: "Designed a multi-service system with clear separation of concerns: a Django gateway as entry point, FastAPI microservices for data APIs, and a scheduler/worker tier for asynchronous scraping. Used PostgreSQL for persistence and Redis for caching and task coordination, added a notification layer, containerized everything with Docker, and wired up pytest and GitHub Actions for testing and CI.",
        fr: "Conception d'un système multi-services à responsabilités claires : une passerelle Django en point d'entrée, des microservices FastAPI pour les API de données, et une couche scheduler/worker pour le scraping asynchrone. PostgreSQL pour la persistance et Redis pour le cache et la coordination des tâches, une couche de notifications, le tout conteneurisé avec Docker, et pytest + GitHub Actions pour les tests et la CI.",
      },
      architecture: {
        en: "A Django gateway routes requests to FastAPI microservices; a scheduler/worker tier runs scraping and background jobs coordinated through Redis; PostgreSQL provides durable storage; a notification service emits alerts; all components run as Docker containers with pytest and GitHub Actions for testing and CI.",
        fr: "Une passerelle Django route les requêtes vers des microservices FastAPI ; une couche scheduler/worker exécute le scraping et les tâches de fond coordonnées par Redis ; PostgreSQL assure le stockage durable ; un service de notifications émet des alertes ; tous les composants tournent en conteneurs Docker avec pytest et GitHub Actions.",
      },
      outcome: {
        en: "A containerized, multi-service platform that ingests marketplace data on a schedule, serves it through dedicated APIs, and notifies on changes, with an automated test suite and CI pipeline supporting iterative development.",
        fr: "Une plateforme conteneurisée multi-services qui ingère des données de marketplace selon un calendrier, les sert via des API dédiées et notifie les changements, avec une suite de tests automatisés et une CI soutenant le développement itératif.",
      },
      recruiterPitch: {
        en: "Demonstrates the ability to architect and ship a real SaaS product end to end — a containerized, multi-service Python backend with microservices, async workers, scraping pipelines, and full CI/CD.",
        fr: "Démontre la capacité à concevoir et livrer un véritable produit SaaS de bout en bout — un backend Python conteneurisé multi-services avec microservices, workers asynchrones, pipelines de scraping et CI/CD complète.",
      },
      pipeline: [
        {
          label: { en: "API Gateway", fr: "Passerelle API" },
          desc: { en: "Django · auth, routing, entry point", fr: "Django · auth, routage, point d'entrée" },
        },
        {
          label: { en: "Microservices", fr: "Microservices" },
          desc: { en: "FastAPI data services", fr: "Services de données FastAPI" },
        },
        {
          label: { en: "Async Workers", fr: "Workers async" },
          desc: { en: "Scheduler + scraping jobs", fr: "Scheduler + tâches de scraping" },
        },
        {
          label: { en: "Data Layer", fr: "Couche données" },
          desc: { en: "PostgreSQL + Redis", fr: "PostgreSQL + Redis" },
        },
        {
          label: { en: "Notify & Ship", fr: "Alertes & Livraison" },
          desc: { en: "Alerts · Docker · GitHub Actions CI", fr: "Alertes · Docker · CI GitHub Actions" },
        },
      ],
      techStack: ["Python", "Django", "FastAPI", "PostgreSQL", "Redis", "Docker", "pytest", "GitHub Actions"],
      skillsShown: {
        en: ["Microservices architecture", "API design", "Async workers & scheduling", "Web scraping", "CI/CD", "Docker containerization", "PostgreSQL", "Redis", "Automated testing"],
        fr: ["Architecture microservices", "Conception d'API", "Workers asynchrones & planification", "Web scraping", "CI/CD", "Conteneurisation Docker", "PostgreSQL", "Redis", "Tests automatisés"],
      },
      features: {
        en: [
          "Django gateway fronting multiple FastAPI services",
          "Scheduler and worker tier for background scraping and jobs",
          "Data APIs serving collected marketplace information",
          "Notification system for change alerts",
          "Dockerized deployment with PostgreSQL and Redis",
          "Automated pytest suite and GitHub Actions CI pipeline",
        ],
        fr: [
          "Passerelle Django exposant plusieurs services FastAPI",
          "Couche scheduler et worker pour le scraping et les tâches de fond",
          "API de données servant l'information de marketplace collectée",
          "Système de notifications pour les alertes de changement",
          "Déploiement dockerisé avec PostgreSQL et Redis",
          "Suite pytest automatisée et pipeline CI GitHub Actions",
        ],
      },
      highlights: {
        en: [
          "Microservices split between a Django gateway and FastAPI services for separation of concerns",
          "Dedicated async scheduler/worker tier decoupling scraping from request handling",
          "Full containerization with PostgreSQL and Redis as backing services",
          "CI/CD via GitHub Actions with pytest-based test coverage",
        ],
        fr: [
          "Microservices répartis entre une passerelle Django et des services FastAPI",
          "Couche scheduler/worker asynchrone découplant le scraping du traitement des requêtes",
          "Conteneurisation complète avec PostgreSQL et Redis comme services d'appui",
          "CI/CD via GitHub Actions avec couverture de tests pytest",
        ],
      },
      metrics: [],
      repoPath: "JD Market v2",
      links: [{ label: "GitHub", href: GITHUB_URL, kind: "github" }],
    },

    {
      id: "amazon-nlp-reviews",
      name: "Amazon NLP Reviews",
      category: "nlp",
      status: "prototype",
      featured: true,
      accent: "rose",
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
      links: [{ label: "GitHub", href: GITHUB_URL, kind: "github" }],
    },

    {
      id: "data-engineering-stack",
      name: "Data Engineering Stack",
      category: "data-engineering",
      status: "coursework",
      featured: false,
      accent: "lime",
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
      links: [{ label: "GitHub", href: GITHUB_URL, kind: "github" }],
    },

    {
      id: "ds-diploma-portfolio",
      name: "Data Science Diploma Portfolio",
      category: "coursework",
      status: "coursework",
      featured: false,
      accent: "violet",
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
      role: { en: "Systems Administrator / IT Operations", fr: "Administrateur systèmes / Opérations TI" },
      company: "Gildan",
      location: "Montréal, QC",
      period: "Feb 2020 – Oct 2025",
      bullets: {
        en: [
          "Administered Windows Server, Active Directory, VMware, DNS/DHCP, VPN, and Microsoft 365 environments.",
          "Automated recurring operational tasks with Python and PowerShell to cut manual effort and speed resolution.",
          "Built a monitoring and data-comparison automation: hourly snapshots, desync detection, alerts, and reports.",
          "Diagnosed complex incidents through log analysis and root-cause investigation, coordinating with infra/security.",
        ],
        fr: [
          "Administration d'environnements Windows Server, Active Directory, VMware, DNS/DHCP, VPN et Microsoft 365.",
          "Automatisation de tâches opérationnelles récurrentes avec Python et PowerShell pour réduire l'effort manuel et accélérer la résolution.",
          "Mise en place d'une automatisation de surveillance et de comparaison de données : snapshots horaires, détection de désynchronisation, alertes et rapports.",
          "Diagnostic d'incidents complexes par analyse de logs et recherche de cause racine, en coordination avec infra/sécurité.",
        ],
      },
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
      degree: { en: "Data Science Diploma", fr: "Diplôme en science des données" },
      school: "Concordia University",
      detail: {
        en: "Data analysis, programming, machine learning, data processing, and problem solving.",
        fr: "Analyse de données, programmation, apprentissage automatique, traitement de données et résolution de problèmes.",
      },
    },
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
      en: "Python developer with 5+ years of IT experience specializing in data science, machine learning, and generative AI. Builds complete systems end to end — from data collection and feature engineering to model training in PyTorch and Scikit-Learn and deployment behind FastAPI, Flask, and Django backends. Flagship work includes a full-lifecycle EUR/USD trading research system using Temporal Fusion Transformers wired into a live broker API with risk management, plus microservices platforms, NLP sentiment applications, and hands-on data-engineering pipelines across Docker, Mage, BigQuery, dbt, Spark, and Kafka. Backed by a Data Science diploma and a strong systems and automation background. French native, professional English.",
      fr: "Développeur Python avec plus de 5 ans d'expérience TI, spécialisé en science des données, machine learning et IA générative. Conçoit des systèmes complets de bout en bout — de la collecte et l'ingénierie des données à l'entraînement de modèles avec PyTorch et Scikit-Learn, jusqu'au déploiement derrière des backends FastAPI, Flask et Django. Réalisations phares : un système de recherche de trading EUR/USD couvrant tout le cycle de vie avec des Temporal Fusion Transformers reliés à une API de courtier en direct et une gestion du risque, des plateformes microservices, des applications NLP de sentiment, et des pipelines d'ingénierie de données pratiques sur Docker, Mage, BigQuery, dbt, Spark et Kafka. Fort d'un diplôme en science des données et d'un solide bagage en systèmes et automatisation. Français natif, anglais professionnel.",
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
    catData: { en: "Data Engineering", fr: "Ingénierie de données" },
    catWeb: { en: "SaaS / Backend", fr: "SaaS / Backend" },
    catNlp: { en: "NLP", fr: "NLP" },
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

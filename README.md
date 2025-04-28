# Bibliotheque-numerique
Projet  open-source  de bibliothèque numérique avec Tailwind CSS et Firebase

digital-library/
├── public/
│   ├── index.html
│   ├── assets/
│   │   ├── images/          # Logos, icônes, images statiques
│   │   └── fonts/           # Polices personnalisées
│   └── robots.txt
│
├── src/
│   ├── app/                 # Configuration de base de l'app
│   │   ├── store/           # State management (Redux, Zustand)
│   │   ├── hooks/           # Hooks personnalisés globaux
│   │   └── App.jsx          # Composant racine
│   │
│   ├── features/            # Organisation par fonctionnalités
│   │   ├── catalog/         # Catalogue des documents
│   │   │   ├── components/  # Composants spécifiques
│   │   │   ├── api/         # Appels API
│   │   │   ├── slices/      # Redux slices
│   │   │   └── types/       # Types TS (si utilisé)
│   │   │
│   │   ├── reader/          # Fonctionnalité de lecture
│   │   ├── search/          # Système de recherche
│   │   ├── user/            # Gestion utilisateur
│   │   └── admin/           # Interface admin (si nécessaire)
│   │
│   ├── entities/            # Entités métiers (modèles de données)
│   │   ├── book.entity.js   # Modèle Livre
│   │   ├── user.entity.js   # Modèle Utilisateur
│   │   └── loan.entity.js   # Modèle Emprunt
│   │
│   ├── pages/               # Pages principales
│   │   ├── Home/
│   │   ├── Library/
│   │   ├── BookDetail/
│   │   ├── Reading/
│   │   └── Auth/
│   │
│   ├── widgets/             # Widgets complexes réutilisables
│   │   ├── BookCard/
│   │   ├── ReadingProgress/
│   │   └── AdvancedSearch/
│   │
│   ├── shared/              # Éléments partagés
│   │   ├── ui/              # Composants UI génériques
│   │   │   ├── buttons/
│   │   │   ├── modals/
│   │   │   └── ...
│   │   ├── lib/             # Librairies/helpers
│   │   ├── contexts/        # Contextes globaux
│   │   └── api/             # Client API global
│   │
│   ├── assets/              # Assets dynamiques
│   │   ├── book-covers/     # Couvertures de livres
│   │   └── audio/          # Fichiers audio (extraits)
│   │
│   ├── styles/              # Styles globaux
│   │   ├── themes/         # Système de thème
│   │   ├── variables.scss  # Variables CSS
│   │   └── global.scss     # Styles globaux
│   │
│   ├── router/              # Configuration du routing
│   │   ├── routes.jsx
│   │   └── PrivateRoute.jsx # Pour les routes protégées
│   │
│   ├── utils/               # Utilitaires
│   │   ├── date.js          # Helpers dates
│   │   ├── text.js         # Manipulation texte
│   │   └── epub.js         # Parsing EPUB (si nécessaire)
│   │
│   └── main.jsx             # Point d'entrée
│   
├── .env                     # Variables d'environnement
├── .env.example
└── package.json

src/
├── components/
│   ├── ui/                  # Composants d'interface génériques
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Modal/
│   │   └── ...
│   │
│   ├── layout/              # Composants de mise en page
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Sidebar/
│   │   └── ...
│   │
│   └── features/            # Composants spécifiques aux fonctionnalités
│       ├── books/
│       ├── reader/
│       ├── search/
│       └── ...
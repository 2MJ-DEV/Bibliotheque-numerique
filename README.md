# Bibliotheque-numerique
Projet  open-source  de bibliothèque numérique avec Tailwind CSS et Firebase ou supabase (ou alors des ficher json)

BIBLIOTHEQUE-NUMERIQUE/
├── public/                  # Assets statiques (images, etc.)
│   └── assets/
│       ├── covers/          # Couvertures de livres
│       └── icons/           # Icônes SVG
│
├── src/
│   ├── auth/                # Gestion authentification
│   │   ├── login.js         # Validation formulaire
│   │   └── session.js       # Vérification rôle (localStorage)
│   │
│   ├── pages/               # Pages dynamiques
│   │   ├── admin/           # Dashboard admin
│   │   │   ├── index.html   # Template admin
│   │   │   └── admin.js     # Logique admin
│   │   │
│   │   └── lecteur/         # Espace lecteur
│   │       ├── index.html   # Template lecteur
│   │       └── lecteur.js   # Logique lecteur
│   │
│   ├── styles/
│   │   ├── main.css         # Styles globaux
│   │   └── tailwind.css     # Fichier compilé
│   │
│   ├── utils/               # Utilitaires
│   │   ├── api.js           # Mock API (fetch)
│   │   └── constants.js     # Rôles, routes, etc.
│   │
│   └── index.html           # Page d'accueil/connexion
│
├── vite.config.js           # Configuration Vite
├── package-lock.json
├── package.json
└── README.md

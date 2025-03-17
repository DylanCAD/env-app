# Mon Projet React

## Installation

1. Clonez le repository :
    git clone https://github.com/votre-utilisateur/env-app.git

2. Allez dans le répertoire du projet :
    cd env-app

3. Installez les dépendances :
    npm install

## Lancer le projet en production
1. Pour compiler le projet en mode production, utilisez la commande suivante :
    npm run prod

    Cela compilera votre projet et exécutera les tests avant la compilation.
    - Le projet sera optimisé pour la production et un bundle final sera généré.
    - Vous pourrez utiliser ce bundle dans un environnement de production.

## Lancer le projet en développement
1. Pour démarrer le serveur de développement, exécutez la commande suivante :
    npm run dev
    
    Cela lancera l'application en mode développement sur http://localhost:8080/.

## Lancer les tests
1. Pour exécuter les tests unitaires, utilisez la commande :
    npm test

## Générer la documentation
1. Pour générer la documentation de votre projet à l'aide de JSDoc, exécutez la commande suivante :
    npm run doc

    Cela générera la documentation dans le dossier `docs/`. Vous pourrez alors ouvrir le fichier `index.html` dans ce dossier pour consulter la documentation de votre projet.

## Vérifier la qualité du code (Linting avec ESLint)
1. Pour exécuter ESLint et vérifier la qualité de votre code, utilisez la commande suivante :
    npm run lint

    Cela exécutera ESLint pour analyser votre code et vérifier s'il respecte les règles définies. Si des problèmes sont détectés, ESLint vous les indiquera.

## Configuration des variables d'environnement

Ce projet utilise un fichier `.env` pour stocker des informations sensibles comme les mots de passe et les clés API.

1. Créez un fichier `.env` à la racine du projet.
2. Ajoutez-y vos variables d'environnement comme ceci :
   ```env
   DATABASE_URL=mongodb://user:password@localhost:27017/mydatabase
   SECRET_KEY=mysecretkey
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles.scss';

/**
 * Composant principal de l'application
 * Ce composant affiche un titre et un texte de test pour démontrer l'utilisation de hooks et autres fonctionnalités.
 * 
 * @returns {JSX.Element} Le rendu du composant App.
 */
const App = () => {
return (
    <div>
      <h1>Bienvenue dans mon application React !</h1>
      <p>Cette application est en train de tester le hook pre-commit.</p>
    </div>
  );
};

/**
 * Récupère l'élément DOM où le composant sera monté
 * 
 * @type {ReactDOM.Root}
 */
const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Rendu du composant App dans le DOM
 * Utilise la méthode render() pour rendre le composant dans le DOM via le root React.
 */
root.render(<App />);
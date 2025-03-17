import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles.scss';

const App = () => {
  return (
    <div>
      <h1>Bienvenue dans mon application React !</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

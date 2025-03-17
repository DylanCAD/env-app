import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles.scss';

const App = () => {
  return (
    <div>
      <h1>Bienvenue dans mon application React !</h1>
      <p>Cette application est en train de tester le hook pre-commit.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

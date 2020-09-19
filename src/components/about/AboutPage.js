import React from 'react';

const spanStyle = {
  fontSize: '15px',
  color: '#757575',
};

const AboutPage = () => (
  <div className="jumbotron">
    <h1>About</h1>
    <p>
      An application that displays information about pokemons.
    </p>
    <p>
      <span style={spanStyle}>
        Created by
        <a href="https://www.linkedin.com/in/davideligarcia/" target="_blank" rel="noreferrer"> David García </a>
        Github:
        <a href="https://github.com/davitomix" target="_blank" rel="noreferrer"> @davitomix</a>
      </span>
    </p>
  </div>
);

export default AboutPage;

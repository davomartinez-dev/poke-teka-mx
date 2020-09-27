import React from 'react';

const spanStyle = {
  fontSize: '15px',
  color: '#757575',
};

const AboutPage = () => (
  <div className="jumbotron">
    <h1>About</h1>
    <p>
      <span style={spanStyle}>
        Created by
        <a href="https://www.linkedin.com/in/davidelimartinez/" target="_blank" rel="noreferrer"> David Martínez </a>
        <br />
        Github:
        <a href="https://github.com/davomartinez-dev" target="_blank" rel="noreferrer"> @davomartinez-dev</a>
        <br />
        Twitter:
        <a href="https://twitter.com/davomartinezdev" target="_blank" rel="noreferrer"> @davomartinezdev </a>
      </span>
    </p>
  </div>
);

export default AboutPage;

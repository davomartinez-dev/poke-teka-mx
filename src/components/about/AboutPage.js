/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const spanStyle = {
  fontSize: '15px',
  color: '#757575',
};

const AboutPage = () => (
  <div className="jumbotron">
    <h1>About</h1>
    <p> This application was built with business specifications. Some of them are: </p>
    <ul>
      <li>Manage calls with API, in this case, calls are made dynamically based on the user&apos;s position.</li>
      <li>The data that was retrieved from the API should be stored in the Redux store.</li>
      <li>Integrate the functionality of filtering the elements by category.</li>
      <li>Implement the feature of filtering the elements by text written by the user.</li>
      <li>Every page, the main page and pages for each item, should have a unique route within the SPA.</li>
      <li>App tested with Enzyme.</li>
      <li>The use of react hooks and functional components was prioritized over class components.</li>
    </ul>
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

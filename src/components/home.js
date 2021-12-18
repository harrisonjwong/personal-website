import React from 'react';

const Home = () => {
  const NORTHEASTERN = 'https://northeastern.edu';
  const GITHUB = 'https://github.com/harrisonjwong';
  const LINKEDIN = 'https://linkedin.com/in/harrisonjwong';
  const RESUME = 'https://raw.githubusercontent.com/harrisonjwong/resume/master/Harrison_Wong_Resume.pdf';
  const CAPITAL_ONE = 'https://capitalone.com';
  const CISCO = 'https://cisco.com';
  const VERISK = 'https://poweradvocate.com';
  return (
    <div className='container-fluid'>
      <h1>Harrison Wong</h1>
      <h3>About</h3>
      <p>
        I am currently a software engineer at <a href={CAPITAL_ONE}>Capital One</a>. Formerly I worked at <a href={CISCO}>Cisco</a> and <a href={VERISK}>Verisk (PowerAdvocate)</a>.
        <br/>
        I graduated from <a href={NORTHEASTERN}>Northeastern University</a> in May 2021 with a Bachelors in Computer Engineering and Computer Science.
      </p>
      <h3>Links</h3>
      <ul>
        <li>
          See some of my work and projects
          on <a target='_blank' rel='noopener noreferrer' href={GITHUB}>GitHub</a>.
        </li>
        <li>
          Connect with me
          on <a target='_blank' rel='noopener noreferrer' href={LINKEDIN}>LinkedIn</a>.
        </li>
        <li>
          Learn more about my professional experience
          on my <a target='_blank' rel='noopener noreferrer' href={RESUME}>resume</a>.
        </li>
        <li>
          Contact me at harrisonjwong at gmail dot com.
        </li>
      </ul>
    </div>
  )
}

export default Home;
import React from 'react';

const Home = () => {
  const NORTHEASTERN = 'https://northeastern.edu';
  const GITHUB = 'https://github.com/harrisonjwong';
  const LINKEDIN = 'https://linkedin.com/in/harrisonjwong';
  const RESUME = 'https://raw.githubusercontent.com/harrisonjwong/resume/master/Harrison_Wong_Resume.pdf';
  const CAPITAL_ONE = 'https://www.capitalonecareers.com/';
  const AWS_CERT = 'https://www.credly.com/badges/52d1e5fc-bbdd-4889-a668-d2ca532497a2/public_url';
  const BLOOMBERG = 'https://www.bloomberg.com/company/';
  return (
    <div className='container-fluid'>
      <h1>Harrison Wong</h1>
      <h3>About</h3>
      <p>
        I am currently a software engineer at <a href={BLOOMBERG}>Bloomberg</a> in New York. I was previously at <a href={CAPITAL_ONE}>Capital One</a>.
        <br/>
        I have a B.S. in Computer Engineering/Computer Science from <a href={NORTHEASTERN}>Northeastern University</a>. I also have an <a href={AWS_CERT}>AWS Solutions Architect</a> certification.
      </p>
      <h3>Links</h3>
      <ul>
        <li>
          Connect with me
          on <a target='_blank' rel='noopener noreferrer' href={LINKEDIN}>LinkedIn</a>.
        </li>
        <li>
          Learn more about my professional experience
          on my <a target='_blank' rel='noopener noreferrer' href={RESUME}>resume</a>.
        </li>
        <li>
          See some of my work and projects
          on <a target='_blank' rel='noopener noreferrer' href={GITHUB}>GitHub</a>.
        </li>
        <li>
          Contact me at harrisonjwong at gmail dot com.
        </li>
      </ul>
    </div>
  )
}

export default Home;
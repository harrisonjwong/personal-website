import React from 'react';

const Home = () => {
  const NORTHEASTERN = 'https://northeastern.edu';
  const GITHUB = 'https://github.com/harrisonjwong';
  const LINKEDIN = 'https://linkedin.com/in/harrisonjwong';
  const RESUME = 'https://raw.githubusercontent.com/harrisonjwong/resume/master/Harrison_Wong_Resume.pdf';
  return (
    <div className='container-fluid'>
      <h1>Welcome to Harrison Wong's website</h1>
      <h3>About</h3>
      <p>
        I'm a software engineer and a graduate of <a href={NORTHEASTERN}>Northeastern University</a>.
        <br/>
        I completed my undergrad in May 2021 studying Computer Engineering and Computer Science.
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
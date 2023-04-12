import React from 'react';
import { GrLinkedin, GrGithub, GrTwitter } from 'react-icons/gr';
import { FaAngellist } from 'react-icons/fa';

function WelcomePage() {
  return (
    <div className="section2">
      <div className="section2-container">
        <h1>
          I&apos;m Ahmed
          <br />
          {' '}
          Glad to see
          <br />
          {' '}
          you!
        </h1>
        <p>
          I&apos;m a software developer! I can help you build a product,
          feature or website. Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
        <p className="connect">Let&apos;s Connect</p>
        <ul className="socialmeadia-container">
          <li className="icons"><a href="https://www.linkedin.com/in/ahmednazirmusah/"><GrLinkedin className="media-links" alt="linkedin" /></a></li>
          <li className="icons"><a href="https://twitter.com/ahmednazirmusah"><GrTwitter className="media-links" alt="twitter" /></a></li>
          <li className="icons"><a href="https://github.com/AhmedNazirMusah"><GrGithub className="media-links" alt="github" /></a></li>
          <li className="icons"><a href="https://wellfound.com/u/ahmed-nazir-musah"><FaAngellist className="media-links" alt="angellist" /></a></li>
        </ul>
      </div>
    </div>
  );
}

export default WelcomePage;

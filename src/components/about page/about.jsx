import React from 'react';
import {
  GrLinkedin, GrGithub, GrTwitter, GrReactjs,
} from 'react-icons/gr';
import { FaAngellist } from 'react-icons/fa';
import { BsGit } from 'react-icons/bs';
import { TbBrandRedux } from 'react-icons/tb';
import { DiRuby, DiNodejs, DiPostgresql } from 'react-icons/di';
import {
  SiRubyonrails, SiNetlify, SiWebpack, SiJest,
} from 'react-icons/si';
import javascript from '../../assets/javascript.svg';
import html from '../../assets/HTML5.png';
import css from '../../assets/CSS3.png';

const About = () => (
  <div>
    <section className="about-section">
      <div className="abt-me" id="About-me">
        <div>
          <h1>
            About
            <br />
            Myself
          </h1>
          <p className="about-text">Hello I&apos;m Ahmed Nazir, I have been collaborating and working remotely for the past ten months with other professional developers worldwide, which makes me a perfect fit for your search for an experienced remote developer with a passion for building web applications.I&apos;d love to schedule a brief Zoom call to discuss any follow-up questions. Kindly reply with a day and time that is convenient for you. Thank you.</p>
          <p className="connect">Let&apos;s Connect</p>
          <ul className="socialmeadia-container">
            <li className="icons"><a href="https://www.linkedin.com/in/ahmednazirmusah/"><GrLinkedin className="media-links" alt="linkedin" /></a></li>
            <li className="icons"><a href="https://twitter.com/ahmednazirmusah"><GrTwitter className="media-links" alt="twitter" /></a></li>
            <li className="icons"><a href="https://github.com/AhmedNazirMusah"><GrGithub className="media-links" alt="github" /></a></li>
            <li className="icons"><a href="https://wellfound.com/u/ahmed-nazir-musah"><FaAngellist className="media-links" alt="angellist" /></a></li>
          </ul>
          {/* <a href="#" class="button"><h4>Get my resume</h4></a> */}
        </div>
        <div>
          <span>Front End</span>
          <ul className="box">
            <li className="lang-child">
              <img src={javascript} alt="js-icon" />
              JavaScript
            </li>
            <li className="lang-child">
              <img src={html} alt="html-icon" />
              HTML
            </li>
            <li className="lang-child">
              <img src={css} alt="css-icon" />
              CSS
            </li>
            <li className="lang-child">
              <GrReactjs className="p-img" />
              React
            </li>
            <li className="lang-child">
              <TbBrandRedux className="p-img" />
              Redux
            </li>
          </ul>
          <span>Back End</span>
          <ul className="box">
            <li className="lang-child">
              <DiRuby className="p-img" />
              Ruby
            </li>
            <li className="lang-child">
              <SiRubyonrails className="p-img" />
              Ruby On Rails
            </li>
            <li className="lang-child">
              <DiNodejs className="p-img" />
              Nodejs
            </li>
            <li className="lang-child">
              <DiPostgresql className="p-img" />
              PostgreSQL
            </li>
          </ul>
          <span>Tools</span>
          <ul className="box">
            <li className="lang-child">
              <BsGit className="p-img" />
              Git
            </li>
            <li className="lang-child">
              <SiNetlify className="p-img" />
              Netlify
            </li>
            <li className="lang-child">
              <SiWebpack className="p-img" />
              Webpack
            </li>
            <li className="lang-child">
              <SiJest className="p-img" />
              Jest
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default About;

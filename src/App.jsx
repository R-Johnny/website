import { useState, useRef } from 'react'
import headshot from "./assets/headshot-crop.jpg"
import logo from "./assets/rj-high-resolution-logo-square.png"
import github from "./assets/github-seeklogo.svg"
import linkedin from "./assets/linkedin-new-2020-seeklogo.svg"
import codewars from "./assets/codewars-svgrepo-com.svg"
import python from "./assets/python-svgrepo-com.svg"
import django from "./assets/djangoproject-svgrepo-com.svg"
import javascript from "./assets/javascript.svg"
import react from "./assets/react-svgrepo-com.svg"
import docker from "./assets/docker-svgrepo-com.svg"
import linux from "./assets/linux-svgrepo-com.svg"
import neovim from "./assets/Neovim-mark.svg.png"
import budgetScreenshot from "./assets/budgets-screenshot.png"
import connectionsScreenshot from "./assets/connections-screenshot.png"
import './App.css'

function App() {
  const targetSkills = useRef(null);
  const targetProjects = useRef(null);

  const handleScroll = (location) => {
    if (location.current) {
      location.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <>
      <header>
        <div className="header">
          <div className="header-left">
            <img src={logo} className="logo" />
            <div>Robert Johnny</div>
          </div>
          <div className="header-right">
            <a onClick={() => handleScroll(targetSkills)}>Skills</a>
            <a onClick={() => handleScroll(targetProjects)}>Projects</a>
            <a>Resume</a>
          </div>
        </div>
      </header>
      <main>
        <div className="about-me-background">
          <div className="title-card">
            <img className="picture" src={headshot} width="300" />
            <div className="about-me-text">
              <h1>Hello, I'm Rob.</h1>
              <h2>Curious, Personable, and Career Foucsed</h2>
              <p>A little more about me! I'm a passionate problem solver with a relentless drive for continuous learning. I gleam great enjoyment from solving difficult problems and am always seeking opportunities to expand my knowledge and skills, in technologies, whether new or old. I am committed to finding innovative solutions that deliver meaningful results to real-world issues that affect people in their daily lives. When I'm not working with technology. I enjoy dialling in my morning espresso, hiking in the mountains, or tinkering with my home server.</p>
            </div>
          </div>
          <div>
            <button className="btn">Download CV</button>
            <button onClick={() => handleScroll(targetSkills)} className="btn">More About Me <i className="fa-solid fa-angle-down"></i></button>
          </div>
          <div className="social">
            <a href="https://github.com/R-Johnny" className="link">
              <img src={github}
                className="svg"
                title="Github"
                label="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/robert-johnny-33a79b40/"
              className="link">
              <img className="svg" src={linkedin} title="LinkedIn" />
            </a>
            <a href="https://www.codewars.com/users/BJohnny" className="link">
              <img
                className="svg"
                src={codewars} title="Code Wars" />
            </a>
          </div>
        </div>
        <div className="content" ref={targetSkills}>
          <h1>Skills</h1>
          <div className="skills">
            <div id="container">
              <div className="product-details">
                <h1>Javascript</h1>
                <p className="information">Primary Lanauge</p>
              </div>
              <div className="product-image">
                <img className="svg" src={javascript} title="JavaScript" />
              </div>
            </div>
            <div id="container">
              <div className="product-details">
                <h1>Python</h1>
                <p className="information">First Language</p>
                <div className="control">
                </div>
              </div>
              <div className="product-image">
                <img className="svg" src={python} title="Python" />
              </div>
            </div>
            <div id="container">
              <div className="product-details">
                <h1>React</h1>
                <p className="information"></p>
                <div className="control">
                </div>
              </div>
              <div className="product-image">
                <img className="svg" src={react} title="React" />
              </div>
            </div>
            <div id="container">
              <div className="product-details">
                <h1>Django</h1>
                <p className="information"></p>
                <div className="control">
                </div>
              </div>
              <div className="product-image">
                <img className="svg" src={django}
                  title="Django" />
              </div>
            </div>
            <div id="container">
              <div className="product-details">
                <h1>Docker</h1>
                <p className="information"></p>
                <div className="control">
                </div>
              </div>
              <div className="product-image">
                <img className="svg" src={docker} title="Docker" />
              </div>
            </div>

            <div id="container">
              <div className="product-details">
                <h1>Linux</h1>
                <p className="information"></p>
                <div className="control">
                  <button className="btn">
                  </button>
                </div>
              </div>
              <div className="product-image">
                <img className="svg" src={linux} title="Linux" />
              </div>
            </div>
          </div>

          <h1>Projects</h1>
          <div className="projects" ref={targetProjects}>
            <div className="project">
              <div>
                <h2>Budgets</h2>
                <div className="project-image-container"><img className="screenshot" src={budgetScreenshot} title="screenshot" /></div>
                <ul>
                  <li>An app for managing your personal finance.</li>
                  <li> Track monthly expenses and seek insight into your spending habits.</li>
                  <li>Featuring csv imports, monthly charts and more! </li>
                </ul>
              </div>
              <div className="tech">
                <div className="tech-buttons">
                  <a href="https://budget.rjohnny.xyz/"><button>Live View</button></a>
                  <a href="https://github.com/R-Johnny/budget"><button>Source</button></a>
                </div>
                <img className="svg-project" src={react} title="React" />
              </div>
            </div>
            <div className="project">
              <div>
                <h2>Connections Stats Tracker</h2>
                <div className="project-image-container"><img className="screenshot" src={connectionsScreenshot} title="screenshot" /></div>
                <ul>
                  <li>A companion app that tracks daily stats and archives old puzzles for New York Times Connections.</li>
                  <li> Friends List, Leaderboards, Web Scraping</li>
                </ul>
              </div>
              <div className="tech">
                <div className="tech-buttons">
                  <a href="https://rjohnny.xyz/stats/"><button>Live View</button></a>
                </div>
                <img className="svg-project" src={django} title="React" />
              </div>
            </div>
          </div>
        </div>
      </main >
    </>
  )
}

export default App

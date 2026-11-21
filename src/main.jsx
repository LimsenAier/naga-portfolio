import React from 'react';
import { createRoot } from 'react-dom/client';
import nagaShawl from "./assets/nagaShawl.jpeg";
import campus from "./assets/campus.png";
import { ArrowRight } from 'lucide-react';

import {
  Smartphone,
  Code2,
  BrainCircuit,
  Cpu,
  Database,
  GitBranch,
  Activity,
  Boxes,
  Terminal,
} from 'lucide-react';

import './styles.css';

const projects = [
  {
    number: '01',
    title: 'Naga Shawls Identifier',
    type: 'AI / ML MOBILE APPLICATION',
    description:
      'A mobile application that identifies traditional Naga shawls using image classification and machine learning.',
    tech: ['React Native', 'Python', 'PyTorch', 'VGG16'],
    image: nagaShawl,
    accent: 'naga',
  },
  {
    number: '02',
    title: 'CampusPlus',
    type: 'MOBILE APPLICATION',
    description:
      'A campus-focused mobile application designed to bring useful student activities and campus functionality together.',
    tech: ['React Native', 'Expo', 'JavaScript', 'Firebase'],
    image: campus,
    accent: 'campus',
  },
];


const skills = [
  { name: 'React Native', icon: Smartphone },
  { name: 'JavaScript', icon: Code2 },
  { name: 'Python', icon: Terminal },
  { name: 'AI / ML', icon: BrainCircuit },
  { name: 'PyTorch', icon: Cpu },
  { name: 'TensorFlow', icon: Cpu },
  
  { name: 'Git / GitHub', icon: GitBranch },
  { name: 'MATLAB', icon: Activity },

];

function App() {
  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <div className="site">

      {/* ================= NAVIGATION ================= */}

      <header className="nav">
        <button
          className="brand"
          onClick={() => go('home')}
        >
          L.
        </button>

        <nav>
          {['about', 'skills', 'projects', 'education', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => go(item)}
              >
                {item}
              </button>
            )
          )}
        </nav>
      </header>

      <main>

        {/* ================= HERO ================= */}

        <section id="home" className="hero">

          <div>

            <p className="eyebrow">
              ELECTRICAL & ELECTRONICS ENGINEERING · FULL STACK DEVELOPER
            </p>
            
            <h1 className="greeting">Hi I'm</h1>

            <h2 className="name">
               LIMSEN
            </h2>
            <h3>
              I turn ideas
              <br />
              <span>into useful things.</span>
            </h3>

            <p className="hero-text">
              BTech EEE student exploring software development,
              artificial intelligence, computer vision, mobile
              applications, and engineering systems.
            </p>

            <div className="hero-actions">

              <button
                className="primary"
                onClick={() => go('projects')}
              >
                View my work
              </button>

              <button
                className="secondary"
                onClick={() => go('contact')}
              >
                Get in touch
              </button>

            </div>

          </div>

          <div className="hero-mark">

            <div className="orbit one" />
            <div className="orbit two" />

            <div className="core">
              L
            </div>

          </div>

        </section>


        {/* ================= ABOUT ================= */}

        <section id="about" className="section">

          <div className="label">
            01 / ABOUT
          </div>

          <div className="two">

            <h2>
              Engineer by education.
              <br />
              <span>Builder by curiosity.</span>
            </h2>

            <div>

              <p>
                I am an Electrical & Electronics Engineering
                student with a strong interest in technology
                beyond the classroom. My work combines
                engineering fundamentals with software,
                AI, and mobile development.
              </p>

              <p>
                I enjoy taking an idea from a problem statement
                to a working prototype, learning the tools
                required along the way.
              </p>

            </div>

          </div>

        </section>


        {/* ================= SKILLS ================= */}

        <section id="skills" className="section">

          <div className="label">
            02 / SKILLS
          </div>

          <h2>
            Tools I work with.
          </h2>

          <div className="skills">

            {skills.map((skill) => {

              const Icon = skill.icon;

              return (
                <div
                  className="skill"
                  key={skill.name}
                >

                  <Icon
                    className="skill-icon"
                    size={22}
                    strokeWidth={1.8}
                  />

                  <span>
                    {skill.name}
                  </span>

                </div>
              );

            })}

          </div>

        </section>

      
{/* ================= PROJECTS ================= */}

<section id="projects" className="section projects-section">

  <div className="label">
    03 / PROJECTS
  </div>

  <div className="heading">
    <h2>SELECTED WORK.</h2>
    <span>02 PROJECTS</span>
  </div>

  <div className="projects-grid">

    {projects.map((project) => (

      <article
        className={`project-card ${project.accent}`}
        key={project.number}
      >

        {/* Project Screenshot */}

        <div className="project-image">
          <img
            src={project.image}
            alt={`${project.title} application preview`}
            loading="lazy"
          />

          <span className="image-number">
            {project.number}
          </span>
        </div>

        {/* Project Information */}

        <div className="project-content">

          <div className="project-top">
            <span className="project-type">
              {project.type}
            </span>

            <span className="project-index">
              {project.number} / 02
            </span>
          </div>

          <h3>{project.title}</h3>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-tech">
            {project.tech.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <button className="project-link">
            View Project <ArrowRight size={15} />
          </button>

        </div>

      </article>

    ))}

  </div>

</section>

        {/* ================= EDUCATION ================= */}

        <section
          id="education"
          className="section"
        >

          <div className="label">
            04 / EDUCATION
          </div>

          <div className="two">

            <div>

              <p className="muted">
                CURRENT
              </p>

              <h2>
                BTech Electrical &
                <br />
                Electronics Engineering
              </h2>

            </div>

            <p>
              Engineering studies covering electrical machines,
              power systems, control systems, signals, digital
              systems, electronics, MATLAB, Simulink, and
              related technical subjects.
            </p>

          </div>

        </section>


        {/* ================= EXPLORING ================= */}

        <section className="section">

          <div className="label">
            05 / EXPLORING
          </div>

          <h2>
            Currently exploring.
          </h2>

          <div className="pills">

            {[
              'Full-Stack Development',
              'Cybersecurity',
              'Generative AI',
              'Computer Vision',
              'Mobile Development',
            ].map((item) => (

              <span key={item}>
                {item}
              </span>

            ))}

          </div>

        </section>


        {/* ================= CONTACT ================= */}

        <section
          id="contact"
          className="contact"
        >

          <div className="label">
            06 / CONTACT
          </div>

          <h2>
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p>
            Open to internships, projects, collaboration,
            and technical opportunities.
          </p>

          <div className="contact-links">

            <a
              href="https://github.com/LimsenAier"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/LimsenAier"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a href="mailto:limsen098@gmail.com">
              Email ↗
            </a>

          </div>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © 2026 NS. PORTFOLIO
        </span>

        <span>
          EEE · AI / ML · SOFTWARE
        </span>

      </footer>

    </div>
  );
}


createRoot(
  document.getElementById('root')
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
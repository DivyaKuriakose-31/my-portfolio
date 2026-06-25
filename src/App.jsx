import React, { useState } from 'react';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Dark, sophisticated palette for Divya - UI/UX Designer & Developer
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      backgroundColor: '#121214', // Dark background
      color: '#e2e8f0', // Light text
      lineHeight: '1.6',
      margin: 0,
      padding: 0,
    },
    navbar: {
      position: 'sticky',
      top: 0,
      backgroundColor: '#1a1a1e',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem 5%',
      zIndex: 1000,
      borderBottom: '1px solid #2d2d34',
    },
    navLinks: {
      display: 'flex',
      gap: '1.5rem',
      listStyle: 'none',
      alignItems: 'center',
      margin: 0,
      padding: 0,
    },
    navLink: (active) => ({
      textDecoration: 'none',
      color: active ? '#9f7aea' : '#a0aec0', // Vibrant violet accent when active
      fontWeight: active ? 'bold' : 'normal',
      cursor: 'pointer',
      transition: 'color 0.3s',
    }),
    hero: {
      padding: '7rem 10%',
      backgroundColor: '#16161a',
      textAlign: 'center',
      borderBottom: '1px solid #2d2d34',
    },
    section: {
      padding: '5rem 10%',
    },
    sectionTitle: {
      fontSize: '2rem',
      color: '#ffffff',
      marginBottom: '2rem',
      borderBottom: '3px solid #7f9cf5', // Indigo-blue accent line
      display: 'inline-block',
      paddingBottom: '0.5rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
    },
    card: {
      backgroundColor: '#1a1a1e',
      borderRadius: '12px',
      padding: '2rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3)',
      border: '1px solid #2d2d34',
      transition: 'transform 0.3s, border-color 0.3s',
    },
    badge: {
      backgroundColor: '#2d3748',
      color: '#9f7aea',
      padding: '0.35rem 0.75rem',
      borderRadius: '6px',
      fontSize: '0.8rem',
      fontWeight: '600',
      marginRight: '0.5rem',
      display: 'inline-block',
      marginTop: '0.5rem',
      border: '1px solid #4a5568',
    },
    skillBadge: {
      backgroundColor: '#2d2d34',
      color: '#e2e8f0',
      padding: '0.6rem 1.2rem',
      borderRadius: '20px',
      fontSize: '0.9rem',
      display: 'inline-block',
      margin: '0.35rem',
      border: '1px solid #4a5568',
    },
    contactLink: {
      color: '#9f7aea',
      textDecoration: 'none',
      fontWeight: 'bold',
      transition: 'color 0.3s',
    },
    socialButton: {
      backgroundColor: '#2d2d34',
      color: '#e2e8f0',
      padding: '0.6rem 1.2rem',
      borderRadius: '8px',
      textDecoration: 'none',
      fontSize: '0.95rem',
      border: '1px solid #4a5568',
      transition: 'background-color 0.3s',
    },
    footer: {
      textAlign: 'center',
      padding: '2.5rem',
      backgroundColor: '#0a0a0c',
      color: '#718096',
      borderTop: '1px solid #2d2d34',
      marginTop: '4rem',
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={{ fontWeight: 'bold', fontSize: '1.35rem', color: '#9f7aea', letterSpacing: '0.5px' }}>
          Divya Kuriakose.
        </div>
        <ul style={styles.navLinks}>
          <li><a href="#about" style={styles.navLink(activeSection === 'about')} onClick={() => setActiveSection('about')}>About</a></li>
          <li><a href="#skills" style={styles.navLink(activeSection === 'skills')} onClick={() => setActiveSection('skills')}>Skills</a></li>
          <li><a href="#experience" style={styles.navLink(activeSection === 'experience')} onClick={() => setActiveSection('experience')}>Experience</a></li>
          <li><a href="#projects" style={styles.navLink(activeSection === 'projects')} onClick={() => setActiveSection('projects')}>Projects</a></li>
          <li><a href="#contact" style={styles.navLink(activeSection === 'contact')} onClick={() => setActiveSection('contact')}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header style={styles.hero}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#ffffff', fontWeight: '800' }}>
          Hi there, I'm Divya Kuriakose
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#a0aec0', maxWidth: '700px', margin: '0 auto 2rem', fontWeight: '300' }}>
          A passionate <span style={{ color: '#9f7aea', fontWeight: '500' }}>UI/UX Designer</span> & <span style={{ color: '#7f9cf5', fontWeight: '500' }}>Developer</span> crafting seamless digital experiences.
        </p>
        <a href="#contact" style={{ backgroundColor: '#9f7aea', color: 'white', padding: '0.8rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', boxShadow: '0 4px 14px rgba(159, 122, 234, 0.4)' }}>
          Let's Connect
        </a>
      </header>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={{ fontSize: '1.15rem', maxWidth: '850px', color: '#cbd5e0', lineHeigh: '1.8' }}>
          I am a developer driven by an intense interest in <strong>UI/UX Designing</strong>. I specialize in building solid software foundations while ensuring the final interfaces are clean, interactive, and user-centric. From designing robust backend systems to collaborating on healthcare innovations in hackathons and exploring advanced mentorship landscapes through the <strong>ScholarX Program</strong>, I continuously look for ways to turn complex problems into clear designs.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ ...styles.section, backgroundColor: '#16161a' }}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <div>
          <h3 style={{ color: '#cbd5e0', marginBottom: '1rem' }}>Core Technologies</h3>
          <span style={styles.skillBadge}>Java</span>
          <span style={styles.skillBadge}>React.js</span>
          <span style={styles.skillBadge}>C</span>
          <span style={styles.skillBadge}>HTML5</span>
          <span style={styles.skillBadge}>CSS3</span>
          
          <h3 style={{ color: '#cbd5e0', marginTop: '2.5rem', marginBottom: '1rem' }}>Design & Frameworks</h3>
          <span style={styles.skillBadge}>UI/UX Design</span>
          <span style={styles.skillBadge}>Figma Prototyping</span>
          <span style={styles.skillBadge}>Wireframing & User Research</span>
          <span style={styles.skillBadge}>Git / GitHub</span>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <div style={styles.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', alignItems: 'center' }}>
            <h3 style={{ margin: 0, color: '#fff' }}>ScholarX Mentorship Program</h3>
            <span style={{ color: '#9f7aea', fontWeight: 'bold', fontSize: '0.9rem', backgroundColor: '#2d3748', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Completed</span>
          </div>
          <p style={{ fontStyle: 'italic', color: '#7f9cf5', margin: '0.5rem 0 1.2rem' }}>Mentee / Intern</p>
          <ul style={{ color: '#cbd5e0', paddingLeft: '1.2rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Acquired premium technical and career guidance through a structured global ecosystem.</li>
            <li style={{ marginBottom: '0.5rem' }}>Collaborated alongside industry mentors to refine development strategies and software design philosophy.</li>
            <li>Gained valuable technical insights into sustainable open-source software structures.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ ...styles.section, backgroundColor: '#16161a' }}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.grid}>
          
          {/* HerCare Project */}
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: '#fff' }}>🌸 HerCare — Women's Health Platform</h3>
            <p style={{ fontSize: '0.95rem', color: '#a0aec0' }}>
              Built during a Women's Day Hackathon. A centralized application tailored to solve fragmented tracking problems across female health domains.
            </p>
            <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', color: '#cbd5e0', marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>Cycle tracking with clear ovulation data visualization.</li>
              <li style={{ marginBottom: '0.3rem' }}>Anemia risk checks & dynamic nutrition tracking (Iron, Calcium, Vit D).</li>
              <li>Interactive AI health companion answering rapid symptom queries.</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <span style={styles.badge}>React.js</span>
              <span style={styles.badge}>Hackathon</span>
              <span style={styles.badge}>UI/UX Design</span>
            </div>
          </div>

          {/* Blood Donation Project */}
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: '#fff' }}>🩸 Blood Donation Management System</h3>
            <p style={{ fontSize: '0.95rem', color: '#a0aec0' }}>
              A reliable system coded in Java to bridge communication between eligible blood donors, local bank administrators, and hospitals.
            </p>
            <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', color: '#cbd5e0', marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>Utilizes fundamental Object-Oriented Programming (OOP) concepts for clean code layout.</li>
              <li style={{ marginBottom: '0.3rem' }}>Ensures real-time inventory checking for tracking distinct blood groups safely.</li>
              <li>Implements search query optimizations for rapid matching during critical emergencies.</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <span style={styles.badge}>Java</span>
              <span style={styles.badge}>OOP</span>
              <span style={styles.badge}>C Architecture</span>
            </div>
          </div>

          {/* UI/UX Design Project */}
          <div style={styles.card}>
            <h3 style={{ margin: '0 0 0.75rem 0', color: '#fff' }}>🎨 Next-Gen Mobile Interface Case Study</h3>
            <p style={{ fontSize: '0.95rem', color: '#a0aec0' }}>
              An interactive UI/UX engineering design project implementing dark themes, user empathy mapping, and strict accessibility criteria.
            </p>
            <ul style={{ fontSize: '0.9rem', paddingLeft: '1.2rem', color: '#cbd5e0', marginTop: '1rem' }}>
              <li style={{ marginBottom: '0.3rem' }}>Designed intricate wireframes and custom components natively in Figma.</li>
              <li style={{ marginBottom: '0.3rem' }}>Crafted high-fidelity dynamic prototyping with fluid micro-interactions.</li>
              <li>Prioritized screen hierarchy layouts for complex dashboards.</li>
            </ul>
            <div style={{ marginTop: '1.5rem' }}>
              <span style={styles.badge}>Figma</span>
              <span style={styles.badge}>UI/UX Design</span>
              <span style={styles.badge}>Prototyping</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <div style={{ ...styles.card, maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: '#cbd5e0' }}>I'm open to discussing frontend engineering roles, UI/UX design opportunities, or technical collaborations!</p>
          
          <p style={{ margin: '1.5rem 0' }}>
            <a href="mailto:divyakuriakose954@gmail.com" style={styles.contactLink}>
              divyakuriakose954@gmail.com
            </a>
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://github.com/DivyaKuriakose-31" target="_blank" rel="noreferrer" style={styles.socialButton}>
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/divya-kuriakose-977808327" target="_blank" rel="noreferrer" style={styles.socialButton}>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

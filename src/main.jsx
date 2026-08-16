import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const solutions = [
  { code: 'ETA', title: 'Electronic Travel Authorization', text: 'A digital authorization experience designed to make international travel applications clear, secure and efficient.' },
  { code: 'ED', title: 'Electronic Declaration', text: 'A modern digital entry-card experience for collecting and validating traveler information before arrival.' },
  { code: 'ID', title: 'Identity & Document Technology', text: 'A foundation for trusted identity, document validation and future border workflows.' },
  { code: 'WATCH', title: 'Screening & Risk', text: 'A future-ready foundation for controlled screening and risk workflows when deployed with the appropriate authority integrations.' }
];

function Mark(){return <div className="mark" aria-label="MISHA Systems logo"><span className="mark-globe"/><span className="mark-shield">M</span></div>}

function App(){
 return <div className="site">
  <header className="nav"><a className="brand" href="#top"><Mark/><span><strong>MISHA</strong><small>Systems</small></span></a><nav><a href="#solutions">Solutions</a><a href="#mission">Mission</a><a href="#technology">Technology</a><a href="#demo">Demo</a><a className="nav-cta" href="#contact">Contact</a></nav></header>

  <main id="top">
   <section className="hero">
    <div className="hero-grid"/>
    <div className="hero-copy"><p className="eyebrow">MOBILITY · IDENTITY · ACCESS</p><h1>Mobility Intelligence<br/><em>for Sovereign</em><br/>Harmonized Access.</h1><p className="lead">MISHA Systems builds digital travel, identity and access technology for governments and organizations shaping the future of secure mobility.</p><div className="actions"><a className="primary" href="#solutions">Explore solutions <span>→</span></a><a className="secondary" href="https://misha.systems">Explore technology</a></div></div>
    <div className="globe-art" aria-hidden="true"><div className="orb"><div className="orbit orbit1"/><div className="orbit orbit2"/><div className="orbit orbit3"/><div className="continents">M</div></div><div className="signal s1"/><div className="signal s2"/><div className="signal s3"/></div>
   </section>

   <section className="principles"><div><span>01</span><h3>Secure by design</h3><p>Security and sovereignty are considered from the foundation, not added as an afterthought.</p></div><div><span>02</span><h3>Built for mobility</h3><p>Digital journeys designed around travelers, authorities and the systems connecting them.</p></div><div><span>03</span><h3>Ready to integrate</h3><p>Modular technology designed to connect with existing government and enterprise ecosystems.</p></div></section>

   <section id="solutions" className="section"><div className="section-head"><div><p className="eyebrow">THE MISHA PLATFORM</p><h2>Technology for the journey<br/><em>from departure to arrival.</em></h2></div><p>Our initial focus is on practical digital travel experiences. The platform is designed to evolve as requirements grow.</p></div><div className="cards">{solutions.map((s,i)=><article className={'card card-'+i} key={s.code}><div className="card-code">{s.code}</div><h3>{s.title}</h3><p>{s.text}</p><a href={i<2?'https://misha.systems':'#contact'}>{i<2?'View demo':'Learn more'} <span>↗</span></a></article>)}</div></section>

   <section id="mission" className="mission"><div className="mission-art"><div className="ring r1"/><div className="ring r2"/><div className="ring r3"/><div className="core">M</div></div><div><p className="eyebrow">WHY MISHA SYSTEMS</p><h2>Technology that respects<br/><em>sovereign control.</em></h2><p className="mission-text">Modern mobility requires more than a digital form. It requires trusted infrastructure that connects travelers, authorities and borders while keeping governance, security and control where they belong.</p><a className="text-link" href="#contact">Talk to MISHA Systems <span>→</span></a></div></section>

   <section id="technology" className="technology"><div><p className="eyebrow">A MODULAR FOUNDATION</p><h2>One technology vision.<br/><em>Many journeys.</em></h2></div><div className="tech-lines"><div><b>01</b><span>Traveler experience</span><small>Clear, accessible digital journeys</small></div><div><b>02</b><span>Validation & intelligence</span><small>Rules, data and trusted verification</small></div><div><b>03</b><span>Authority connectivity</span><small>APIs and controlled integrations</small></div><div><b>04</b><span>Governance & audit</span><small>Visibility, accountability and control</small></div></div></section>

   <section id="demo" className="demo"><div className="demo-glow"/><p className="eyebrow">SEE IT IN ACTION</p><h2>Enter the <em>MISHA</em> systems.</h2><p>Our technology demonstration environment shows how MISHA experiences can work in practice — starting with ETA and Electronic Declaration.</p><a className="primary" href="https://misha.systems">Open demo portal <span>→</span></a></section>

   <section id="contact" className="contact"><div><p className="eyebrow">START A CONVERSATION</p><h2>Building the future of<br/><em>secure mobility?</em></h2></div><a className="contact-btn" href="mailto:contact@mishasystems.com">contact@mishasystems.com <span>↗</span></a></section>
  </main>

  <footer><div className="footer-brand"><Mark/><div><strong>MISHA Systems</strong><p>Mobility Intelligence for Sovereign Harmonized Access.</p></div></div><div className="footer-links"><a href="#solutions">Solutions</a><a href="#mission">Mission</a><a href="#technology">Technology</a><a href="https://misha.systems">Demo Portal</a></div><div className="copyright">© 2026 MISHA Systems. All rights reserved.</div></footer>
 </div>
}

createRoot(document.getElementById('root')).render(<App/>);

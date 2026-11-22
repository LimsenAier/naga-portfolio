import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Smartphone, Layers3, Database, Users } from 'lucide-react';
import campus from '../assets/campusplus.jpeg';
import '../project-pages.css';

export default function CampusPlus() {
  return (
    <div className="project-detail campus-detail">
      <header className="detail-nav">
        <Link className="detail-brand" to="/">L.</Link>
        <Link className="back-link" to="/"><ArrowLeft size={16} /> Back to portfolio</Link>
      </header>
      <main>
        <section className="detail-hero">
          <p className="detail-eyebrow"><span>PROJECT 02</span> 
          / MOBILE · STUDENT EXPERIENCE</p>
          <h1>Campus<span className="plus-mark">Plus.</span></h1>
          <p className="detail-lead">A campus-focused mobile application
           concept designed to bring useful student activities and campus
            functionality together.</p>
          <div className="detail-actions"><span className="detail-status">
          <span className="status-dot" /> React Native · Firebase</span></div>
          <div className="detail-cover campus-cover"><img src={campus} 
           alt="CampusPlus app preview" /></div>
        </section>
        <section className="detail-section detail-overview">
          <div className="detail-section-label">01 / OVERVIEW</div>
          <div><h2>A more connected campus experience.</h2><p>CampusPlus is a 
            mobile application project focused on bringing student-oriented 
            activities and campus functionality into one place. The interface 
            is built with React Native and Expo, with Firebase included in the 
            technology stack.</p></div>
        </section>
        <section className="detail-section">
          <div className="detail-section-label">02 / PROJECT FOCUS</div>
          <h2>Designed around student use.</h2>
          <div className="detail-feature-grid">
            <article><Smartphone size={22}/><span>01</span><h3>Mobile-first</h3>
            <p>A cross-platform interface built with React Native and Expo.</p></article>
            <article><Layers3 size={22}/><span>02</span><h3>Unified experience</h3>
            <p>A campus-focused concept that brings student activities and useful 
              functions together.</p></article>
            <article><Database size={22}/><span>03</span><h3>Firebase</h3>
            <p>Firebase is part of the project's technology stack.</p></article>
          </div>
        </section>
        <section className="detail-section">
          <div className="detail-section-label">03 / TECH STACK</div><h2>Tools used.</h2>
          <div className="detail-tags"><span>React Native</span><span>Expo</span><span>JavaScript</span><span>Firebase</span></div>
          <p className="detail-note">Detailed feature descriptions and repository links can be added here as the project documentation is finalized.</p>
        </section>
      </main>
    </div>
  );
}

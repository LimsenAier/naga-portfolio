import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, BrainCircuit, Camera, Smartphone, Target } from 'lucide-react';
import homeMock from '../assets/homeMock.jpeg';
import cameraMock from '../assets/cameraMock.jpeg';
import settingsMock from '../assets/settingsMock.jpeg';
import '../project-pages.css';

export default function NagaShawls() {
  return (
    <div className="project-detail naga-detail">
      <header className="detail-nav">
        <Link className="detail-brand" to="/">L.</Link>
        <Link className="back-link" to="/"><ArrowLeft size={16} /> 
        Back to portfolio</Link>
      </header>
      <main>
        <section className="detail-hero">
          <p className="detail-eyebrow"><span>PROJECT 01</span>
           / ML · COMPUTER VISION · MOBILE APPLICATION</p>
          <h1>Naga Shawls<br /><em>Identifier.</em></h1>
          <p className="detail-lead">A machine-learning mobile application
             designed to identify traditional Naga shawls from an image.</p>
          <div className="detail-actions">
            <a className="detail-button dark" 
            href="https://github.com/LimsenAier/nagaShawls.git"
           target="_blank" rel="noreferrer">View source code <ArrowUpRight size={16} /></a>
            <span className="detail-status"><span className="status-dot" />
             Model tested on held-out images</span>
          </div>
         <div className="app-screens">
  <div className="app-screen">
    <img src={homeMock} alt="Naga Shawls Identifier home screen" />
    <span>01 — HOME</span>
  </div>

  <div className="app-screen featured-screen">
    <img src={cameraMock} alt="Naga Shawls Identifier camera screen" />
    <span>02 — IDENTIFY</span>
  </div>

  <div className="app-screen">
    <img src={settingsMock} alt="Naga Shawls Identifier settings screen" />
    <span>03 — SETTINGS</span>
  </div>
</div>
        </section>
        <section className="detail-section detail-overview">
          <div className="detail-section-label">01 / OVERVIEW</div>
          <div><h2>Connecting cultural heritage with computer vision.
        </h2><p>The app takes a shawl image and uses an image-feature 
          extraction and classification pipeline to predict its class.
          It brings a computer-vision workflow into a mobile interface
          so users can explore traditional Naga shawl patterns.</p></div>
        </section>
        <section className="detail-section">
          <div className="detail-section-label">02 / WORKFLOW</div>
          <h2>From image to prediction.</h2>
          <div className="detail-feature-grid">
            <article><Camera size={22}/><span>STEP 01</span>
            <h3>Capture or select</h3><p>The user captures a photo or selects
               an image from the device.</p></article>
            <article><BrainCircuit size={22}/><span>STEP 02</span>
            <h3>Extract features</h3><p>A VGG16-based feature extractor converts
               the image into a feature representation.</p></article>
            <article><Target size={22}/><span>STEP 03</span><h3>Classify</h3>
            <p>An SVM classifier uses the extracted features to predict the
               shawl class.</p></article>
          </div>
        </section>
        <section className="detail-section detail-results">
          <div className="detail-section-label">03 / MODEL & RESULTS</div>
          <div className="results-layout"><div><h2>Machine learning, built
             for a mobile workflow.</h2>
           <p>The current model pipeline uses VGG16 for feature extraction
             and an RBF-kernel Support Vector Machine for classification.</p></div>
             <div className="result-stat">
          <strong>98.18%</strong><span>Test accuracy on the cleaned held-out
             test set</span></div></div>
          <div className="detail-tags"><span>VGG16</span>
          <span>SVM · RBF kernel</span><span>512-dimensional features</span>
          <span>TensorFlow Lite</span></div>
        </section>
        <section className="detail-section">
          <div className="detail-section-label">04 / TECH STACK</div>
          <h2>Tools used.</h2>
          <div className="detail-tags"><span>React Native</span>
          <span>Expo</span><span>Python</span><span>PyTorch</span>
          <span>VGG16</span><span>Scikit-learn</span><span>TensorFlow Lite</span>
          </div>
        </section>
        </main>
    </div>
  );
}

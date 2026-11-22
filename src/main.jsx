import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NagaShawls from './pages/NagaShawls';
import CampusPlus from './pages/CampusPlus';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/naga-shawls" element={<NagaShawls />} />
        <Route path="/projects/campus-plus" element={<CampusPlus />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

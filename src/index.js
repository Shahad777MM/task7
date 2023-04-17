import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PicturesPage from './pages/PicturesPage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/picture" element={<PicturesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.route';
import Footer from './routes/footer/footer.route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Navigation />
    <App />
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

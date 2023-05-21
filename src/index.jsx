import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className="container">
      <Header />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);

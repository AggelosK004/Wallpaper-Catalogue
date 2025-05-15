import React, { useState } from 'react';
import Button from './components/Button';
import './index.css';
import backgroundImage from './assets/lightbackground.jpg';
import darkBackground from './assets/darkbackground.jpg';  // ← your darker image
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [showCatalogue, setShowCatalogue] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const wallpapers = [ {name: 'Mountains',
      url: 'https://www.pexels.com/search/mountains/',
      thumbnail: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&h=200',
    },
    {
      name : 'Beach Sunset',
      url: 'https://www.pexels.com/search/beach%20sunset/',
      thumbnail: 'https://images.pexels.com/photos/306407/pexels-photo-306407.jpeg?auto=compress&cs=tinysrgb&h=200',
    },
    {
      name: 'Forest',
      url: 'https://www.pexels.com/search/forest/',
      thumbnail: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=200',
    },
    {
      name: 'Stars',
      url: 'https://www.pexels.com/search/stars/',
      thumbnail: 'https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=200',
    }, ];

  // choose which background to show
  const currentBg = darkMode ? darkBackground : backgroundImage;

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${currentBg})` }}
    >
      {/* Theme toggle button, fixed top-right */}
      <button
        className="theme-toggle-button"
        onClick={() => setDarkMode(prev => !prev)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      <AnimatePresence mode="wait">
        {!showCatalogue ? (
          <motion.div
            key="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button onClick={() => setShowCatalogue(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="catalogue"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="catalogue"
          >
            {/* …your catalogue markup… */}
            <div className="wallpaper-grid">
              {wallpapers.map((w, i) => (
                <a
                  key={i}
                  href={w.url}
                  target="_blank"
                  rel="noreferrer"
                  className="wallpaper-item"
                >
                  <img src={w.thumbnail} alt={w.name} />
                  <p>{w.name}</p>
                </a>
              ))}
            </div>
            <button
              className="back-button"
              onClick={() => setShowCatalogue(false)}
            >
              Go Back
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;

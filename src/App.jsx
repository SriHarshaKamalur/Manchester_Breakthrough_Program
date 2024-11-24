import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Import the header
import Home from './Pages/Home';
import About from './Pages/About';
import Events from './Pages/Events';
import Gallery from './Pages/Gallery';
import NewsLetter from './Pages/NewsLetter';
import Resources from './Pages/Resources';
import StudentProfile from './Pages/StudentProfile';

const App = () => {
  return (
    <Router>
      <Header /> {/* Header will appear on all pages */}
      <main style={{ paddingTop: '5rem', padding: '2rem' }}> {/* Space for fixed header */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/newsletter" element={<NewsLetter />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/profile" element={<StudentProfile />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;

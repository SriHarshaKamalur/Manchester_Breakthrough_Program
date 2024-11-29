import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";
import Gallery from "./Pages/Gallery";
import MonthlyCheckIn from "./Pages/MonthlyCheckIn";
import SixCPoints from "./Pages/SixCPoints";
import TutoringSupport from "./Pages/TutoringSupport";
import SuggestionBox from "./Pages/SuggestionBox";
import BreakthroughDocuments from "./Pages/BreakthroughDocuments";
import Calendar from "./Pages/Calendar";
import Newsletter from "./Pages/Newsletter";
import StudentProfile from "./Pages/StudentProfile";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/monthly-checkin" element={<MonthlyCheckIn />} />
        <Route path="/6c-points" element={<SixCPoints />} />
        <Route path="/tutoring-support" element={<TutoringSupport />} />
        <Route path="/suggestion-box" element={<SuggestionBox />} />
        <Route path="/breakthrough-documents" element={<BreakthroughDocuments />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div className="w-full overflow-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </div>
    </Router>
  );
};
export default App;

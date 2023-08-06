import React from "react";
import LandingPage from "./pages/LandingPage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


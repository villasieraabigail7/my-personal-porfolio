import React from "react";
import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header name="My  Portfolio" tagline="" />
      <AboutMe
        name="Ma Eloisa Royo"
        bio="I’m a BSIT student Dreaming To be a Successful IT Profesional"
        profileImage="my-product-card\src\images\pic.jpg"
      />
      <Skills />
      <Projects />
      <Contact
        email="royomaeloisa@gmail.com"
        github="https://github.com/username"
        linkedin="https://www.linkedin.com/in/username"
      />
      <Footer author="ABIGAIL&MA ELOISA" />
    </div>
  );
};

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import WhatsAppFloating from "./components/WhatsAppFloating";

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-inter scroll-smooth">
      <Navbar />
      <Hero />
      <Skills />  
     <WhatsAppFloating />
      <Projects />
      <Education />
       <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

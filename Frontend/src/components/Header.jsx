import React from "react";
 import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";
import Contact from "./Contact";
import WhatsAppButton from "./WhatsAppButton";

function Header() {
  return (
    <div className="bg-[#0A0A0C] text-white min-h-screen flex flex-col">
       <main className="flex-1">
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact /></section>
      </main>
      <WhatsAppButton />
     </div>
  );
}

export default Header;

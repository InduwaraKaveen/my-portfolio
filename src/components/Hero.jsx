import React from "react";
import "./Hero.css";
import profile from "../assets/profile.jpeg";
import cv from "../assets/cv.pdf"; // ✅ ADD THIS

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>Induwara Kaveen</h1>
          <h3>UG, BSc (Hons) in Software Engineering</h3>

          <p>
            Undergraduate Software Engineering student with interests in web 
            development, mobile application development, and game development. 
            Passionate about building practical and user-friendly software solutions.
          </p>

          <a href={cv} download className="cv-btn">Download CV</a>
        </div>

        <div className="hero-image">
          <img src={profile} alt="profile" />
        </div>

      </div>
    </section>
  );
}

export default Hero;
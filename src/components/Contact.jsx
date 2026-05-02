import "./Contact.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact</h2>

        <div className="contact-cards">

          {/* GITHUB */}
          <a 
            href="https://github.com/InduwaraKaveen" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="icon" />
            <p>GitHub</p>
          </a>

          {/* LINKEDIN */}
          <a 
            href="https://www.linkedin.com/in/induwara-gunasekara-8606b1391?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="icon" />
            <p>LinkedIn</p>
          </a>

          {/* EMAIL */}
          <a 
            href="mailto:induwarakaveen44@gmail.com" 
            className="contact-card"
          >
            <FaEnvelope className="icon" />
            <p>Email</p>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;
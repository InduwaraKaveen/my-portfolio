import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>© 2026 Induwara. All Rights Reserved.</p>

        <div className="footer-icons">
          <a 
            href="https://github.com/InduwaraKaveen" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a 
            href="https://www.linkedin.com/in/induwara-gunasekara-8606b1391?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
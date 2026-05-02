import "./Publications.css";

function Publications() {
  return (
    <section className="publications" id="publications">
      <div className="publications-container">
        <h2>Publications</h2>

        <div className="cards">

          {/* ARTICLE 1 */}
          <div className="card">
            <h3>Understanding CIA Triad in Cyber-Security</h3>
            <p>
              An article explaining the core principles of the CIA Triad in
              cyber-security, focusing on confidentiality, integrity, and
              availability, and how they are applied in real-world systems.
            </p>

            <div className="pub-links">
              <a 
                href="https://medium.com/@induwarakaveen44/da491ce37a56" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read Article
              </a>
            </div>
          </div>

          {/* ARTICLE 2 */}
          <div className="card">
            <h3>Importance of Diagrams</h3>
            <p>
              An article discussing the significance of diagrams in understanding
              complex concepts, improving communication, and simplifying problem
              solving in software engineering and related fields.
            </p>

            <div className="pub-links">
              <a 
                href="https://medium.com/@induwarakaveen44/3f5816c4d4f7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read Article
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Publications;
import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2>Education</h2>

        <div className="cards">

          {/* CARD 1 */}
          <div className="card">
            <h3>Bachelor of Science in Software Engineering (UG)</h3>
            <div className="card-top">
              <span>University of Kelaniya</span>
              <span>CGPA: 3.81 / 4.00</span>
            </div>
            <p className="date">(2025 – Present)</p>
            <p>
              Specializing in Net-Centric Web Application Development, Mobile App Development and Game Development domains.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <h3>G. C. E. (A/L) Examination</h3>
            <div className="card-top">
              <span>Rahula College, Matara</span>
              <span>Z-Score: +1.5876</span>
            </div>
            <p className="date">(2023 – 2024)</p>
            <p>
              Successfully completed GCE Advanced Level Examination with results of ABB (Physics, Combined Mathematics, Chemistry)
            </p>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <h3>G. C. E. (O/L) Examination</h3>
            <div className="card-top">
              <span>Rahula College, Matara</span>
              <span>Results: 9 A Passes</span>
            </div>
            <p className="date">(2020 – 2021)</p>
            <p>
              Successfully completed GCE Ordinary Level Examination with results of A-8, B-1.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
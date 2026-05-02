import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>Skills</h2>

        <div className="cards">

          {/* CARD 1 */}
          <div className="card">
            <h3>Programming Languages</h3>

            <div className="skill">
              <p>Java <span>55%</span></p>
              <div className="bar"><div style={{ width: "55%" }}></div></div>
            </div>

            <div className="skill">
              <p>JavaScript <span>60%</span></p>
              <div className="bar"><div style={{ width: "60%" }}></div></div>
            </div>

            <div className="skill">
              <p>C <span>65%</span></p>
              <div className="bar"><div style={{ width: "65%" }}></div></div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="card">
            <h3>Web Development & Databases</h3>

            <div className="skill">
              <p>HTML <span>80%</span></p>
              <div className="bar"><div style={{ width: "80%" }}></div></div>
            </div>

            <div className="skill">
              <p>CSS <span>60%</span></p>
              <div className="bar"><div style={{ width: "60%" }}></div></div>
            </div>

            <div className="skill">
              <p>SQL <span>60%</span></p>
              <div className="bar"><div style={{ width: "60%" }}></div></div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="card">
            <h3>Frameworks & Libraries</h3>

            <div className="skill">
              <p>React <span>20%</span></p>
              <div className="bar"><div style={{ width: "20%" }}></div></div>
            </div>

            <div className="skill">
              <p>Node.js <span>5%</span></p>
              <div className="bar"><div style={{ width: "5%" }}></div></div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="card">
            <h3>Game Development</h3>

            <div className="skill">
              <p>Unreal Engine 5 <span>10%</span></p>
              <div className="bar"><div style={{ width: "10%" }}></div></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Skills;
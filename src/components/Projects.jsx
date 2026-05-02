import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="cards">

          {/* PROJECT 1 */}
          <div className="card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio website built using React to showcase my
              skills, education, and projects. Designed with a modern UI and
              responsive layout for better user experience.
            </p>

            <div className="project-links">
              <a href="#">Live Demo</a>
              <a href="#">GitHub</a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="card">
            <h3>Govibiz App</h3>
            <p>
              A group project developed to support business-related solutions.
              Contributed as a team member in designing and developing core
              features. GitHub repository link will be updated soon.
            </p>

            <div className="project-links">
              <a href="#">Details</a>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="card">
            <h3>More Projects Coming Soon</h3>
            <p>
              I am currently working on new projects to expand my portfolio.
              Stay tuned for upcoming work showcasing my skills and creativity.
            </p>

            <div className="project-links">
              <a href="#">Coming Soon</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
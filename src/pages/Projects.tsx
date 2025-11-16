/**
 * Projects component
 * Lists and showcases individual projects with descriptions and links.
 */
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <section className='projectsSection'>
      <div className="project-grid">
        <div className="project-card">
          <h3><Link to="/airgate">AirGATE</Link></h3>
          <p>Aviation Management Software</p>
        </div>
        <div className="project-card">
          <h3><Link to="/artemis">Artemis</Link></h3>
          <p>Fair Setting System</p>
        </div>
        <div className="project-card">
          <h3><Link to="/flightbase">Flight BASE</Link></h3>
          <p>Japanese Airline Booking Website</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
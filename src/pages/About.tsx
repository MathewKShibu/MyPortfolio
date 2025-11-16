import { Link } from 'react-router-dom';
import profilepic from '../assets/profilepic_system.jpg';

function About() {
  return (
    <section className="aboutSection">
      <div className="aboutOverlay">
        <div className="aboutBox">
          <div className="aboutContent">
            <img src={profilepic} alt="Mathew K Shibu" className="aboutPhoto" />
            <h1>Mathew K Shibu</h1>
            <p>Hello! I'm Mathew, a Software Engineer passionate about building scalable web applications and solving real-world problems through technology.</p>
            <div className="basicInfo">
              <p><strong>Location:</strong> Limerick, Ireland</p>
              <p><strong>Skills:</strong> React, Node.js, Java, Spring Boot, MySQL</p>
            </div>
            <div className="galleryCTA">
              <h2>Want to see more?</h2>
              <Link to="/gallery" className="galleryButton">View My Media Gallery</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
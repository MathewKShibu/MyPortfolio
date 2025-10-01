import './App.css';
import profilepic from './assets/profilepic_system.jpg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  return (
    <header className='Header'>
      <nav className='navbar'>
        <div className='logoContainer'>
          <img src={profilepic} className="logo" alt="Profile" />
        </div>
        <ul className='navLinks'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="homeSection">
      <div className="homeOverlay">
        <div className="homeContent">
          <h1 className="animatedTitle">Welcome to My Portfolio</h1>
          <p className="animatedSubtitle">Explore my projects, skills, and experience as a Software Engineer.</p>
        </div>
      </div>
    </section>
  );
}

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

            {/* Media Gallery CTA */}
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

function Gallery() {
  return (
    <section className="gallerySection">
      <h1>My Media Gallery</h1>
      <div className="mediaGrid">
        {/* Images */}
        <img src="/media/photo1.jpg" alt="Event 1" />
        <img src="/media/photo2.jpg" alt="Event 2" />

        {/* Videos */}
        <video controls>
          <source src="/media/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

type EducationCardProps = {
  title: string;
  school: string;
  status: string;
  grade: string;
};


function EducationCard({ title, school, status, grade }: EducationCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`educationCard ${expanded ? 'expanded' : ''}`} onClick={() => setExpanded(!expanded)}>
      <h3>{title}</h3>
      {expanded && (
        <div className="educationDetails">
          <p><strong>School:</strong> {school}</p>
          <p><strong>Status:</strong> {status}</p>
          <p><strong>Grade:</strong> {grade}</p>
        </div>
      )}
    </div>
  );
}

function Education() {
  return (
    <section className="educationSection">
      <br></br>
      <br></br>
      <h1>My Academic Background</h1>
      <div className="educationGrid">
        <EducationCard
          title="Class X"
          school="De Paul Public School, Thodupuzha"
          status="Completed"
          grade="98%"
        />
        <EducationCard
          title="Class XII"
          school="Vimala Public School, Thodupuzha"
          status="Completed"
          grade="78%"
        />
        <EducationCard
          title="B.Tech in Computer Science"
          school="Viswajyothi College of Engineering and Technology, Muvattupuzha"
          status="Completed"
          grade="86%"
        />
      </div>
    </section>
  );
}

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

function Contact() {
  return (
    <section className="contactSection">
      <div className="contactOverlay">
        <div className="contactBox">
          <h2>Contact Me</h2>
          <p>Contact No: +353 894399001</p>
          <p>Email: <a href="mailto:mathewkshibu2001@gmail.com">mathewkshibu2001@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/mathew-k-shibu-5b0b2521b/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="resumeSection">
      <div className="resumeOverlay">
        <div className="resumeBox">
          <h2>Resume</h2>
          <img src="/ResumeImage.jpg" alt="Resume Preview" className="resumePreview" />
          <a href="/PortfolioResume.pdf" download className="download-btn">Download PDF</a>
        </div>
      </div>
    </section>
  );
}

function AirGATE() {
  return (
    <section className="airgateSection">
      <div className="airgateOverlay">
        <div className="airgateContent">
          <h1>AirGATE</h1>
          <p><strong>Company:</strong> IBS Software</p>
          <p><strong>Description:</strong> AirGATE is an advanced aviation management software designed to streamline airport operations, flight scheduling, and passenger services.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Flight Search</li>
            <li>Flight Booking</li>
            <li>Seat Selection</li>
            <li>Baggage Addition</li>
            <li>Cancel Booking</li>
          </ul>
          <p><strong>Tech Stack:</strong> Java, Thymeleaf</p>
        </div>
      </div>
    </section>
  );
}

function Artemis() {
  return (
    <section className="artemisSection">
      <div className="artemisOverlay">
        <div className="artemisContent">
          <h1>Artemis</h1>
          <p><strong>Company:</strong> IBS Software</p>
          <p><strong>Description:</strong> Artemis is a comprehensive fair setting system that optimizes pricing strategies for airlines, ensuring competitive and profitable fare structures.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Dynamic Pricing</li>
            <li>Competitor Analysis</li>
            <li>Revenue Management</li>
            <li>Market Trend Analysis</li>
          </ul>
          <p><strong>Tech Stack:</strong> Java, Spring Boot, MySQL, React</p>
        </div>
      </div>
    </section>
  );
}

function FlightBASE() {
  return (
    <section className="flightbaseSection">
      <div className="flightbaseOverlay">
        <div className="flightbaseContent">
          <h1>FlightBASE</h1>
          <p><strong>Company:</strong> IBS Software</p>
          <p><strong>Description:</strong> Flight BASE is a Japanese airline booking website that provides users with an intuitive platform to search, book, and manage their flights.</p>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Flight Search</li>
            <li>Flight Booking</li>
            <li>Seat Selection</li>
            <li>Booking Management</li>
          </ul>
          <p><strong>Tech Stack:</strong> Java, Thymeleaf, React, HTML, CSS, JavaScript, MySQL</p>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className='Footer'>
      <p>&copy; {new Date().getFullYear()} Mathew K Shibu. All rights reserved.</p>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <main className='MainContent'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/airgate" element={<AirGATE />} />
          <Route path="/artemis" element={<Artemis/>} />
          <Route path="/flightbase" element={<FlightBASE/>} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
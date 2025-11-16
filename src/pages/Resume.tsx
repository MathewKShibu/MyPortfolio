/**
 * Resume component
 * Provides a downloadable resume image and highlights key qualifications.
 */
import resumeImage from '../assets/ResumeImage.jpg';

function Resume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = 'Mathew_K_Shibu_Resume.jpg'; // Customize filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resumeSection">
      <div className="resumeOverlay">
        <div className="resumeBox">
          <h2>Resume</h2>
          <img src={resumeImage} alt="Resume Preview" className="resumePreview" />
          <button onClick={handleDownload} className="download-btn">
            Download Resume Image
          </button>
        </div>
      </div>
    </section>
  );
}

export default Resume;
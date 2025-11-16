/**
 * Home component
 * Serves as the landing section of the portfolio.
 * Introduces the user and provides quick navigation to other sections.
 */
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

export default Home;
/**
 * Contact component
 * Displays contact information and a form for users to reach out.
 */
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

export default Contact;
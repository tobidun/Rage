import React from "react";

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>About Us</h1>
      </header>

      {/* Mission Section */}
      <section className="mission">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            velit id eros rutrum elementum. Nullam non semper libero.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h3>Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            velit id eros rutrum elementum. Nullam non semper libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            velit id eros rutrum elementum. Nullam non semper libero.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            velit id eros rutrum elementum. Nullam non semper libero.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
}

export default AboutPage;

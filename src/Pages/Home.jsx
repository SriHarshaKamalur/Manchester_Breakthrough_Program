import React from "react";
import Carousel from "../Components/Carousel";
import "./Home.css"; // Ensure this file exists and styles match the design

const Home = () => {
  return (
    <div className="home-container">
      {/* Carousel Section */}
      <section className="carousel-section">
        <Carousel />
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">WELCOME TO BREAKTHROUGH MANCHESTER AT SNHU</h1>
          <p className="welcome-paragraph">
            Breakthrough Manchester College-Bound at SNHU (BTM-CB) is a tuition-free program
            guided by a mission to give continued support in academic growth, educational
            enrichment, college-readiness, and essential skill-building to highly motivated,
            under-resourced high school students while inspiring the next generation of
            well-rounded leaders and educators.
          </p>
          <p className="welcome-paragraph">
            BTM-CB continues the college-access pipeline for students who entered the program
            as rising 7th graders through Breakthrough Manchester at the Derryfield School.
            BTM-CB seeks to complete its mission through dedicated advising and support of
            students, college access and success curriculum on eight College-Bound Saturdays,
            and a college success culture and community.
          </p>
          <p className="welcome-paragraph">
            This website is a central hub for everything Breakthrough Manchester College-Bound
            at SNHU. Whether you are looking to learn more{" "}
            <a href="#" className="link">
              about the program
            </a>
            , interested in the{" "}
            <a href="#" className="link">
              student community
            </a>
            , seeking student resources (like{" "}
            <a href="#" className="link">
              College Planning
            </a>
            ), or{" "}
            <a href="#" className="link">
              just making sure that you don’t miss an event
            </a>
            , welcome! We’re glad you’re here!
          </p>
          <p className="welcome-paragraph">
            If you have any questions, please don’t hesitate to email me at{" "}
            <a href="mailto:b.gentry@snhu.edu" className="highlight-link">
              b.gentry@snhu.edu
            </a>
            .
          </p>
          <p className="welcome-signature">
            — Ben Gentry, BTM-CB at SNHU College-Bound Director
          </p>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="youtube-section">
        <h2 className="youtube-title">BTM-CB Program Overview</h2>
        <iframe
          className="youtube-video"
          src="https://www.youtube.com/embed/DxxS1wq9sGs"
          title="BTM-CB Program Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonial-container">
          <h2 className="testimonial-title">CB GRADUATE STUDENT TESTIMONIALS</h2>
          <div className="testimonial-box">
            <p className="testimonial-text">
              BTM-CB, to me, is a place where roadblocks are overcome. At Breakthrough CB,
              what seems impossible becomes possible. Opportunities and relationships are
              built here, and the environment is full of determined students all chasing the
              dream of receiving a college degree. Breakthrough CB is one big support
              system, advisors are always there to answer questions and help guide students
              to achieve their goals. This program over the years has become a second family
              to not only me but my peers as well. Without Breakthrough CB I am uncertain if
              I would be attending college in the fall. I am grateful for all the support,
              help, and preparation I have received throughout high school from BTM-CB and
              for the people I’ve met through this program.
            </p>
            <p className="testimonial-author">— Kayla A.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#" className="footer-button">
            Ben's Email
          </a>
          <a href="#" className="footer-button">
            College Board
          </a>
          <a href="#" className="footer-button">
            The Common App
          </a>
          <a href="#" className="footer-button">
            The Coalition App
          </a>
          <a href="#" className="footer-button">
            BTM Main Page
          </a>
        </div>
        <div className="footer-newsletter">
          <h3 className="footer-heading">Quick Links:</h3>
          <p className="footer-text">Subscribe to the Official Breakthrough College-Bound Newsletter!</p>
          <form>
            <input
              type="email"
              placeholder="email address"
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-button">
              Subscribe
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Home;

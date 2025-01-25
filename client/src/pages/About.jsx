import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";

export const About = () => {

  const { user } = useAuth();

  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">

              <h1 style={{ marginBottom: '10px', textTransform: 'capitalize', fontSize: "3.2rem" }}>Hello {user.username} </h1>
              <h1>Why Choose Us? </h1>
              <p>
                    At Learnify, we empower you with industry-relevant skills through expert-led
                    courses designed for the modern tech world. With personalized learning,
                    hands-on projects, and career-focused guidance, we ensure you're ready to thrive 
                    in your field. Affordable, accessible, and tailored to your success—Learnify is 
                    your partner in building a brighter future.
              </p>
              <div className="btn btn-group">
                    <a href="/contact">
                        <button className="btn"> Connect Now </button>
                    </a>
                    <a href="/service">
                        <button className="btn secondry-btn"> Start Learning </button>
                    </a>
                </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="500"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <section className="section-analytics">
            <div className="container grid grid-four-cols">
                <div className="div1">
                    <h2> 100+ </h2>
                    <p> Courses </p>
                </div>
                <div className="div1">
                    <h2> 10,000+ </h2>
                    <p> Happy Clients </p>
                </div>
                <div className="div1">
                    <h2> 50+ </h2>
                    <p> Well Known developers </p>
                </div>
                <div className="div1">
                    <h2> 24/7 </h2>
                    <p> Service </p>
                </div>
            </div>
        </section>
    </>
  );
};
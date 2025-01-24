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
                Expertise: Our team consists of experienced IT professionals who
                are passionate about staying up-to-date with the latest industry
                trends.
              </p>
              <p>
                Customization: We understand that every business is unique.
                Thats why we create solutions that are tailored to your specific
                needs and goals.
              </p>
              <p>
                Customer-Centric Approach: We prioritize your satisfaction and
                provide top-notch support to address your IT concerns.
              </p>
              <p>
                Affordability: We offer competitive pricing without compromising
                on the quality of our services.
              </p>
              <p>
                Reliability: Count on us to be there when you need us. We're
                committed to ensuring your IT environment is reliable and
                available 24/7.
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
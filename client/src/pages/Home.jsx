export const Home = () => {
    return <>
        <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <h1> Welcome to Learnify </h1>
                        <p>
                            Learnify is your gateway to mastering tech skills and advancing your career.
                            Explore our comprehensive courses in Data Analytics, Cloud computing and 
                            many more by industry experts. Whether you are a beginner or looking to 
                            upskill, Learnify offers flexible learning options. Start your journey today
                            and unlock your potential.
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
                        <img src="/images/home.png" alt="People coding together" width="400" height="400"/>
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
};
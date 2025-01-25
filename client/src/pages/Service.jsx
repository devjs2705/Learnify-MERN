import { useAuth } from "../store/auth";
import { memo } from "react";

const Service = () => {

    const { course } = useAuth();

    return <>
        <section className="section-services">
            <div className="container">
                <h1 className="main-heading"> Courses </h1>
            </div>
            <div className="container grid grid-three-cols">

                {
                    course.map((item, index) => {

                        const {service, description, price, provider} = item;

                        return (
                            <div className="card" key={index}>
                            <div className="card-img">
                                <img src="/images/design.png" alt="courses" width="500"/>
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <p>{provider}</p>
                                    <p>{price}</p>
                                </div>
                                <h2>{service}</h2>
                                <p>{description}</p>
                            </div>
                        </div>
                        );
                    })
                }
            </div>
        </section>
    </>
};

export default memo(Service);
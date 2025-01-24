import { useState } from "react";
import { useAuth } from "../store/auth";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const [userData, setUserData] = useState(true);

    const { user } = useAuth();

    if(user && userData)
    { 
        setContact({
            username: user.username,
            email: user.email,
            message: "",
        })

        setUserData(false);
    };

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contact),
            })

            if(response.ok)
            {
                setUserData(true);
            }
            
        } catch (error) {
            console.log("Contact form submission failed", error);
            
        }

    }

    return <>
        <section className="section-contact">
            <div className="contact-content container">
                <h1 className="main-heading"> Contact Us </h1>
            </div>
            
            <div className="container grid grid-two-cols">
                <div className="contact-image">
                    <img src="/images/support.png" alt="Always ready to help you"/>
                </div>

                <div className="section-form">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username"> username </label>
                            <input 
                                type="text" 
                                name="username"
                                id="username"
                                autoComplete="off"
                                required
                                value={contact.username}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="email"> email </label>
                            <input 
                                type="email" 
                                name="email"
                                id="email"
                                autoComplete="off"
                                required
                                value={contact.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div>
                            <label htmlFor="message"> message </label>
                            <textarea 
                                name="message" 
                                id="message"
                                value={contact.message}
                                onChange={handleInput}
                                required
                                cols="30"
                                rows="7">
                            </textarea>
                        </div>

                        <div>
                            <button type="submit" className="btn"> submit </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </>
};
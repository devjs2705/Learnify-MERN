import { useState } from "react";

export const Contact = () => {

    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: ""
    })

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contact)
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
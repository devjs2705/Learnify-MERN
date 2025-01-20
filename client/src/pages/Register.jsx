import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/auth/register";

export const Register = () => {

    const navigate = useNavigate();
    const {StoreTokenInLS} = useAuth();
    
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL ,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            if(response.ok)
            {
                const res_data = await response.json();
                const serverToken = res_data.token;
                StoreTokenInLS(serverToken);
                setUser({username: "", email: "", phone: "", password: ""});
                navigate("/login");
            }

            console.log(response)
        } catch (error) {
            console.log("Register: ", error)
        }
    };

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="registration-content container">
                        <h1 className="main-heading"> Registration Form </h1>
                    </div>
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/register.png"
                                alt="someone trying to do registration"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="registration-form">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
                                    <input 
                                        type="text" 
                                        name="username" 
                                        placeholder="username"
                                        id="username"
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input 
                                        type="number" 
                                        name="phone" 
                                        placeholder="phone"
                                        id="phone"
                                        required
                                        autoComplete="off"
                                        value={user.phone}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password">Password</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        placeholder="password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={user.password}
                                        onChange={handleInput}
                                    />
                                </div>

                                <button type="submit" className="btn btn-submit">Register Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};
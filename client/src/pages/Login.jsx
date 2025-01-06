import { useState } from "react";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return <>
        <section>
            <main>
                <div className="section-registration">

                    <div className="registration-content container">
                        <h1 className="main-heading"> Login Form </h1>
                    </div>

                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/images/login.png"
                                alt="someone trying to do Login"
                                width="500"
                                height="500"
                            />
                        </div>

                        <div className="registration-form">
                            <form onSubmit={handleSubmit}>
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

                                <button type="submit" className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};
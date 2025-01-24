import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");

    const StoreTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    // JWT Authentication - to get the data of currently logged in user
    

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                },
            });

            if(response.ok)
            {
                const data = await response.json();
                
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data", error);
        }
    };

    useEffect(
        () => {
            userAuthentication();     
        },
        []
    );

    return <AuthContext.Provider value={ { StoreTokenInLS, LogoutUser, isLoggedIn, user } }>
            {children}
        </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};


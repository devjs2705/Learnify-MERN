import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [course, setCourse] = useState([]);

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

    const getServices = async () => {
        
        
        try {
            const response = await fetch("http://localhost:5000/api/data/service",
                {
                    method: "GET",
                }
            )
            
            if(!response)
            {
                console.log("services: No response from server");
                return ;
            }

            if(response.ok)
            {
                const data = await response.json();
                // console.log(data.msg);
                
                setCourse(data.msg);
            }
        } catch (error) {
            console.log("fetching services failed", error);
        }
    };

    useEffect(() => {
        getServices();
    }, []);  // Only run once, when the component mounts.
    
    useEffect(() => {
        userAuthentication();
    }, [token]);  // Run when token changes.
    

    return <AuthContext.Provider value={ { StoreTokenInLS, LogoutUser, isLoggedIn, user, course } }>
            {children}
        </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};


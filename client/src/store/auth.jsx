import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const StoreTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem('token');
    }

    return <AuthContext.Provider value={ { StoreTokenInLS, LogoutUser, isLoggedIn } }>
            {children}
        </AuthContext.Provider>
}

export const useAuth = () => {
    return useContext(AuthContext);
};


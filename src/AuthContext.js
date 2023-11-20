import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        // Simulate an asynchronous check for authentication
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            setIsAuthenticated(!!token);
        };

        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {isAuthenticated === null ? (
                <div>Loading...</div> // Render a loader while checking authentication status
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
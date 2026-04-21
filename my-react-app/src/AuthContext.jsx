import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const parseJwtPayload = (token) => {
    if (!token) return null;

    try {
        const payload = token.split('.')[1];
        if (!payload) return null;

        const normalized = payload.replace(/-/g, '+').replace(/_/g, '/');
        const decoded = atob(normalized);
        return JSON.parse(decoded);
    } catch (error) {
        console.error('No se pudo leer el token:', error);
        return null;
    }
};

const getStoredAuth = () => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    const storedUserId = localStorage.getItem('userId');
    const tokenPayload = parseJwtPayload(token);

    return {
        token,
        role: storedRole || tokenPayload?.rol || tokenPayload?.role || 'cliente',
        userId:
            storedUserId ||
            tokenPayload?.userId ||
            tokenPayload?.id ||
            tokenPayload?.sub ||
            '',
    };
};

export const AuthProvider = ({ children }) => {
    const storedAuth = getStoredAuth();

    const [isLoggedIn, setIsLoggedIn] = useState(!!storedAuth.token);
    const [role, setRole] = useState(storedAuth.role);
    const [userId, setUserId] = useState(String(storedAuth.userId || ''));

    const login = (authData) => {
        const token = authData?.token;
        const user = authData?.user || authData?.usuario || {};
        const tokenPayload = parseJwtPayload(token);
        const nextRole =
            authData?.rol ||
            user?.rol ||
            user?.role ||
            tokenPayload?.rol ||
            tokenPayload?.role ||
            'cliente';
        const nextUserId =
            authData?.userId ||
            user?.id ||
            user?._id ||
            tokenPayload?.userId ||
            tokenPayload?.id ||
            tokenPayload?.sub ||
            '';

        if (token) {
            localStorage.setItem('token', token);
        }

        localStorage.setItem('role', nextRole);
        localStorage.setItem('userId', String(nextUserId));

        setIsLoggedIn(true);
        setRole(nextRole);
        setUserId(String(nextUserId));
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        setRole('cliente');
        setUserId('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, role, userId, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth debe usarse dentro de un AuthProvider');
    }

    return context;
};

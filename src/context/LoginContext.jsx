import { createContext,useState } from 'react'

export const LoginContext = createContext();

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(() => {
        const userData = localStorage.getItem('user')
        return userData ? JSON.parse(userData) : null
    });

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    const isLoggedIn = Boolean(user)

    return <LoginContext.Provider value={{user, login, logout, isLoggedIn}}>
        {children}
    </LoginContext.Provider>
}

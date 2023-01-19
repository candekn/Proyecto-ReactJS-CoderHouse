import { createContext, useContext, useState, useEffect } from 'react';

const MOCK_USERS = [
    {
        email: 'cande@mail.com',
        name: 'Candelaria',
        password: '1234'
    },
    {
        email: 'tutor@coder.com',
        name: 'Tutor',
        password: 'coder'
    },
    {      
        email: 'Elka.Carleen@gmail.com',
        name: 'Elka Carleen',
        password: 'Abc123'
    }
]

const userLog = JSON.parse(localStorage.getItem('user')) || {
    email: null,
    logged: false,
    error: null
};

export const LoginContext = createContext();

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {

    console.log("🚀 ~ file: LoginContext.jsx:29 ~ children", children);

    const [user, setUser] = useState(userLog)

    const login = (values) => {
        const match = MOCK_USERS.find(user => user.email === values.email)

        if (!match) {
            setUser({
                email: null,
                logged: false,
                error: 'No se encuentra ese usuario'
            })
            return
        }

        if (match.password === values.password) {
            setUser({
                email: match.email,
                name: match.name,
                logged: true,
                error: null
            })

        } else {
            setUser({
                email: null,
                name: null,
                logged: false,
                error: 'Password inválido'
            })
        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false,
            error: null
        })
    }
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);
return (
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}
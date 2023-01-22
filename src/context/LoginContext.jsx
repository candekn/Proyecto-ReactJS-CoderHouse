import { collection, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '../firebase/config';

export const LoginContext = createContext();

export const useLoginContext = () => {
    return useContext(LoginContext)
}

const userLog = JSON.parse(localStorage.getItem('user')) || {
    email: null,
    name: null,
    logged: false,
    error: null
};

export const LoginProvider = ({children}) => {

    const [user, setUser] = useState(userLog);
    const [loading, setLoading] = useState(false);
    const login = (values) => {
        const userReference = collection(db, 'users');
        const q = query(userReference, where('email', '==', values.email));
        setLoading(true);     
        getDocs(q)
        .then((res) => {
                if(res.docs.length > 0){
                    const data = res.docs[0].data()
                    setUser({
                        email: data.email,
                        name: data.name,
                        logged: true,
                        error: null
                    })
                }else{
                    setUser({
                        email: null,
                        name: null,
                        logged: false,
                        error: 'El usuario o contraseña es inválido'
                    })
                }
                })  
            .finally(() => {
                setLoading(false);
            })
    }

    const logout = () => {
        setUser({
            email: null,
            name: null,
            logged: false,
            error: null
        })
    }
    
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
    }, [user]);

    return (
        <LoginContext.Provider value={{user, login, logout, loading}}>
            {
                children
            }
        </LoginContext.Provider>
    )
}
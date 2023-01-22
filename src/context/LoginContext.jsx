import { collection, getDoc, getDocs, query, where } from 'firebase/firestore/lite';
import { createContext, useContext, useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase/config';

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

    const [user, setUser] = useState(userLog)
    const [loading, setLoading] = useState(true);
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
                    return true
                }else{
                    setUser({
                        email: null,
                        name: null,
                        logged: false,
                        error: 'El usuario o contraseña es inválido'
                    })
                    return false;
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
        <LoginContext.Provider value={{user, login, logout}}>
            {
                children
            }
        </LoginContext.Provider>
    )
}
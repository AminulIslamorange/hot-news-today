import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useLocation } from "react-router-dom";

export const AuthContext=createContext(null);
const auth = getAuth(app);



const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const location=useLocation();




    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWEAP=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=>{
            unSubscribe();
            
        }
    },[])



    const authInfo={user,createUser,signInWEAP,logOut,loading}


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
import React, { createContext, useEffect, useState } from 'react';
import { 
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
   } from 'firebase/auth'
import app from './../Firebae/Firebase.config';




export const AuthContext = createContext()

const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); // This is user information will be
    const [loading, setLoading] = useState(true)

    const userCreateAccount = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const userSignInAccount = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const UserUpdateProfile = (upDateProfile) =>{
        return updateProfile(auth.currentUser, upDateProfile)
    }

    const userSignOutAccount = () =>{
        setLoading(true)
        return signOut(auth)
    }
   
   
    

    useEffect( () =>{

        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user observing');
            setUser(currentUser)
            setLoading(false)
        });

        return () => unsubscribe();

    },[])

    const authInfo = {
        user,
        loading,
        userCreateAccount,
        userSignInAccount,
        userSignOutAccount,
        UserUpdateProfile
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
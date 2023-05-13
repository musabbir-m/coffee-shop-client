import React, { createContext, useState, useEffect } from 'react'
import app from '../firebase/firebase.config'
import {
    createUserWithEmailAndPassword,
    getAuth,
    GithubAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";

export const AuthContext= createContext()
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)

    const signUp= (email, password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const login= (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout= ()=>{
            setLoading(true)
            return signOut(auth)
    }

    const updateUser= (userInfo)=> {
       return updateProfile(auth.currentUser, userInfo )
    }

    useEffect (
        ()=> {
            const unsubscribe=  onAuthStateChanged (auth, (currentUser)=>{
                setUser(currentUser)
                setLoading(false)
            })
            return ()=> {unsubscribe()}
        }, []
    )

const authInfo= {
    user, 
    loading, 
    logout,
    login, 
    signUp,
    updateUser


}

return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
)
  
}

export default AuthProvider
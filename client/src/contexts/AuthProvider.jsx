import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"



export const AuthContext=createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const[user,setUser]=useState()
    const [loading,setLoading]=useState(true)

    //create an account
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signup with gmail 

    const signUpwithGmail=()=>{
      return  signInWithPopup(auth, googleProvider)         
    }

    //login using email and password

    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

     //logout
     const logOut =()=>{
      return  signOut(auth)
     }

     //update profile
     const updateUserProfile=(name,photoURL)=>{

      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
          })
     }

     //check signed in user
     useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false)
            
            } else {
              // User is signed out
              // ...
            }
          });
          return ()=>{
            return unsubscribe()
          }
     },[])

    const authInfo={

        user,
        createUser,
        signUpwithGmail,
        login,
        logOut,
        updateUserProfile,
        loading
    }

   

  return (

    <AuthContext.Provider value={authInfo}>
        {children}

    </AuthContext.Provider>
  )
}

export default AuthProvider
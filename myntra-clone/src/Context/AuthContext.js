// AuthContext.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // Initialize user state to null
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is logged in
        setUser(authUser);
      } else {
        // User is logged out
        setUser(null);
      }
      setLoading(false); // Update loading state
    });

    return unsubscribe; // Cleanup function
  }, []);

  const value = {
    user,
    loading,
    // Add other auth functions like signup, login, logout if needed
  };

  return <AuthContext.Provider value={value}>
            {!loading && children}
         </AuthContext.Provider>;
}


// import React,{useState,useEffect} from 'react'
// import { auth } from '../firebase';

// export const AuthContext = React.createContext();
// export function AuthProvider({children}){
//     const [user,setUser] = useState();
//     const [loading,setLoading] = useState(true)

//     function signup(email,password){
//         return auth.createUserWithEmailAndPassword(email,password);
//     }

//     function login(email,password){
//         return auth.signInWithEmailAndPassword(email,password);
//     }

//     function logout(){
//         return auth.signOut()
//     }

//     useEffect(()=>{
//         const unsub = auth.onAuthStateChanged((user)=>{
//             setUser(user);
//             setLoading(false);
//         })
//         return ()=>{
//             unsub();
//         }
//     },[])

//     const store={
//         user,
//         signup,
//         login,
//         logout
//     }

//     return(
//         <AuthContext.Provider value={store}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }
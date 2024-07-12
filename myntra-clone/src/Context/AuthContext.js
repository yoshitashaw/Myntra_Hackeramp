import React,{useState,useEffect} from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut  } from "firebase/auth";

export const AuthContext = React.createContext();
export function AuthProvider({children}){
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true)

    function signup(email,password, username){
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const newUser = userCredential.user;
          setUser(newUser)
        })
        .then(() => {
          updateProfile(auth.currentUser, { displayName: username });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
        });
    }

    function login(email,password){
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const newUser = userCredential.user;
          console.log(newUser)
          setUser(newUser)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode)
        });
    }

    function logout(){
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    useEffect(()=>{
        const unsub = auth.onAuthStateChanged((user)=>{
            setUser(user);
            setLoading(false);
        })
        return ()=>{
            unsub();
        }
    },[])

    const store={
        user,
        signup,
        login,
        logout
    }

    return(
        <AuthContext.Provider value={store}>
            {!loading && children}
        </AuthContext.Provider>
    )
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
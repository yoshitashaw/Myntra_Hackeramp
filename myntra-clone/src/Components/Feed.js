// Feed.js
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { firestore } from '../firebase';
import Posts from './Posts';
import Header from './Header';

function Feed() {
    const { user, logout } = useContext(AuthContext);
    const [userData, setUserData] = useState('');

    useEffect(() => {
        const unsub = firestore.collection('users').doc(user.uid).onSnapshot((snapshot) => {
            setUserData(snapshot.data());
        });
        return () => unsub();
    }, [user]);

    return (
        <>
            <Header userData={userData} />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Posts userData={userData} />
            </div>
        </>
    );
}

export default Feed;




// import React,{useContext,useEffect,useState} from 'react'
// import { AuthContext } from '../Context/AuthContext'
// import { database } from '../firebase'
// import Posts from './Posts'
// import Header from './Header';

// function Feed() {
//     const {user,logout} = useContext(AuthContext)
//     const [userData,setUserData] = useState('')
//     useEffect(()=>{
//         const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
//             setUserData(snapshot.data())
//         })
//         return ()=> {unsub()}
//     },[user])
//     return (
//         <>
//         <Header userData={userData}/>
//         <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
//             {/* <div className="comp" style={{width:'50%'}}>
//                 <h1>Welcome to feed</h1>
//                 <button onClick={logout}>Log out</button>
//             </div> */}
//             <Posts userData={userData}/>
//         </div>
//         </>
//     )
// }

// export default Feed
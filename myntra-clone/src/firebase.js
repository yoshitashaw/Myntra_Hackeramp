// // Import the necessary Firebase services
// import firebase from 'firebase/app';
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

// // Your Firebase configuration object
// const firebaseConfig = {
//   apiKey: "AIzaSyAZrH2ACKZXkKWVfUIxK7tn_vkrqst-llU",
//   authDomain: "clone-bcafc.firebaseapp.com",
//   projectId: "clone-bcafc",
//   storageBucket: "clone-bcafc.appspot.com",
//   messagingSenderId: "942803757307",
//   appId: "1:942803757307:web:caabdd2ce6f418d31de85e",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get a reference to the Firebase services
// const auth = getAuth(app);
// const firestore = getFirestore(app);
// const storage = getStorage(app);
// const database = firebase.firestore();

// // Export the services for use in your application
// export { app, auth, firestore, storage, database };


// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyAZrH2ACKZXkKWVfUIxK7tn_vkrqst-llU",
  authDomain: "clone-bcafc.firebaseapp.com",
  projectId: "clone-bcafc",
  storageBucket: "clone-bcafc.appspot.com",
  messagingSenderId: "942803757307",
  appId: "1:942803757307:web:caabdd2ce6f418d31de85e",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
const firestore = firebase.firestore();

export const database = {
  users : firestore.collection('users'),
}

export const storage = firebase.storage()
// const auth = firebase.auth();
// const database = firebase.firestore();

// export { auth, database };

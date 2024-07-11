// Import the necessary Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAZrH2ACKZXkKWVfUIxK7tn_vkrqst-llU",
  authDomain: "clone-bcafc.firebaseapp.com",
  projectId: "clone-bcafc",
  storageBucket: "clone-bcafc.appspot.com",
  messagingSenderId: "942803757307",
  appId: "1:942803757307:web:caabdd2ce6f418d31de85e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the Firebase services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

// Export the services for use in your application
export { auth, firestore, storage, app };


// // firebase.js
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAZrH2ACKZXkKWVfUIxK7tn_vkrqst-llU",
//   authDomain: "clone-bcafc.firebaseapp.com",
//   projectId: "clone-bcafc",
//   storageBucket: "clone-bcafc.appspot.com",
//   messagingSenderId: "942803757307",
//   appId: "1:942803757307:web:caabdd2ce6f418d31de85e",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const auth = firebase.auth();
// const database = firebase.firestore();

// export { auth, database };

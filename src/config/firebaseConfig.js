import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBy2dawELoQDo4qjgiEPXMcrHqNdP_C3uk",
    authDomain: "moments-prd.firebaseapp.com",
    projectId: "moments-prd",
    storageBucket: "moments-prd.appspot.com",
    messagingSenderId: "309289390850",
    appId: "1:309289390850:web:412563507c7bfd5e88281b"

};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);
export const storage = getStorage(app);
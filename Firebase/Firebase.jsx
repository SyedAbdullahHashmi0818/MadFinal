import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyDIhrb6v3rXMvkuT_4Bi96y-Wwk_6MMWmQ",
    authDomain: "introverse-3d38b.firebaseapp.com",
    projectId: "introverse-3d38b",
    storageBucket: "introverse-3d38b.appspot.com",
    messagingSenderId: "419100033003",
    appId: "1:419100033003:web:888eb1f5ebf762245ea3ae"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
 export const db = getFirestore(app);
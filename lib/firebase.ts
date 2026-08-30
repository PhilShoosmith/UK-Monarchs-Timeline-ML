import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBVrkoOqzINsMLt1mzn4VEL6CiYSEm7pi4",
  authDomain: "us-presidents-timeline.firebaseapp.com",
  projectId: "us-presidents-timeline",
  storageBucket: "us-presidents-timeline.firebasestorage.app",
  messagingSenderId: "1051748190259",
  appId: "1:1051748190259:web:50207ceca649e96aa6bb46",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, "ai-studio-remix26languages-6ddb39f6-9545-4546-945f-1593839e671e");

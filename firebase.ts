// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCp6WuAQ8TJUyz3eOxrRTmT49P7JYkzVOs',
  authDomain: 'portfolio-firecms.firebaseapp.com',
  projectId: 'portfolio-firecms',
  storageBucket: 'portfolio-firecms.appspot.com',
  messagingSenderId: '94489307744',
  appId: '1:94489307744:web:87a5237fa1a4f26f933105',
  measurementId: 'G-Y5C182JYDD',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

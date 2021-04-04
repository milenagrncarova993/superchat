import React from 'react';
import './App.css';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDi-UX7ArN-b9hfoEABzk9ES0R4HS1dIR4",
  authDomain: "eng-carport-299408.firebaseapp.com",
  projectId: "eng-carport-299408",
  storageBucket: "eng-carport-299408.appspot.com",
  messagingSenderId: "963065598689",
  appId: "1:963065598689:web:bfb83a7ac5d3499f005da0",
  measurementId: "G-BKYQ31GHPE"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;

import './App.css'
import { Firebase } from './firebase/config';
import React from 'react';

function App() {
  
  
  return (
    <div>
     <h1>HELLO WORLD</h1>
     <button onClick={()=>{
     Firebase.firestore().collection('Products').doc('p471pb26t9QWYGbl9BPn').set({
      price:'6000'
     }).then(()=>{
      console.log("Data modified");
     })
     }}>Click Me</button>
    </div>
  );
}

export default App; 

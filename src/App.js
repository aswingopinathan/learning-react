import './App.css'
import { Firebase } from './firebase/config';
import React from 'react';

function App() {
  
  
  return (
    <div>
     <h1>HELLO WORLD</h1>
     <button onClick={()=>{
     Firebase.firestore().collection('Products').get().then(snapshot=>{
      snapshot.forEach((obj)=>{
        console.log(obj.data());
      })
     })
     }}>Click Me</button>
    </div>
  );
}

export default App; 

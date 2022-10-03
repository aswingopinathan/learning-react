import './App.css'
import About from './Container/About';
import Profile from './Container/Profile';
import React,{useState} from 'react';
import {Route,Routes,Link,useNavigate} from 'react-router-dom';
function App() {
  const [state,setState] = useState('')
  const navigate = useNavigate()
  return (
    <div>
      <h1>ASWIN</h1>
      {/* <Link to='/about'>About Page</Link><br/>
      <Link to='/profile'>Profile Page</Link> */}
      <button onClick={()=>navigate('/about')}>About Page</button>
      <button onClick={()=>navigate('/profile')}>Profile Page</button>
      <Routes>
      <Route element={<About />}  path="/about" />
      <Route element={<Profile />}  path="/profile" />
      </Routes>
    </div>
  );
}

export default App; 

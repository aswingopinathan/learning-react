import './App.css'
import About from './Container/About';
import Profile from './Container/Profile';
import React,{useState} from 'react';
import {Route,Routes,Link,useNavigate} from 'react-router-dom';
import {AppContext} from './AppContext'
function App() {
  const [state,setState] = useState(10)
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate('/about')}>About Page</button>
      <button onClick={()=>navigate('/profile')}>Profile Page</button>
      <AppContext.Provider value={{data:state}}>
      <Routes>
      <Route element={<About />}  path="/about" />
      <Route element={<Profile />}  path="/profile" />
      </Routes> 
      </AppContext.Provider>
    </div>
  );
}

export default App; 

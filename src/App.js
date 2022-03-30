import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login'
import CreatePost from './pages/CreatePost';
import {auth}from "./firebase-config"
import {signOut} from "firebase/auth"

import {React,useState} from "react";
function App() {
  const[authIn,setAuthIn]=useState(false)

  const singUserOut=()=>{
    signOut(auth).then((response)=>{
      localStorage.clear()
      setAuthIn(false)
      window.location.pathname="/login"
    })
  }
  return (
    <Router> 
      <nav ><Link to = '/' class="nav-item">Home</Link>
    { !authIn? <Link to='/login'   className="button">Login</Link>: <><Link to='/createpost'>Create Post</Link><button onClick={singUserOut}>Log out</button></>}
     </nav>
      <Routes><Route path="/" element={<Home  authIn={authIn}/>}/>
    <Route path="/login" element={<Login setAuthIn={setAuthIn}/>}/>
    <Route path="/createpost" element={<CreatePost authIn={authIn}/>}/></Routes>
      
    
    </Router>
  
    
  );
}

export default App;

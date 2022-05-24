
import './App.css';
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { useState } from 'react';
// 

const auth = getAuth(app);
function App() {
  const [user , setUser] = useState({})
  

const provider = new GoogleAuthProvider();
  // google sign up
  const googleSignUp = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  // google sign up
  // google log out
  const googleSignOut = ()=>{
    signOut(auth)
    .then(() => {
      setUser({})
    })
    .catch((error) => {
      setUser({})
    });

  }
  // google log out
  // facebook login
  const facebookLogIn = ()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      
      const user = result.user;
      setUser(user)
      console.log(user);
  
      
  
      
    })
    .catch((error) => {
      console.log(error);
    });
  
  }
  // facebook login
  const facebookLogout = ()=>{
    signOut(auth).then(() => {
     setUser({})
    }).catch((error) => {
      setUser({})
    });
  }
  // facebooklogout
  // facebooklogout
  return (
    <div className="App">
     <button className='btn btn-primary btn-lg mt-5 me-5' onClick={googleSignUp}><FcGoogle></FcGoogle> signup</button>
     <button className='btn btn-primary btn-lg mt-5' onClick={googleSignOut}><FcGoogle></FcGoogle> log out</button><br></br>
     <button className='btn btn-outline-danger mt-5' onClick={facebookLogIn}><BsFacebook></BsFacebook>Facebook</button>
     <button className='btn btn-outline-danger mt-5 ms-5' onClick={facebookLogout}><BsFacebook></BsFacebook>:ogout</button>


     <h2>email:{user.email}</h2>
     <h2>Name:{user.displayName}</h2>
     <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;

import {  useState } from "react"
import React from 'react'
import { useNavigate,Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

// import './st'


export const Login = () => {
  const [err,setErr]=useState(false)
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    // setLoading(true);
    e.preventDefault();
    // const displayName = e.target[0].value;
    const email = e.target[0].value;
    const password = e.target[1].value;
    // const file = e.target[3].files[0];
    // console.log(displayName,email,password)
    // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  // const auth = getAuth();
  try{
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
  // } catch (err) {
  //   setErr(true);
  // }    
  }
  catch (err) {
    setErr(true);

    console.log(err);
    
    //     // setLoading(false);
  }
  
  // createUserWithEmailAndPassword(auth, email, password);
}
  return (
   <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">AK_Creation</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}action="#">

        {/* <input type="text" placeholder='Name'/> */}
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <button >Sign in</button>
        {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account?<Link to ="/register">Register</Link></p>

    </div>
   </div>
  )
}

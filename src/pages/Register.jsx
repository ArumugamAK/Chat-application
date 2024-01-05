import React, { useState } from 'react'
import { createUserWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { auth,storage,db } from "../firebase";
// import { db1 } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate,Link} from "react-router-dom";
export const Register = () => {
  const [err,setErr]=useState(false)
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    // setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    // console.log(displayName,email,password)
    // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

  // const auth = getAuth();
  try{

    const res= await createUserWithEmailAndPassword(auth, email, password)
     const date = new Date().getTime();
        const storageRef = ref(storage,`${displayName + date}`);
        // console.log("hi hi"+storageRef+`${displayName + date}`);
          // const uploadTask=uploadBytesResumable(storageRef ,file);
          await uploadBytesResumable(storageRef, file).then(() => {
            getDownloadURL(storageRef).then(async (downloadURL) => {
              try {
                console.log(1);
                            await updateProfile(res.user, {
                              displayName,
                              photoURL: downloadURL,
                            });
                            console.log(2);
                            //  const db = getFirestore();
                            await setDoc(doc(db, "users", res.user.uid), {
                              uid: res.user.uid,
                              displayName,
                              email,
                              photoURL: downloadURL,
                            });
                            console.log(3);
                            await setDoc(doc(db, "userChats", res.user.uid), {});
                            navigate("/");
                            console.log(4);
                          
              }
              catch (err) {
                console.log(err);
                console.log("error 28 aug");

                setErr(true);
                // setLoading(false);
              }

          
            });
          });
                 
  }
  catch (err) {
    setErr(true);

    console.log("asa",err);
    
    //     // setLoading(false);
  }
  // console.log(err);
  
  // createUserWithEmailAndPassword(auth, email, password);
}
//   try {
  //     //Create user
  
  //     //Create a unique image name
  //     const date = new Date().getTime();
  
  //       getDownloadURL(storageRef).then(async (downloadURL) => {
  //         try {
  //           //Update profile
  //           await updateProfile(res.user, {
  //             displayName,
  //             photoURL: downloadURL,
  //           });
  //           //create user on firestore
  //           await setDoc(doc(db, "users", res.user.uid), {
  //             uid: res.user.uid,
  //             displayName,
  //             email,
  //             photoURL: downloadURL,
  //           });
  
  //           //create empty user chats on firestore
  //           // await setDoc(doc(db, "userChats", res.user.uid), {});
  //           // navigate("/");
  //         } catch (err) {
  //           console.log(err);
  //           setErr(true);
  //           // setLoading(false);
  //         }
  //       });
  //     });
  //   } catch (err) {
  //     setErr(true);
  //     // setLoading(false);
  //   }
  // };

  return (
   <div className="formContainer">
    <div className="formWrapper">
        <span className="logo">AK_Creation</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>

        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
        <input style={{display:'none'}} type="file" id ="file"/>
        <label htmlFor="file">
            <img src="https://www.pngitem.com/pimgs/m/80-801532_photos-icon-png-image-iphone-photo-gallery-icon.png" alt="" />
            <span>Add an Avatar</span>
        </label>
        <button type="submit">Sign up</button>
        {err && <span> Something went wrong</span>}
        </form>
        <p>You do have an account? <Link to ="/login">Login</Link></p>
    </div>
   </div>
  )
}

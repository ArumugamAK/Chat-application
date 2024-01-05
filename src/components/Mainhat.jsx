import React, { useContext, useEffect, useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
 import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
  import AddToHomeScreenIcon from '@material-ui/icons/AddToHomeScreen';
import Addmessage from './Addmessage';
import { Input } from './input';
import { ChatContext } from '../context/ChatContext';
// import { name } from './Sidechat';
import { db1 } from "../firebase";
import { useParams } from "react-router-dom";
import NameContext from './NameContext';

// import { Addmessage } from './Addmessage';

function Mainhat() {
  const {roomId}= useParams()
  // alert(roomId)
  // const [userDisplayName, setUserDisplayName] = useState(null);
  // const { name, id } = useContext(NameContext);
  // const[user,setuser]=useState('');
  const {data}=useContext(ChatContext)
  // var [normal_name,setNormal_name]=useState(data.user.displayName);
  // const[name1,setname]=useState(false);
  const [roomData,setroomdata]=useState('')
  const[messages,setmessage]=useState([])
  // useEffect(() => {
  //   // setNormal_name(data.user.displayName)
  //   setuser(normal_name) 
  //   console.log('normal CHAT')

  //   console.log(name,normal_name)
    
  // }, [data.user.displayName]);

  // useEffect(() => {
  //   // Simulate fetching user data asynchronously (replace this with your actual data fetching logic)
  //   const fetchData = () => {
  //     // Assuming you fetch user data and set it in the state
  //     // Update the user display name based on the fetched data
  //     setUserDisplayName(data.user ? data.user.displayName : (data.user && name) ? user : null);
  //   };

  //   fetchData();
  // }, [userDisplayName]);
 
  useEffect(()=>{
    if(roomId){
        db1.collection("rooms")
        .doc(roomId)
        .onSnapshot(snapshot=>setroomdata(snapshot.data()))
        //////////
        db1.collection("rooms")
        .doc(roomId).collection('message')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot=>setmessage(snapshot.docs.map((doc)=>doc.data())));

    }
},[roomId])
  // useEffect(() => {
  //   setuser(name)
  //   if(name){
  //     // setNormal_name('bshaivi')
      
  //   }
  //   // normal_name=''
  //   console.log('group CHAT')
  //   console.log(name,normal_name)
  // }, [name]);
  // console.log("namendk--"+name)
  // const { user1, chatId1 } = data;
  return (
    <div className='chat'>
    <div className="chatInfo">
      {/* <span>{name}</span> */}
     {/* {name?<span>{name}</span>:<span></span>}  */}
     {/* <span>{if (data.user) displayName elseif (data.user && user) user}</span> */}
     <span>{data.user?.displayName}</span>
     {/* {name && <span>{name}</span>} */}
     {/* <span>
  {userDisplayName}
</span> */}

     {/* <span>{data.user?.displayName}</span> */}
     {/* {user?<span>{data.user?.displayName}</span>:<span></span>}  */}
      {/* <span>{user}</span> */}
        <div className="chatIcons">
           <AddAPhotoIcon/>
           <MoreVertIcon/>
           <AddToHomeScreenIcon/>
        </div>
    </div>
    {/* <Addmessage/> */}
    <Addmessage/>
    <Input/>
    </div>
  )
}
export default Mainhat

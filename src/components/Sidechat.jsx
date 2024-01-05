import React,{useEffect,useState,useContext,useRef}from 'react'
import { db1 } from '../firebase';
import NameContext from './NameContext';
// import { useComponentCommunication } from './ComponentCommunicationContext';
// import { useCommunication } from './communication';
import { Link } from 'react-router-dom';
import { NoEncryption } from '@material-ui/icons';
// import Search from './Search';
// import Mainhat from './Mainhat';
// import App from '../App';

export let name='';
export const Sidechat = ({name,id,photo,addNewChat}) => {
  // const { onClickExecutedSecond } = useCommunication();
  // const { onClickExecutedSecond, setOnClickExecutedFirst } = useCommunication();
  const ref = useRef();
    const [send,setsend]=useState(false);
    const[messages,setmessage]=useState('');
    const { setName, setId } = useContext(NameContext);
    useEffect(() => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [id]);
    useEffect(()=>{
        if(id){
            db1.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot(Snapshot=>
                setmessage(Snapshot.docs.map(
                    (doc)=>doc.data())))
        }
    },[id]);
    useEffect(() => {
        name = send; // Update the exported name whenever 'send' changes
      }, [send]);
    function click(name1,id){
      // if (!onClickExecutedSecond) {
        console.log("hon"+name1);
        setsend(true);
        setName(name1); 
        setId(id); 
        // setOnClickExecutedFirst(true); 
      // }
        //  name = name1
        // <Mainhat name={name}/>
    }
    // console.log("message"+name)
  return  !addNewChat?(
    <Link to ={`/${id}`}>
  <div className="userChat" onClick={()=>click(name,id)} >
    <img src={photo} alt="" />
    <div className="userChatInfo" 
      >
    <span style={{}}>{name}</span>
    <p>{messages[0]?.message}</p>
    </div>
    {/* {send && <Mainhat name={name}/>} */}
  </div>
   </Link> ):
    (<div></div>)
  
}

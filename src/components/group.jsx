import React,{useState,useEffect}from 'react'
import '../style.scss';
import { Sidechat } from './Sidechat';
import { db1 } from "../firebase";
export const Group = () => {

    const [rooms,setroom]=useState([]);
    // const[messages,setmessage]=useState('');
    useEffect(()=>{
        const unsubscribe=db1.collection("rooms").onSnapshot((Snapshot)=>(
            setroom(Snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()
            })))
        ))
        // console.log("rooms"+rooms);
        return ()=>unsubscribe()
    },[]);
    // console.log(rooms);
    // console.log("messages"+messages);
  return (
    <div>
        <Sidechat addNewChat/>
        { rooms.map(room =>(
            <Sidechat key={room.id} name={room.data.name} 
            id={room.id} photo={room.data.roomPhoto} />
        ))}
    </div>
  )
}

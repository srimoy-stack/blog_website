import {React,useState,useEffect }from 'react'
import {addDoc,collection}from "firebase/firestore"
import {db,auth}from "../firebase-config"
import { useNavigate } from 'react-router-dom'
export default function CreatePost({authIn}) {
  const[title,setTitle]=useState()
  const[text,setText]=useState()
let navigate=useNavigate();
  const postsCollectionRef = collection(db,"posts")
  const createPost = async () =>{
    await addDoc(postsCollectionRef,{title,text,author:{name: auth.currentUser.displayName,id:auth.currentUser.uid}})
navigate("/")
  }

  useEffect(()=>{
if(!authIn){
  navigate("/login")
}
  },[])
  return (
    <div className="createPostPage">
      <div className="cpContainer">

      <h1>Create A post</h1>
      <div className="inputGp">
        <lable>Title : </lable>
        <input placeholder="Title" onChange={(e)=>{{setTitle(e.target.value)}  }  
   
        }/>
        <div className="inputGp">
        <lable>post : </lable>
        <textarea placeholder="Post" onChange={(e)=>{{setText(e.target.value)}}}/>
        </div>
        <button onClick={createPost}>Submit Post</button>
      </div>

      </div></div>
  )
}


import React ,{useState,useEffect,useRef} from "react";
import axios from "axios";
import {send,HeartPulse,SmartPhone} from "./lucide-react";

import "./app.css";
import { text } from "express";
const PAPI_Base_URL="http://localhost:5000/api/v1";
function App(){
const[messages,setMessages]=useState([{text:'hello welcome mahama camp hospital ,how i can help you today ?',isBot:true}]) ;
const[input ,SetInput]=useState("");
const [loading,setloading]=useState(false)   ;
const messagesEndRef=useRef(null);
const scrollToButton=()=>{
    messagesEndRef.current ?.scrollInToView({behavior:"smooth"});
    useEffect(() => {
      scrollToBottom();
    }, [message]);
  const handleSend = async (event) => {
    event.preventDefault();
    if (input.trim()|| loding ) return;
    const newMessage = input;
    setInput("");
    setMessage(prevMessages=>
    [...prevMessages,{text:newMessage,isBot:false}]);
    setloading(true);
    try {
        const response=await axios.post(`${PAPI_Base_URL}/chat`,
        {message:newMessage});
        const botReply=response.data.reply ;
        setMessages(prevMessages=>
        [... prevMessages,{text:botReply,isBot:true}]
        )
        
    } catch (error) {
      console.log("Eorror sending message :",error)  
    }finally{
        setloading(false); 
    }
}
}  
const sendSMSnotification=async()=>{
    const phoneNumber=prompt("Enter the phone number to send the notification:");
    if(!phoneNumber) return ;
    try{
        await axios.post(`${PAPI_Base_URL}/send-sms`,{phoneNumber});
        alert("sms notification sent ")
    }
    catch (error){
alert("Failed to send sms notification please try again .")
    }
}
        
    return(
    
        <div  className="chat-ontainer">
            <div className="chat">
                <HeartPulse size={48} color="#00ff15" className="haert-icon"/>
                <h1>Mahama Health care assistant</h1>
            </div>
        </div>
    
    )
}

export default App ;
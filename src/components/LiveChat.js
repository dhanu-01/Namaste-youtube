import React, { useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux';
import { addChatMessage } from '../utils/Redux/chatSlice';
import { randomNameGenerator,randomStringGenerator } from '../utils/helper';


const LiveChat = () => {
    const liveMessages = useSelector(store => store.chat.chatMessages)
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
      const timer =   setInterval(()=>{
            //api polling
            dispatch(addChatMessage({
                name: randomNameGenerator(),
                message: randomStringGenerator(8)
            }));
           
        },2000)

      return () => {
        clearTimeout(timer);
      }

    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChatMessage({
            name: "DhaNu",
            message : message
        }))
        setMessage("");
    }

  return (
   <div className='flex flex-col w-full'>
     <div className='mx-2 border border-gray-300 w-full p-2  rounded shadow-sm shadow-gray-300 overflow-y-scroll h-[450px] flex flex-col-reverse'>
        <div>
            {liveMessages && 
               liveMessages.map((message)=> <ChatMessage messages = {message}/>)
            }
        </div>
    </div>
    <form className='w-full p-2 m-2 border border-black rounded-md' onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className="border border-gray-600 rounded-full w-3/4 p-2 placeholder-[#737373] focus:outline-none focus:border-b-1  focus:border-green-500" placeholder="type your message..."
            value = {message} onChange={(e)=>setMessage(e.target.value)}
        />
        <button className='p-2'>Send</button>
    </form>
   </div>
    
  )
}

export default LiveChat
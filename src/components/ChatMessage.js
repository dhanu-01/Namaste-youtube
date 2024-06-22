import React from 'react'

const ChatMessage = ({messages}) => {

  const {message,name} = messages;
  return (
    <div className='flex items-center bg-gray-200 rounded-md p-2 mb-2'>
        <div className='h-7 w-7'>
            <img
            src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
            alt="userIcon"
            />
        </div>
        <div className='pl-2'>
            <p className='font-bold'>{name}</p>
            <p>{message}</p>
        </div>
    </div>
  )
}

export default ChatMessage
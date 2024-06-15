import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const lists = ["All", "Live", "Gaming", "Science Fiction", "Web Development", "TED", "Machine Learning", "APIs", "Namaste Javascript", "Doctor Strange"]
  return (
    <div className='fixed top-20 bg-white w-screen -z-10'>
        {
            lists.map((list,index)=>{
                return (
                    <Button text = {list} key={index}/>
                )
            })
        }
    </div>
  )
}

export default ButtonList
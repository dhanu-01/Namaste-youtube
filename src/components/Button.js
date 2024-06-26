import React from 'react'

const Button = ({text}) => {
  return (
    <button className='px-4 py-2 m-2 bg-gray-200 rounded-lg'>
        {text}
    </button>
  )
}

export default Button
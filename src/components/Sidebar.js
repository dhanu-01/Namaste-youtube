import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
    const isMenuOpen = useSelector((store=>store.app.isMenuOpen))

    if(!isMenuOpen)return null;

  return (
    <div className='w-48 mt-20 fixed top-0 left-0 h-full bg-white shadow-lg z-10 p-4'>
        <ul className='m-4'>
            <li>Home</li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <ul className='m-4'>
            <li className='font-bold'>Subscriptions</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
        <ul className='m-4'>
            <li className='font-bold'>Watch Later</li>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
  )
}

export default Sidebar
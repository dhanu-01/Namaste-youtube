import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Body = () => {
  const isMenuOpen = useSelector((store=>store.app.isMenuOpen))
  return (
    <div className="flex">
      <Sidebar />
        <div className={`${isMenuOpen ? 'ml-48': 'ml-0'} w-full`}>
         <Outlet />
        </div>
  </div>
  )
}

export default Body
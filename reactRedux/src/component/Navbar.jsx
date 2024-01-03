import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Navbar() {
  const items = useSelector((state) => state.cart)
  return (
    <div className=' flex justify-between items-center bg-white text-center h-16 pl-8 shadow-md w-full '>
      <span className='font-bold'>FakeShpo</span>
      <div>
        <Link className='navLink font-bold mr-5' to={"/"}>Home</Link>
        <Link className='navLink  font-bold mr-2' to={"/cart"}>Cart</Link>
        <span className='font-bold pr-8 '>items:{items.length}</span>
      </div>
    </div>
  )
}

export default Navbar

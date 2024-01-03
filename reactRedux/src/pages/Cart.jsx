import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice';


function Cart() {
  const cartItems = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  return (
    <div className='cartWrapper flex flex-wrap justify-evenly gap-8   my-8'>
      {cartItems.map((item)=>(
        <div className='cartCard  bg-white h-30 w-full mx-8 rounded-sm shadow-xl  p-2 font-bold'>
          <div className='flex justify-between items-center text-center'>
        <img className='w-20 h-28' src={item.image} alt="img" />
        <h5 className=''>{item.title}</h5>
        <h5 className=''>{item.price}</h5>
        <button className='btn bg-purple-900 py-2 px-6 rounded-md text-white' onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
        </div>
      ))}
    </div>
  )
}

export default Cart

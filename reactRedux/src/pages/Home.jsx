import React from 'react'
import { useEffect } from 'react'
import { add } from '../Redux/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchproducts } from '../Redux/ProductSlice'




function Home() {
  const dispatch = useDispatch();
  const {data:products,status} = useSelector((state) => state.product)


  useEffect(() => {
    dispatch(fetchproducts());
  }, [])

  const handleAdd = (product) => {
    dispatch(add(product));
  }

  if(status === STATUSES.Loading){
    return <h2 className='font-bold'>Loading...</h2>
  }

  return (
    <div className='flex flex-wrap justify-evenly gap-8  my-8'>
      {
        products.map((product) => (
          <div className='card bg-white h-90 w-64 rounded-sm shadow-xl text-center p-2 font-bold' key={product.id}>
            <img className='w-20 h-30 ml-20' src={product.image} alt='img'/>
            <h4  className='mt-6 '>{product.title}</h4>
            <h5 className='mt-6'>{product.price}</h5>
            <button className='btn mt-4 bg-purple-900 py-2 px-6 rounded-md text-white' onClick={() => handleAdd(product)}>Add to cart</button>
          </div>
        ))
      }
    </div>
  )
}

export default Home

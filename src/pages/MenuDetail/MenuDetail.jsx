import React from 'react'
import { useLoaderData } from 'react-router-dom'

const MenuDetail = () => {
    const data= useLoaderData()
    console.log(data);
  return (
    <div className='mt-5'>
        <div className="card  bg-base-100 shadow-xl">
  <figure><img className='w-96 h-58' src={data.img} alt="Movie"/></figure>
  <div className="card-body">
  <h2 className="text-2xl md:text-4xl font-bold text-center text-[#A75D5D]">{data.title}</h2>
    <div>
    
    <p className='text-xl font-bold'>Price: <span className='text-[#A75D5D]'>${data.price}</span> </p>
    </div>
    <p className='text-lg'>
        {data.description}
    </p>
    <div className="card-actions justify-end">
      <button className="px-4 py-3 bg-[#A75D5D] text-white font-bold text-lg ">Purchase</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default MenuDetail
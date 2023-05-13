import React from 'react'

const MenuItemCard = ({data}) => {
  return (
    <div className="card w-96 glass">
  <figure><img className='w-full h-48' src={data.img} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{data.title}</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-end">
      <button className="py-4 px-2 w-38 bg-[#DAB88B] text-white text-lg font-bold hover:bg-inherit hover:text-black hover:border-2  hover:border-[#DAB88B] ">View Details</button>
    </div>
  </div>
</div>
  )
}

export default MenuItemCard
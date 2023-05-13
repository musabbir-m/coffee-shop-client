import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col px-2 md:flex-row justify-center items-center bg-[#F3E9DD]'>
        <div className='flex w-2/4 flex-col break-normal'>
            <h2 className='text-2xl md:text-5xl py-4'>
             Your destination to all the Great Coffee!
            </h2>
            <p className='text-xl mt-3'>
            The suppliers and producers we work with are at the top of <br /> their game. It’s our role to carry the magic from their hands <br /> to your table.
            </p>

          <div className='flex mt-5 md:mt-10 gap-2'>
          <button className='py-4 px-2 w-38 bg-[#DAB88B] text-white text-lg font-bold hover:bg-inherit hover:text-black hover:border-2  hover:border-[#DAB88B]'>Book A Table</button>
          <button className='py-4 px-2 w-38 border-2 border-[#DAB88B] text-lg font-bold hover:bg-[#DAB88B] hover:text-white '>Discover Now</button>
          </div>

        </div>
        <div className='w-2/4 relative flex justify-center'>
            <img className='max-w-full min-w-[300px] ' src="https://i.ibb.co/pdWfDgD/coffeCup.png" alt="" />
        </div>
    </div>
//    
  )
}

export default Banner
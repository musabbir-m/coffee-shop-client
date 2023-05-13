import React, { useEffect, useState } from 'react'
import MenuItemCard from './MenuItemCard/MenuItemCard';

const MenuItem = () => {

    const makeSlice = true;
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch("http://localhost:5000/services")
        .then((res) => res.json())
        .then((data) => {setServices(data)
        setLoading(false)
        });
    }, []);

    if(loading) {
        return (<button className="btn btn-square loading bg-white text-blue-600 border-none flex justify-center mx-auto"></button>)
    }
  return (
    <div className='flex flex-col items-center'>
        <h2 className='text-2xl md:text-4xl lg:text-5xl text-[#A75D5D]  font-bold py-5 md:py-10 lg:mt-8'>Pick your Favourite one from <br /> stunning options</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto px-3'>
      {
        services.map(service=> <MenuItemCard key={service._id} data={service}></MenuItemCard>)
      }
      </div>
      <button className='px-8 py-4 bg-[#A75D5D] text-white text-xl font-bold mt-8 hover:bg-inherit hover:border-2 border-[#A75D5D] hover:text-black'>See all</button>
    </div>
  )
}

export default MenuItem
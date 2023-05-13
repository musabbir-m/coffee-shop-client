import React, { useEffect, useState } from 'react'
import MenuItemCard from '../Home/MenuItem/MenuItemCard/MenuItemCard';

const Allmenu = () => {

    const [allmenu, setAllmenu] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      fetch("https://coffee-server-six.vercel.app/allservices")
        .then((res) => res.json())
        .then((data) => {setAllmenu(data)
        setLoading(false)
        });
    }, []);

    if(loading) {
        return (<button className="btn btn-square loading bg-white text-blue-600 border-none flex justify-center mx-auto"></button>)
    }

  return (
    <div className='flex items-center flex-col'>

        <h2 className='text-2xl md:text-4xl lg:text-5xl text-[#A75D5D]  font-bold py-5 md:py-10 lg:mt-8'>Pick your Favourite one from <br /> stunning options</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5'>
           {
            allmenu.map(menu=> <MenuItemCard key={menu._id} data={menu}></MenuItemCard>)
           }
        </div>
    </div>
  )
}

export default Allmenu
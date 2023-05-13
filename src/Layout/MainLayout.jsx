import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer/Footer'

const MainLayout = () => {
  return (
   <div className=''>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default MainLayout
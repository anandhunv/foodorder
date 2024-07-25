import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import '../App.css'
import Footer from '../component/Footer'

const Main = () => {
  return (
    <div className='bg-white'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Main
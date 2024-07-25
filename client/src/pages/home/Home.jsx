import React from 'react'
import Banner from '../../component/Banner'
import Categories from '../home/Categories.jsx'
import SpecialDishes from './SpecialDishes.jsx'
import Testimonials from './Testimonials.jsx'
import OurServices from './OurServices.jsx'

const home = () => (
  <div className='bg-white'>
    <Banner />
    <Categories />
    <SpecialDishes />
    <Testimonials />
    <OurServices/>
  </div>
)

export default home
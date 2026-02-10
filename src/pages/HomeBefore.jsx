import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import SearchBar from './SearchBar'
import Header from './Header'
import Service from './service'
import BestSeller from './BestSeller'
import Recomended from './Recomended'

const HomeBefore = () => {
  return (
    <div>
      <Header/>
      <Service/>
      <BestSeller/>
      <Recomended/>
    </div>
  )
}

export default HomeBefore

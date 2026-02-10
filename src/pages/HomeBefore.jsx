import React from 'react'
import Footer from '../components/ui/Footer'
import Header from './Header'
import Service from './service'
import BestSeller from './BestSeller'
import Recomended from './Recomended'
import FlashSale from './FlashSale'

const HomeBefore = () => {
  return (
    <div>
      <Header/>
      <Service/>
      <BestSeller/>
      <Recomended/>
      <FlashSale/>
      <Footer/>
    </div>
  )
}

export default HomeBefore

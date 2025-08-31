import CostOfBeauty from '@/components/modules/home-page/CostOfBeauty'
import Discount from '@/components/modules/home-page/Discount'
import ExclusiveCollections from '@/components/modules/home-page/ExclusiveCollections'
import FollowUs from '@/components/modules/home-page/FollowUs'
import Hero from '@/components/modules/home-page/Hero'
import NewArrival from '@/components/modules/home-page/NewArrival'
import Reviews from '@/components/modules/home-page/Reviews'
import SpecialSolistia from '@/components/modules/home-page/SpecialSolistia'
import TopPicks from '@/components/modules/home-page/TopPicks'
import React from 'react'
import BestSeller from '@/components/modules/home-page/BestSeller'
import Category from '@/components/modules/home-page/Category'
import Brands from '@/components/modules/home-page/Brands'
import Blogs from '@/components/modules/home-page/Blogs'

const Home = () => {
  return (
    <div className='space-y-20 md:space-y-48 '>
      <Hero />
      <Discount />
      <BestSeller />
      <CostOfBeauty />
      <Category />
      <Brands />
      <ExclusiveCollections />
      <NewArrival />
      <TopPicks />
      <SpecialSolistia />
      <Blogs />
      <FollowUs />
      <Reviews />
    </div>
  )
}
export default Home
import BrowseByCategory from '@/components/BrowseByCategory'
import CareerMentorSection from '@/components/CareerMentorSection'
import Navbar from '@/shared/Navbar'
import React from 'react'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BrowseByCategory/>
      <CareerMentorSection/>
    </div>
  )
}

export default Blog
import BrowseByCategory from '@/components/BrowseByCategory'
import CareerMentorSection from '@/components/CareerMentorSection'
import Navbar from '@/shared/Navbar'
import React from 'react'
import BlogHero from './_components/BlogHero'
import Footer from '@/components/Footer'
import BlogSearchSection from './_components/BlogSearchSection'

const Blog = () => {
  return (
    <div>
      <Navbar/>
      <BlogHero/>
      <BrowseByCategory/>
      <CareerMentorSection/>
      <BlogSearchSection/>
      <Footer/>
    </div>
  )
}

export default Blog
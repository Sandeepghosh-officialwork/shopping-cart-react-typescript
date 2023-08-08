import React from 'react'
import Carousel from './Carousel';
import LatestProducts from './LatestProducts';
import ViewSavings from './ViewSavings';
import WhyUs from './WhyUs';
import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import GiftSection from './GiftSection';

const Home:React.FC = () => {
  return (
    <>
      <Carousel />
      <LatestProducts />
      <ViewSavings />
      <WhyUs />
      <GiftSection />
      <ContactUs />
      <Testimonial />
    </>
  )
}

export default Home

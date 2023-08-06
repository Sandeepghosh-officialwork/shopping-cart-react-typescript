import React from 'react'
import CarouselPart from './CarouselPart';
import LatestProducts from './LatestProducts';
import ViewSavings from './ViewSavings';
import WhyUs from './WhyUs';
import ContactUs from './ContactUs';
import Testimonial from './Testimonial';
import GiftSection from './GiftSection';

const Home:React.FC = () => {
  return (
    <>
        <CarouselPart />
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

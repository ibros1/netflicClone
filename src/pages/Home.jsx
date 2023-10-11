import React from 'react';
import Faqs from '../components/Faq/Faqs';

import Feature from '../components/Features/Features';
import HomeHero from '../components/HomeHero';
import Footer from '../components/footer/footer'
import Subscribe from '../components/subscribe'



const Home = () => {
  return (
    <div className="relative">
      <HomeHero />
      <Feature />
      <Faqs />
      <Subscribe />
         <Footer />
     
      
    </div>
  );
};

export default Home;

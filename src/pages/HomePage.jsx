import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ServiceSection from '../components/Home/ServiceSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import ChooseRideSection from '../components/Home/ChooseRideSection';
import CitiesSection from '../components/Home/CitiesSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import DownloadAppSection from '../components/Home/DownloadAppSection';


const HomePage: React.FC = () => {
  return (
    <div>
    <HeroSection/>
    <ServiceSection/>
    <FeaturesSection/>
    <ChooseRideSection/>
    <CitiesSection/>
    <TestimonialsSection/>
    <DownloadAppSection/>
    </div>
  );
};

export default HomePage;
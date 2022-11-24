import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <AdvertiseSection></AdvertiseSection>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;
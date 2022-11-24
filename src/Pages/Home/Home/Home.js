import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';

const Home = () => {

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
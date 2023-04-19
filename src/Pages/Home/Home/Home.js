import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Banner from '../Banner/Banner';
import OurStory from '../OurStory/OurStory';
import ProductCategory from '../ProductCategory/ProductCategory';
import Stats from '../Stats/Stats';

const Home = () => {

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            <AdvertiseSection></AdvertiseSection>
            <Stats></Stats>
            <AboutUs></AboutUs>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;
import React, { useEffect } from 'react';
import AboutUs from '../AboutUs/AboutUs';
import AdvertiseSection from '../AdvertiseSection/AdvertiseSection';
import Banner from '../Banner/Banner';
import OurStory from '../OurStory/OurStory';
import ProductCategory from '../ProductCategory/ProductCategory';
import Stats from '../Stats/Stats';
import Ourapp from '../Ourapp/Ourapp';
import Offers from '../Offers/Offers';

const Home = () => {

    //scroll at the top after page is rendered
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ProductCategory></ProductCategory>
            <Offers></Offers>
            <AdvertiseSection></AdvertiseSection>
            <Stats></Stats>
            <Ourapp></Ourapp>
            <OurStory></OurStory>
        </div>
    );
};

export default Home;
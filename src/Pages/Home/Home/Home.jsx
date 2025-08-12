import React from 'react';
import AboutBg from '../../../assets/AboutBg.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Cover from '../../../Components/Cover/Cover';
import HomeBanner from '../../../Components/HomeBanner/HomeBanner';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <SectionTitle
                subHeading={"This is a shared section"}
                heading={"This is About section"}
            >

            </SectionTitle>
            this is home page
        </div>
    );
};

export default Home;
import React from 'react';
import AboutBg from '../../../assets/AboutBg.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import Cover from '../../../Components/Cover/Cover';
import HomeBanner from '../../../Components/HomeBanner/HomeBanner';
import OnGoingProjects from '../../../Components/OnGoingProjects';
import ChairmanSaying from './ChairmanSaying';



const Home = () => {
    return (
        <div>
            <HomeBanner />
            <ChairmanSaying/>
            <OnGoingProjects />

        </div>
    );
};

export default Home;
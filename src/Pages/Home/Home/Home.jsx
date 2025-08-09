import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Alor Disha Foundation | Home</title>
            </Helmet>


            <SectionTitle
            subHeading = {"This is a shared section"}
            heading = {"This is About section"}
            >

            </SectionTitle>
            this is home page
        </div>
    );
};

export default Home;
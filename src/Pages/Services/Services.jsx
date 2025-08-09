import React from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <div>
            <Helmet>
                <title>Alor Disha | Services </title>
            </Helmet>
            <ServiceCard />
        </div>
    );
};

export default Services;
import React, { useEffect, useState } from 'react';
import ServiceCard from '../../Components/ServiceCard/ServiceCard';
import { Helmet } from 'react-helmet-async';

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('Service.json')
            .then(res => res.json())
            .then(data => setServices(data))

    }, []);


    return (
        <div>
            <Helmet>
                <title>Alor Disha | Services </title>
            </Helmet>
            <div className=' py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(item =>
                        <ServiceCard
                            key={item.id} item={item}
                        />
                    )
                }
            </div>

        </div>
    );
};

export default Services;
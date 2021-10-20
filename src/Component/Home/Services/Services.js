import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])

    return (
        <div className="service-container container">
            <h1 className="text-dark mt-5">Our Services</h1>
            <hr />
            <br /> <br />
            
            <div className="row">
                {
                    services.map(service => <Service
                        service={service}
                        key={service.id}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
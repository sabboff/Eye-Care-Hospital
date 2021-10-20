import React, { useEffect, useState } from 'react';
import Treatment from '../Treatment/Treatment';

const Treatments = () => {
    const [treatments, setTreatments] = useState([])
    useEffect(() => {
        fetch('fakeData.JSON')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])
    return (
        <div className="container mb-5">
            <h1 className="text-secondary my-5">All Treatments</h1>
            <div className="row">
                {
                    treatments.map(treatment => <Treatment
                        treatment={treatment}
                        key={treatment.id}
                    ></Treatment>)
                }
            </div>
        </div>
    );
};

export default Treatments;
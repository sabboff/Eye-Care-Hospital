import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, description, image, id } = service
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="card m-4 shadow border-0">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text px-5">{description.slice(0, 80)}...</p>
                    <Link to={`/details/${id}`}>
                        <button className="btn btn-dark">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;
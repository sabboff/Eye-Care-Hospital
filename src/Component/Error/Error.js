import React from 'react';
import './Error.css'
import doge from '../../images/doge.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="error">
            <h2>An Unexpected Error Has Occured</h2>
            <hr className="mb-4" />
            <p>Something has gone wrong.
            </p>
            <Link to="/"> <button className="btn btn-secondary">Go Back</button> </Link>
        </div>
    );
};

export default Error;
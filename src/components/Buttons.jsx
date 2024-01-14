import React from 'react'
import { Link } from 'react-router-dom';
import './Buttons.css'

export const EditPropertyData = ({ id }) => {
    return (
        <Link to={`/edit/${id}`}>
        <button className='edit-button'>Edit</button>
        </Link>
    );
};


export const BackToDisplay = () => {
    return (
        <Link to={`/display`}>
            <button className='back-to-display-button'>
                Back
            </button>
        </Link>
    );
};








import React from 'react'
import { Link } from 'react-router-dom';
import './Buttons.css'


export const BackToData = ({ id }) => {
    return (
        <Link to={`/property/${id}`}>
            <button className='back-to-display-button'>
                Back
            </button>
        </Link>
    );
};

export const SaveUpdatedData = ({ handleUpdate, id }) => {
    return (
        <Link to={`/property/${id}`}>
            <button className='save-edited-data' type="button" onClick={handleUpdate}>
                Save
            </button>
        </Link>

    );
};

export const EditPropertyData = ({ id }) => {
    return (
        <Link to={`/edit/${id}`}>
            <button className='edit-button'>
                Edit
            </button>
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








import React from 'react'
import './Buttons.css'
import { useNavigate } from 'react-router-dom';

export const EditPropertyData = () => {
    return (
        <button className='edit-button'>Edit</button>
    );
};

export const BackToDisplay = () => {
    const navigate = useNavigate();
    const handleBackToDisplay = () => {
        navigate('/display');
    };
    return (
        <button className='back-to-display-button' onClick={handleBackToDisplay}>
            Back
        </button>
    );
};






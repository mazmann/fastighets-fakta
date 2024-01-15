import React from 'react'
import { Link } from 'react-router-dom';
import './Buttons.css'



///////// EDIT PROPERTY

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

//////// PROPERTY DATA

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


//////// DISPLAY PROPERTIES

export const MoreInfoButton = ({ id }) => {
    return (
        <Link to={`/property/${id}`}>
        <button className='more-info-button'>
          Open
        </button>
      </Link>
    );
};

export const PaginationButtons = ({ currentPage, totalPages, setPage }) => {
    return (
        <div className="pagination">
        <button className="pagination-button" onClick={() => setPage(currentPage - 1)}>
          {'<'}
        </button>
        <span className="current-page">PAGE {currentPage} OF {totalPages}</span>
        <button className="pagination-button" onClick={() => setPage(currentPage + 1)}>
          {'>'}
        </button>
      </div>
    );
};






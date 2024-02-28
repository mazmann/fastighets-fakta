import React, { useState } from 'react';
import './DisplayProperties.css';
import { MoreInfoButton, PaginationButtons } from './Buttons';
import PropertyFetcher from '../api/PropertyFetcher';
import HouseIcon from '../images/line-md--briefcase.svg';
import PropertyData from './PropertyData';

function DisplayProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedProperty, setExpandedProperty] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProperties = properties.slice(startIndex, endIndex);

  const setPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const toggleExpansion = (propertyId) => {
    setExpandedProperty((prevPropertyId) => (prevPropertyId === propertyId ? null : propertyId));
  };

  return (
    <div className='App'>
      <h4>Display Properties</h4>
      <PropertyFetcher setProperties={setProperties} />
      {properties.length > 0 ? (
        <>
          <table className='display-properties-table'>
            <thead>
              <tr>
                <th>Property address</th>
                <th>Property owner</th>
                <th>Last updated data</th>
                <th>Additional data</th>
              </tr>
            </thead>
            <tbody>
              {displayedProperties.map((property) => (
                <React.Fragment key={property._id}>
                  <tr>
                    <td>
                      <div className='house-icon-container'>
                        <img className='house-icon' src={HouseIcon} alt="House Icon" />
                      </div>
                      {property.propertyAddress}
                    </td>
                    <td>{property.propertyOwner}</td>
                    <td className='centered-td'>
                      {(property.secondDate !== null && property.secondDate !== undefined) ? formatDate(property.secondDate) : formatDate(property.date)}
                    </td>
                    <td className='centered-td'>
                      <MoreInfoButton id={property._id} />
                      <button className="more-info-button" onClick={() => toggleExpansion(property._id)}>
                        {expandedProperty === property._id ? 'Collapse' : 'Expand'}
                      </button>
                    </td>
                    {expandedProperty === property._id && (
                    
                 <PropertyData id={property._id} />
                  )}
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>

          <PaginationButtons
            currentPage={currentPage}
            totalPages={totalPages}
            setPage={setPage}
          />
        </>
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
}

export default DisplayProperties;

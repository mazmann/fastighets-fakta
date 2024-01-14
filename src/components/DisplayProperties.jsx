import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './DisplayProperties.css';
import PropertyFetcher from '../api/PropertyFetcher';

function DisplayProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const itemsPerPage = 7;
  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProperties = properties.slice(startIndex, endIndex);

  const setPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className='App-display'>
      <h2>Display Properties</h2>
      <PropertyFetcher setProperties={setProperties} />
      {properties.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Property address</th>
                <th>Property owner</th>
                <th>Added to database</th>
                <th>Additional data</th>
                {/* Add more headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {displayedProperties.map((property) => (
                <tr key={property._id}>
                  <td>{property.propertyAddress}</td>
                  <td>{property.propertyOwner}</td>
                  <td className='centered-td'>{formatDate(property.date)}</td>
                  <td className='centered-td'>
                  <Link to={`/property/${property._id}`}>
                    <button className='more-info-button'>Open</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button className="pagination-button" onClick={() => setPage(currentPage - 1)}>
              {'<'}
            </button>
            <span className="current-page">PAGE {currentPage} OF {totalPages}</span>
            <button className="pagination-button" onClick={() => setPage(currentPage + 1)}>
              {'>'}
            </button>
          </div>
        </>
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
}

export default DisplayProperties;

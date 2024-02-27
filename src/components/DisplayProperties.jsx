import React, { useState } from 'react';
import './DisplayProperties.css';
import { MoreInfoButton, PaginationButtons } from './Buttons';
import PropertyFetcher from '../api/PropertyFetcher';
import DeleteProperty from '../api/DeleteProperty';

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
    <div className='App'>
      <h4>Display Properties</h4>
      <PropertyFetcher setProperties={setProperties} />
      {properties.length > 0 ? (
        <>
          <table>
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
                <tr key={property._id}>
                  <td>{property.propertyAddress}</td>
                  <td>{property.propertyOwner}</td>
                  <td className='centered-td'>
                    {(property.secondDate !== null && property.secondDate !== undefined) ? formatDate(property.secondDate) : formatDate(property.date)}
                  </td>
                  <td className='centered-td'>
                    <MoreInfoButton id={property._id} />
                    {/* <DeleteProperty id={property._id} /> */}
                  </td>
                </tr>
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

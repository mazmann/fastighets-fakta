import React, { useState, useEffect } from 'react';
import './DisplayProperties.css';

function DisplayProperties() {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

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
      {properties.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Property Address</th>
                <th>Property Owner</th>
                <th>Added to database</th>
                {/* Add more headers based on your data structure */}
              </tr>
            </thead>
            <tbody>
              {displayedProperties.map((property) => (
                <tr key={property._id}>
                  <td>{property.propertyAddress}</td>
                  <td>{property.propertyOwner}</td>
                  <td>{formatDate(property.date)}</td>
                  {/* Add more cells based on your data structure */}
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

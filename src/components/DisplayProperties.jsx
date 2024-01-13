import React, { useState, useEffect } from 'react';
import './DisplayProperties.css'

function DisplayProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        const data = await response.json();
        setProperties(data);
        console.log(data);
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

  return (
    <div className='App-display'>
      <h2>Display Properties</h2>
      {properties.length > 0 ? (
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
            {properties.map((property) => (
              <tr key={property._id}>
                 <td>{property.propertyAddress}</td>
                <td>{property.propertyOwner}</td>
                <td>{formatDate(property.date)}</td>

                {/* Add more cells based on your data structure */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No properties to display.</p>
      )}
    </div>
  );
}

export default DisplayProperties;
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFurtherData } from '../api/FetchFurtherData';

const PropertyData = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const data = await FetchFurtherData(propertyId);
        setProperty(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors more gracefully
      }
    };

    fetchDataFromApi();
  }, [propertyId]);

  return (
    <div>
      {property ? (
        <div>
          <h2>Property Details</h2>
          <p>Contact Representative: {property.propertyAddress}</p>
          <p>Date: {property.date}</p>
          <p>Email: {property.email}</p>
          {/* Add more properties as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyData;

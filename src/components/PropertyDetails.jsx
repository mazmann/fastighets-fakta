import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetail() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const response = await fetch(`http://localhost:5000/properties/${id}`);
        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error('Error fetching property details:', error);
      }
    };

    fetchProperty();
  }, [id]);

  return (
    <div className="property-detail">
      <h2>Property Details</h2>
      {property ? (
        <div>
          <p><strong>Property Address:</strong> {property.propertyAddress}</p>
          <p><strong>Property Owner:</strong> {property.propertyOwner}</p>
          <p><strong>Added to Database:</strong> {property.date}</p>
        </div>
      ) : (
        <p>Loading property details...</p>
      )}
    </div>
  );
}

export default PropertyDetail;

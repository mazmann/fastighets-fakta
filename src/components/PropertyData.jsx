import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFurtherData } from '../api/FetchFurtherData';
import './PropertyData.css'

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
    <div className='App-display-more'>
     <h2>Property Details</h2>
      {property ? (
        <form>
 <table>
    <tbody>
      <tr>
        <td>
          <label>Property Owner:</label>
        </td>
        <td>
          <label>Organisation Number:</label>
        </td>
        <td>
          <label>Property Tag:</label>
        </td>
      </tr>
      <tr>
        <td>
          <p>{property.propertyOwner}</p>
        </td>
        <td>
          <p>{property.organisationNumber}</p>
        </td>
        <td>
          <p>{property.propertyTag}</p>
        </td>
      </tr>
      <tr>
        <td>
          <label>Property Address:</label>
        </td>
        <td>
          <label>Property Area:</label>
        </td>
        <td>
          <label>Visiting Address:</label>
        </td>
      </tr>
      <tr>
        <td>
          <p>{property.propertyAddress}</p>
        </td>
        <td>
          <p>{property.propertyArea}</p>
        </td>
        <td>
          <p>{property.visitingAddress}</p>
        </td>
      </tr>
      <tr>
        <td>
          <label>Visiting Area:</label>
        </td>
        <td>
          <label>Contact Representative:</label>
        </td>
        <td>
          <label>Phone Number:</label>
        </td>
      </tr>
      <tr>
        <td>
          <p>{property.visitingArea}</p>
        </td>
        <td>
          <p>{property.contactRep}</p>
        </td>
        <td>
          <p>{property.phoneNumber}</p>
        </td>
      </tr>
      <tr>
        <td>
          <label>Email:</label>
        </td>
      </tr>
      <tr>
        <td>
          <p>{property.email}</p>
        </td>
      </tr>
    </tbody>
  </table>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyData;

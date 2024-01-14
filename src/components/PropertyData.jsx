import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchFurtherData } from '../api/FetchFurtherData';
import { EditPropertyData, BackToDisplay } from './Buttons';
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
                  {property.propertyOwner || 'NO DATA'}
                </td>
                <td>
                  {property.organisationNumber || 'NO DATA'}
                </td>
                <td>
                  {property.propertyTag || 'NO DATA'}
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
                  {property.propertyAddress || 'NO DATA'}
                </td>
                <td>
                  {property.propertyArea || 'NO DATA'}
                </td>
                <td>
                  {property.visitingAddress || 'NO DATA'}
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
                  {property.visitingArea || 'NO DATA'}
                </td>
                <td>
                  {property.contactRep || 'NO DATA'}
                </td>
                <td>
                  {property.phoneNumber || 'NO DATA'}
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
              </tr>
              <tr>
                <td>
                  {property.email || 'NO DATA'}
                </td>
              </tr>
            </tbody>
          </table>
          <div className='data-button-container'>
            <BackToDisplay />
            <EditPropertyData id={propertyId} />
          </div>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PropertyData;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchDataById, updateData } from '../api/EditDataArray'; // Import your API functions
import './EditProperty.css'

// Import necessary dependencies and functions

const EditProperty = () => {
    const { propertyId } = useParams();
    const [formData, setFormData] = useState({});
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchDataById(propertyId);
          setFormData(data);
        } catch (error) {
          console.error('Error fetching data by ID:', error);
        }
      };
  
      fetchData();
    }, [propertyId]);
  
    const handleUpdate = async () => {
      try {
        await updateData(propertyId, formData);
        // Optionally, redirect to the display page or handle success in another way
      } catch (error) {
        console.error('Error updating data:', error);
        // Handle errors more gracefully
      }
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    return (
      <div className='App-edit'>
        <h2>Edit Property</h2>
        <form>
        <table>
          <tbody>
            <tr>
              <td>
              <div className='required-field-container'>
              <span className='required-field'>*</span>
              </div>
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
                <input
                  type="text"
                  value={formData.propertyOwner || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.organisationNumber || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.propertyTag || ''}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
              <div className='required-field-container'>
              <span className='required-field'>*</span>
              </div>
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
                <input
                  type="text"
                  value={formData.propertyAddress || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.propertyArea || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.visitingAddress || ''}
                  onChange={handleChange}
                />
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
                <input
                  type="text"
                  value={formData.visitingArea || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.contactRep || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={formData.phoneNumber || ''}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email:</label>
              </td>

            </tr>
            <tr>
              <td>
                <input
                  type="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </td>

            </tr>
          </tbody>
        </table>
          {/* Render your input fields */}
          <label>Property Owner:</label>
          <input
            type="text"
            name="propertyOwner"
            value={formData.propertyOwner || ''}
            onChange={handleChange}
          />
  
          <label>Organisation Number:</label>
          <input
            type="text"
            name="organisationNumber"
            value={formData.organisationNumber || ''}
            onChange={handleChange}
          />
  
          {/* Add other input fields as needed */}
  
          {/* Render your submit button */}
          <button type="button" onClick={handleUpdate}>
            Update Property
          </button>
        </form>
  
        <Link to={`/display`}>
          <button className='back-to-display-button'>Back</button>
        </Link>
      </div>
    );
  };
  
  export default EditProperty;


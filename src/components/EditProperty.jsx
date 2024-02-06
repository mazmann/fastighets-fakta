import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataById, updateData } from '../api/EditDataArray';
import { SaveUpdatedData, BackToData } from './Buttons';
import './EditProperty.css'



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
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='App'>
      <h2>Edit Property</h2>
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
                <input
                  type="text"
                  name="propertyOwner"
                  value={formData.propertyOwner || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="organisationNumber"
                  value={formData.organisationNumber || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="propertyTag"
                  value={formData.propertyTag || ''}
                  onChange={handleChange}
                />
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
                <input
                  type="text"
                  name="propertyAddress"
                  value={formData.propertyAddress || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="propertyArea"
                  value={formData.propertyArea || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="visitingAddress"
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
                  name="visitingArea"
                  value={formData.visitingArea || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="contactRep"
                  value={formData.contactRep || ''}
                  onChange={handleChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="phoneNumber"
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
                  name="email"
                  value={formData.email || ''}
                  onChange={handleChange}
                />
              </td>

            </tr>
          </tbody>
        </table>
        <div className='data-button-container'>
          <BackToData id={propertyId} />
          <SaveUpdatedData id={propertyId} handleUpdate={handleUpdate} />
        </div>
      </form>


    </div>
  );
};

export default EditProperty;


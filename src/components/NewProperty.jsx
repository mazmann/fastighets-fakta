import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewProperty.css';

function NewProperty() {
  const [propertyOwner, setPropertyOwner] = useState('');
  const [organisationNumber, setOrganisationNumber] = useState('');
  const [propertyTag, setPropertyTag] = useState('');
  const [propertyAddress, setPropertyAddress] = useState('');
  const [propertyArea, setPropertyArea] = useState('');
  const [visitingAddress, setVisitingAddress] = useState('');
  const [visitingArea, setVisitingArea] = useState('');
  const [contactRep, setContactRep] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({
        propertyOwner,
        organisationNumber,
        propertyTag,
        propertyAddress,
        propertyArea,
        visitingAddress,
        visitingArea,
        contactRep,
        phoneNumber,
        email,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    if (result) {
      alert('Data saved successfully');
      setEmail('');
      navigate('/'); // Navigate to the display route if needed
    }
  };

  return (
   <div className="App">
      <h1>This is React WebApp</h1>
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>
                  <span>Property Owner:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={propertyOwner}
                  onChange={(e) => setPropertyOwner(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Organisation Number:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={organisationNumber}
                  onChange={(e) => setOrganisationNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Property Tag:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={propertyTag}
                  onChange={(e) => setPropertyTag(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Property Address:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Property Area:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={propertyArea}
                  onChange={(e) => setPropertyArea(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Visiting Address:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={visitingAddress}
                  onChange={(e) => setVisitingAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Visiting Area:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={visitingArea}
                  onChange={(e) => setVisitingArea(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Contact Representative:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={contactRep}
                  onChange={(e) => setContactRep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Phone Number:</span>
                </label>
              </td>
              <td>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>
                  <span>Email:</span>
                </label>
              </td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <button type="submit" onClick={handleOnSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewProperty;

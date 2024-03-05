import React, { useState } from 'react';
import './styles.css';

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
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();


    if (!propertyOwner || !propertyAddress) {
      setErrorMessage('Fill in required fields');
      setTimeout(() => {
        setErrorMessage('');
      }, 5000);
      return;
    }

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
      setSuccessMessage(true);
      setPropertyOwner('');
      setOrganisationNumber('');
      setPropertyTag('');
      setPropertyAddress('');
      setPropertyArea('');
      setVisitingAddress('');
      setVisitingArea('');
      setContactRep('');
      setPhoneNumber('');
      setEmail('');

      setTimeout(() => {
        setSuccessMessage(false);
      }, 5000);
    }
  };

  return (
    <div className="App">
      <h1>Register Property</h1>        {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form>
      <table className='new-property-table'>
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
                  value={propertyOwner}
                  onChange={(e) => setPropertyOwner(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={organisationNumber}
                  onChange={(e) => setOrganisationNumber(e.target.value)}
                />
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
                  value={propertyAddress}
                  onChange={(e) => setPropertyAddress(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={propertyArea}
                  onChange={(e) => setPropertyArea(e.target.value)}
                />
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
                  value={visitingArea}
                  onChange={(e) => setVisitingArea(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={contactRep}
                  onChange={(e) => setContactRep(e.target.value)}
                />
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
                <label>Email:</label>
              </td>

            </tr>
            <tr>
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
        <div className='button-container'>

          {!successMessage ? (
            <button className="submit-button" type="submit" onClick={handleOnSubmit}>
              Submit
            </button>
          ) : (
            <p className="success-message">Saved successfully</p>
          )}

        </div>

      </form>
    </div>
  );
}

export default NewProperty;

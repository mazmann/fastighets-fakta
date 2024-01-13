import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewProperty() {
  const [propertyOwner, setPropertyOwner] = useState('');
  const [organisationNumber, setOrganisationNumber] = useState('');
  const [properyTag, setProperyTag] = useState('');
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
        properyTag,
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
      <div className="label-input-container">
        <label>
          Property Owner:
          <input
            type="text"
            value={propertyOwner}
            onChange={(e) => setPropertyOwner(e.target.value)}
          />
        </label>
        <br />
        <label>
          Organisation Number:
          <input
            type="text"
            value={organisationNumber}
            onChange={(e) => setOrganisationNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Property Tag:
          <input
            type="text"
            value={properyTag}
            onChange={(e) => setProperyTag(e.target.value)}
          />
        </label>
        <br />
        <label>
          Property Address:
          <input
            type="text"
            value={propertyAddress}
            onChange={(e) => setPropertyAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Property Area:
          <input
            type="text"
            value={propertyArea}
            onChange={(e) => setPropertyArea(e.target.value)}
          />
        </label>
        <br />
        <label>
          Visiting Address:
          <input
            type="text"
            value={visitingAddress}
            onChange={(e) => setVisitingAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          Visiting Area:
          <input
            type="text"
            value={visitingArea}
            onChange={(e) => setVisitingArea(e.target.value)}
          />
        </label>
        <br />
        <label>
          Contact Representative:
          <input
            type="text"
            value={contactRep}
            onChange={(e) => setContactRep(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        </div>
        <br />
        <button type="submit" onClick={handleOnSubmit}>
          Submit
        </button>
        
      </form>
    </div>
  );
}

export default NewProperty;

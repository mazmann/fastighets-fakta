import React, { useState, useEffect } from 'react';

const FiveInputFieldsComponent = () => {
  const initialInputValues = {
    field1: '',
    field2: '',
    field3: '',
    field4: '',
    field5: '',
  };

  const [inputValues, setInputValues] = useState(initialInputValues);

  useEffect(() => {
    // Retrieve saved values from local storage on component mount
    const storedValues = JSON.parse(localStorage.getItem('inputValues'));
    if (storedValues) {
      setInputValues(storedValues);
    }
  }, []);

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    });
  };

  const handleSubmit = () => {
    // Save input values to local storage
    localStorage.setItem('inputValues', JSON.stringify(inputValues));
    console.log('Input values submitted:', inputValues);
    // Optionally, reset the input values after submission
    setInputValues(initialInputValues);
  };

  return (
    <div>
      <label>
        Field 1:
        <input
          type="text"
          value={inputValues.field1}
          onChange={(e) => handleInputChange('field1', e.target.value)}
        />
      </label>

      <br />

      <label>
        Field 2:
        <input
          type="text"
          value={inputValues.field2}
          onChange={(e) => handleInputChange('field2', e.target.value)}
        />
      </label>

      <br />

      <label>
        Field 3:
        <input
          type="text"
          value={inputValues.field3}
          onChange={(e) => handleInputChange('field3', e.target.value)}
        />
      </label>

      <br />

      <label>
        Field 4:
        <input
          type="text"
          value={inputValues.field4}
          onChange={(e) => handleInputChange('field4', e.target.value)}
        />
      </label>

      <br />

      <label>
        Field 5:
        <input
          type="text"
          value={inputValues.field5}
          onChange={(e) => handleInputChange('field5', e.target.value)}
        />
      </label>

      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FiveInputFieldsComponent;

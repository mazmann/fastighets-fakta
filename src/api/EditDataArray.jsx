// api.js

const fetchDataById = async (propertyId) => {
    try {
      const response = await fetch(`http://localhost:5000/properties/${propertyId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data by ID:', error);
      throw error;
    }
  };
  
  const updateData = async (propertyId, formData) => {
    try {
      const response = await fetch(`http://localhost:5000/properties/${propertyId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  };
  
  export { fetchDataById, updateData };
  
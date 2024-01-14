const FetchFurtherData = async (propertyId) => {
  try {
    const response = await fetch(`http://localhost:5000/properties/${propertyId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // You might want to handle errors more gracefully in a real application
  }
};

export { FetchFurtherData };

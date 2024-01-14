import { useEffect } from 'react';

const PropertyFetcher = ({ setProperties }) => {
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/properties');
        const data = await response.json();
        setProperties(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setProperties]); 

  return null; 
}

export default PropertyFetcher;

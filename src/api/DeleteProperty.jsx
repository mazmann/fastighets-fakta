import React, { useState } from 'react';

const DeleteProperty = ({ propertyId }) => {
    const [property, setProperty] = useState(null);

    const handleDelete = async () => {
        try {
            const response = await fetch(`/properties/${propertyId}`, {
                method: 'DELETE',
                
            });

            if (response.ok) {
                const data = await response.json();
                setProperty(data.message);
            } else {
                const errorData = await response.json();
                setProperty(errorData.error);
            }
        } catch (error) {
            console.error('Error:', error);
            setProperty('Something went wrong');
        }
    };

    return (
        <div>
            <button onClick={handleDelete}>Delete Property</button>
            {property && <p>{property}</p>}
        </div>
    );
};

export default DeleteProperty;


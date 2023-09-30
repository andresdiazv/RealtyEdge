// src/components/Property.js
import React from 'react';

const Property = ({ property }) => {
    return (
        <div>
            <h2>Property Details</h2>
            <img src={property.image} alt={property.address} />
            <p>{property.address}</p>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Square Footage: {property.squareFootage}</p>
            <p>Description: {property.description}</p>
        </div>
    );
}

export default Property;

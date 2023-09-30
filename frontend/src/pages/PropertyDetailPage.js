// src/pages/PropertyDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PropertyDetailPage.css'; // Importing CSS
import { getPropertyDetails } from '../services/propertyService'; // assuming you have a service to fetch individual property details

const PropertyDetailPage = () => {
    const { id } = useParams();
    const [property, setProperty] = useState(null);

    useEffect(() => {
        const fetchPropertyDetails = async () => {
            try {
                const propertyDetails = await getPropertyDetails(id);
                setProperty(propertyDetails);
            } catch (error) {
                console.error("Error fetching the property details", error);
            }
        };

        fetchPropertyDetails();
    }, [id]);

    return property ? (
        <div className="property-details">
            <img src={property.image} alt={property.address} />
            <h2>{property.address}</h2>
            <p>Price: {property.price}</p>
            <p>Bedrooms: {property.bedrooms}</p>
            <p>Bathrooms: {property.bathrooms}</p>
            <p>Square Footage: {property.squareFootage}</p>
            <p>Description: {property.description}</p>
        </div>
    ) : (
        <p>Loading...</p>
    );
}

export default PropertyDetailPage;

import React, { useState, useEffect } from 'react';
import Property from '../components/Property'; // Import Property Component
import { getFeaturedProperties } from '../services/propertyService'; // Import service to fetch properties

const HomePage = () => {
    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const properties = await getFeaturedProperties(); // Use service to fetch properties
                setProperties(properties);
            } catch (error) {
                console.error("Error fetching the properties", error);
            }
        };
        
        fetchProperties();
    }, []);
    
    return (
        <div>
            <h1>Featured Properties</h1>
            <div>
                {properties.map(property => (
                    <Property key={property.id} property={property} />  // Use Property component to render each property
                ))}
            </div>
        </div>
    );
}

export default HomePage;

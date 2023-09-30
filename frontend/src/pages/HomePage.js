import React, { useState, useEffect } from 'react';
import Property from '../components/Property'; // Import Property Component
import { getFeaturedProperties } from '../services/propertyService'; // Import service to fetch properties
import './HomePage.css'; // Import styling

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
        <div className='content-wrapper'>
            <h1>Featured Properties</h1>
            <div className='cards-container'>
                {properties.map(property => (
                    <Property key={property._id} property={property} />
                ))}
            </div>
        </div>
    );
}

export default HomePage;

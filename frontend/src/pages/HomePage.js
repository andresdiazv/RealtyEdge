import React, { useState, useEffect } from 'react';
import Property from '../components/Property'; // Import Property Component
import { getFeaturedProperties } from '../services/propertyService'; // Import service to fetch properties
import './HomePage.css'; // Import styling

const HomePage = () => {
    const [properties, setProperties] = useState([]);
    const bannerImage = require('../assets/website-banner.png');

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const properties = await getFeaturedProperties();
                setProperties(properties);
            } catch (error) {
                console.error("Error fetching the properties", error);
            }
        };
        
        fetchProperties();
    }, []);

    return (
        <div className='content-wrapper'>
        <div className="banner-image"></div>
            <div className='cards-container'>
                {properties.map(property => (
                    <Property key={property._id} property={property} />
                ))}
        </div>
    </div>
    );
}

export default HomePage;

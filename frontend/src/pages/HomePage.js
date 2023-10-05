import React, { useState, useEffect } from 'react';
import Property from '../components/Property';
import { getFeaturedProperties } from '../services/propertyService'; 
import './HomePage.css'; 

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
        
        <div className="homepage-container">
        <div className="banner-image" style={{ backgroundImage: `url(${bannerImage})` }}></div>
        <div className='cards-container'>
            {properties.map(property => (
                <Property key={property._id} property={property} />
            ))}
        </div>
    </div>
    );
}

export default HomePage;

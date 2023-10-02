import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css'; // Importing CSS

const Property = ({ property }) => {
    const imageUrl = require(`../assets/house${property.id}.png`);
    console.log(imageUrl);
    return (
        <div className="card">
            <Link to={`/property/${property.id}`}>
                <div className="photo" style={{backgroundImage: `url(${imageUrl})`}}>
                    <div className="time">2 days ago</div>
                </div>
                <div className="description">
                    <div className="price">${Number(property.price).toLocaleString()}</div>
                    <div className="info">
                        {property.bedrooms} bds | {property.bathrooms} ba | {property.squareFootage.toLocaleString()} sqft
                    </div>
                    <div className="address">{property.address}</div>
                </div>
            </Link>
        </div>
    );
}

export default Property;

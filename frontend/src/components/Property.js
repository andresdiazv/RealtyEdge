import React from 'react';
import { Link } from 'react-router-dom';
import './Property.css'; // Importing CSS

const Property = ({ property }) => {
    return (
        <div className="card">
            <Link to={`/property/${property.id}`}>
                <div className="photo" style={{backgroundImage: `url(${property.image})`}}>
                    <div className="time">2 days ago</div> {/* Modify this as per your logic */}
                </div>
                <div className="description">
                    <div className="price">${property.price}</div>
                    <div className="info">
                        {property.bedrooms} bds {property.bathrooms} ba {property.squareFootage} sqft - For sale
                    </div>
                    <div className="address">{property.address}</div>
                </div>
            </Link>
        </div>
    );
}

export default Property;

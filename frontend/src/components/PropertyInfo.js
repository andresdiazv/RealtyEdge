import React from "react";
import "./PropertyInfo.css";

const PropertyInfo = ({
  address,
  price,
  bedrooms,
  bathrooms,
  squareFootage,
}) => (
  <div className="property-info">
    <h2>
      <span className="major">
        <strong>${Number(price).toLocaleString()}</strong>
      </span>
      <span className="minor">
        <strong>{bedrooms}</strong> bd&emsp;<span className="bar">|</span>&emsp;
        <strong>{bathrooms}</strong> ba {squareFootage.toLocaleString()} sqft
      </span>
      <br></br>
      <span className="minor">{address}</span>
    </h2>
    <p>Square Footage: {squareFootage.toLocaleString()}</p>
  </div>
);

export default PropertyInfo;

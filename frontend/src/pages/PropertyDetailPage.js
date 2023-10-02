import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetailPage.css";
import { getPropertyDetails } from "../services/propertyService";
import PropertyInfo from "../components/PropertyInfo";
import PropertyCalculations from "../components/PropertyCalculations";

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
      <div className="property-detail-photo" style={{backgroundImage: `url(${require(`../assets/house${property.id}.png`)})`}}></div>
      <PropertyInfo {...property} />
      <PropertyCalculations property={property} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PropertyDetailPage;

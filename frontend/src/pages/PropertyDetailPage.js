import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PropertyDetailPage.css";
import { getPropertyDetails } from "../services/propertyService";
import PropertyInfo from "../components/PropertyInfo";
import PropertyCalculations from "../components/PropertyCalculations";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [googleMapsKey, setGoogleMapsKey] = useState(null);
  

  const initMap = () => {
    new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 }, // You might want to update this to the property's location
      zoom: 8,
    });
  };

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

    fetch("/api/google-maps-key")
      .then((res) => res.json())
      .then((data) => {
        setGoogleMapsKey(data.apiKey);
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${data.apiKey}&callback=initMap`;
        script.async = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      })
      .catch((err) =>
        console.error("Error fetching the Google Maps API key", err)
      );
  }, [id]);

  return property ? (
    <div className="property-details">
      <div
        className="property-detail-photo"
        style={{
          backgroundImage: `url(${require(`../assets/house${property.id}.png`)})`,
        }}
      ></div>
      <PropertyInfo {...property} />
      <div id="map" style={{ width: "30%", height: "300px", borderRadius:"10px"}}></div>
      <PropertyCalculations property={property} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default PropertyDetailPage;

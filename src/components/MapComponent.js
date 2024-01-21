// MapComponent.js
import React from "react";
import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";

const MapComponent = ({ children }) => {
  const center = {
    lat: 49.2827, // Vancouver latitude
    lng: -123.1207, // Vancouver longitude
  };

  return (
    <MapContainer
      center={center} // Set your default latitude and longitude
      zoom={13} // Set your default zoom level
      style={{ width: "100%", height: "400px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {children}
    </MapContainer>
  );
};

export default MapComponent;

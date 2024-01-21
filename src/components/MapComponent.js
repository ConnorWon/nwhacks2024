// MapComponent.js
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  ImageOverlay,
  useMapEvents,
  useMap
} from "react-leaflet";

const MapComponent = () => {
  // const center = {
  //   lat: 49.2827, // Vancouver latitude
  //   lng: -123.1207, // Vancouver longitude
  // };

  const [center, setCenter] = useState({
    lat: 49.2827, // Vancouver latitude
    lng: -123.1207, // Vancouver longitude
  });

  const MapEvents = () => {
    const map = useMap();

    useMapEvents({
      click(e) {
        // send lat and lng here;
        // center map to location as well
        setCenter({ lat: e.latlng.lat, lng: e.latlng.lng });
        map.flyTo({ lat: e.latlng.lat, lng: e.latlng.lng })
      },
    });
    return false;
  };

  return (
    <>
      <MapContainer
        center={center} // Set your default latitude and longitude
        zoom={13} // Set your default zoom level
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapEvents />
      </MapContainer>
    </>
  );
};

export default MapComponent;

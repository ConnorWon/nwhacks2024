// MapComponent.js
import "../App.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";

const MapComponent = (props) => {
  const defaultCenter = {
    lat: 49.2827, // Vancouver latitude
    lng: -123.1207, // Vancouver longitude
  };

  const { center, setCenter } = props;

  const MapEvents = () => {
    const map = useMap();

    useMapEvents({
      click(e) {
        setCenter([e.latlng.lat, e.latlng.lng]);
        map.flyTo({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });
    return false;
  };

  return (
    <>
      <MapContainer
        center={defaultCenter} // Set your default latitude and longitude
        zoom={13} // Set your default zoom level
        style={{ width: "100%", height: "100vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          className="map-tiles"
        />
        {center && <Marker position={center}></Marker>}
        <MapEvents />
      </MapContainer>
    </>
  );
};

export default MapComponent;

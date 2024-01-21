// RouteComponent.js
import React from "react";
import { useQuery } from "react-query";
import { Polyline } from "react-leaflet";

const fetchRoute = async (start, end) => {
  const apiKey =
    "pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ"; // Replace with your Mapbox API key
  const response = await fetch(
    "https://api.mapbox.com/directions/v5/mapbox/walking?access_token=pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ",
    {
      body: "coordinates=49.2827,-123.1207;49.26411700132184,-123.21537018955787",
    }
  );
  const data = await response.json();
  return data.routes[0].geometry.coordinates;
};

const RouteComponent = ({ start, end }) => {
  const { data: routeCoordinates } = useQuery(["route", start, end], () =>
    fetchRoute(start, end)
  );

  return routeCoordinates ? (
    <Polyline positions={routeCoordinates} color="black" />
  ) : null;
};

export default RouteComponent;

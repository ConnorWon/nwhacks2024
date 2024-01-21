// // RouteComponent.js
// import React from "react";
// import { useQuery } from "react-query";
// import { Polyline } from "react-leaflet";

// const fetchRoute = async (start, end) => {
//   const apiKey =
//     "pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ"; // Replace with your Mapbox API key
//   const response = await fetch(
//     "https://api.mapbox.com/directions/v5/mapbox/walking?access_token=pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ",
//     {
//       body: "coordinates=49.2827,-123.1207;49.26411700132184,-123.21537018955787",
//     }
//   );
//   const data = await response.json();
//   return data.routes[0].geometry.coordinates;
// };

// const RouteComponent = ({ start, end }) => {
//   const { data: routeCoordinates } = useQuery(["route", start, end], () =>
//     fetchRoute(start, end)
//   );

//   return routeCoordinates ? (
//     <Polyline positions={routeCoordinates} color="black" />
//   ) : null;
// };

// export default RouteComponent;

// RouteComponent.js
import React from "react";
import { useQuery } from "react-query";
import { Polyline } from "react-leaflet";

const fetchRoute = async (start, end) => {
  const apiKey =
    "pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ"; // Replace with your Mapbox API key
  const response = await fetch(
    "https://api.mapbox.com/directions/v5/mapbox/walking/-123.215143%2C49.263605%3B-123.12716%2C49.282319?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=simplified&steps=true&access_token=pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ"
  );
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.routes[0].geometry.coordinates);
  var retArr = [];
  data.routes[0].geometry.coordinates.map((route, index) => {
    retArr[index] = [route[1], route[0]];
  });
  return retArr;
};

const RouteComponent = ({ start, end }) => {
  // const { data: routeCoordinates } = useQuery(["route", start, end], () =>
  //   fetchRoute(start, end)
  // );
  const routeCoordinates = null;

  return routeCoordinates ? (
    <Polyline positions={routeCoordinates} color="red" />
  ) : null;
};

export default RouteComponent;

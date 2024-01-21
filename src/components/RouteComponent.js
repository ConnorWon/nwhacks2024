// RouteComponent.js
// import React from "react";
// import { useQuery } from "react-query";
// import { Polyline } from "react-leaflet";

const fetchRoute = async (cord) => {
  const apiKey =
    "pk.eyJ1IjoiY3dvbiIsImEiOiJjbHJtcDhucDQxMjY4MmtrZHA4cjY4Yzk0In0.pUcXee7umuJcGYPfes9kSQ"; // Replace with your Mapbox API key
  const response = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${cord.map((item, index) => {return(index === 0 ? item[0]+"%2C"+item[1] : "%3b"+item[0]+"%2C"+item[1]);})}?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=${apiKey}`
  );
  const data = await response.json();
  console.log(data);
  console.log(data.routes[0].geometry.coordinates);
  const flipData = [];
  data.routes[0].geometry.coordinates.map((item, index) => {
    return flipData[index] = [item[1], item[0]]
  })
  return flipData;
};

const RouteComponent = (cord) => {
  // const { data: routeCoordinates } = useQuery(["route", start, end], () =>
  //   fetchRoute(start, end)
  // );

  // const [routeCoordinates, setRouteCoordinates] = useState(null);
  // useEffect(() => {
  //   setRouteCoordinates(fetchRoute(start, end));
  // }, []);

  // return routeCoordinates ? (
  //   <Polyline positions={routeCoordinates} color="black" />
  // ) : null;
};

export default RouteComponent;

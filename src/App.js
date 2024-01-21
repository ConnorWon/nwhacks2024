// MainComponent.js
import React from "react";
import MapComponent from "./components/MapComponent";
import RouteComponent from "./components/RouteComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const MainComponent = () => {
  const startPoint = [49.2827, -123.1207];
  const endPoint = [49.26411700132184, -123.21537018955787];

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MapComponent>
        <RouteComponent start={startPoint} end={endPoint} />
      </MapComponent>
    </QueryClientProvider>
  );
};

export default MainComponent;

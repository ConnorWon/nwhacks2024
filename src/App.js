// MainComponent.js
import React from "react";
import MapComponent from "./components/MapComponent";
import RouteComponent from "./components/RouteComponent";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from 'axios';

const MainComponent = () => {
  
  // inputArray is a tuple that consists of the longitude and latitude from the user
  const fetchRoute = async (inputArray) => {
    await axios.get("http://127.0.0.1:5000", {
      content: inputArray
    }).then(res => {

      // switch to have the proper object desconstruction
      console.log(res);
      // this will be an array of tuples
      return (res)
    }).catch(err => {
      // do something with the error

      return([]);
    })
  }

  const queryClient = new QueryClient();



  return (
    <QueryClientProvider client={queryClient}>
      <MapComponent>
        <RouteComponent cord={fetchRoute} />
      </MapComponent>
    </QueryClientProvider>
  );
};

export default MainComponent;

import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
require("dotenv").config();

const App = () => {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        process.env.RECT_APP_MAPBOX_TOKEN ||
        "pk.eyJ1IjoiaXZhbmNpaXRvNSIsImEiOiJjazczdG9tNmgwZDdrM2VueDFxcWdrNzZpIn0.bwuAAH4RmQnnHeImPX3WDw"
      }
      onViewportChange={setViewport}
    />
  );
};

export default App;

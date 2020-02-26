import React, { useState, useEffect } from "react";
import ReactMapGL from "react-map-gl";
import { listLogEntries } from "./API";
require("dotenv").config();

const App = () => {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.6,
    longitude: -95.665,
    zoom: 3
  });

  useEffect(() => {
    (async () => {
      const logEntries = await listLogEntries();
      console.log(logEntries);
    })();
  }, []);

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

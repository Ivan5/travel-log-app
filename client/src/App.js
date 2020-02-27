import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { listLogEntries } from "./API";
require("dotenv").config();

const App = () => {
  const [logEntries, setLogEntries] = useState([]);
  const [showPopup, setShowPopup] = useState({});
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
      setLogEntries(logEntries);
    })();

    return () => {
      //clean up things
    };
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={
        process.env.RECT_APP_MAPBOX_TOKEN ||
        "pk.eyJ1IjoiaXZhbmNpaXRvNSIsImEiOiJjazczdG9tNmgwZDdrM2VueDFxcWdrNzZpIn0.bwuAAH4RmQnnHeImPX3WDw"
      }
      onViewportChange={setViewport}
    >
      {logEntries.map(entry => (
        <>
          <Marker
            key={entry._id}
            latitude={entry.latitude}
            longitude={entry.longitude}

            //offsetLeft={-12}
            //offsetTop={-24}
          >
            <div
              onClick={() =>
                setShowPopup({
                  ...showPopup,
                  [entry._id]: true
                })
              }
            >
              <svg
                viewBox="0 0 24 24"
                className="marker"
                style={{
                  width: "24px",
                  height: "24px"
                }}
                stroke-width="1.5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
          </Marker>
          {showPopup[entry._id] ? (
            <Popup
              latitude={entry.latitude}
              longitude={entry.longitude}
              closeButton={true}
              closeOnClick={false}
              dynamicPosition={true}
              onClose={() => setShowPopup({})}
              anchor="top"
            >
              <div className="popup">
                <h3>{entry.title}</h3>
                <p>{entry.comments}</p>
                <small>
                  Visited on: {new Date(entry.visitDate).toLocaleDateString()}
                </small>
              </div>
            </Popup>
          ) : null}
        </>
      ))}
    </ReactMapGL>
  );
};

export default App;

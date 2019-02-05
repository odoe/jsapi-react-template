import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./components/Header";
import { WebMapView } from "./components/WebMapView";
import { AppProvider } from "./contexts/App";

ReactDOM.render(
  <AppProvider>
    <Header appTitle="ArcGIS React App" />
    <WebMapView />
  </AppProvider>,
  document.getElementById("root")
);

import React, { useContext, useEffect, useRef } from "react";

import { AppContext } from "../contexts/App";

const WebMapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const { setState } = useContext(AppContext);
  
  // we can let the application
  // context know that the component
  // is mounted and ready
  useEffect(
    () => {
      setState({
        container: mapRef.current
      });
      // TODO: clean up function?
      // only thing I could think of here would be to set mapRef.current = null
      // in the hopes that would end up causing view.container to be set to null
    },
    // NOTE: this ensures this is only fired once, like componentDidMount()
    []
  );

  return (
    <div className="webmap" ref={mapRef}>
    </div>
  );
};

export { WebMapView };
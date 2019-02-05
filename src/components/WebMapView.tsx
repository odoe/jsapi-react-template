import React, { Component, createRef } from "react";

import { AppContext } from "../contexts/App";

export class WebMapView extends Component {

  static contextType = AppContext;

  mapRef: React.RefObject<HTMLDivElement>;

  constructor(props?: React.ReactPropTypes) {
    super(props);
    this.mapRef = createRef<HTMLDivElement>();
  }

  componentDidMount() {
    const mapDiv = this.mapRef.current;
    this.context.startup(mapDiv);
  }

  render() {
    return (
      <div className="webmap" ref={this.mapRef}></div>
    );
  }
};

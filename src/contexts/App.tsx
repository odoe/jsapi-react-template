import React, { Component, createContext } from "react";

const AppState = {
  startup: async (container: HTMLDivElement) => {
    const mapping = await import("../data/map");
    mapping.initialize(container);
  }
}

// main application context
export const AppContext = createContext(AppState);

// main application provider
export class AppProvider extends Component {

  state = AppState

  render() {
    return (
      <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
    )
  }
}

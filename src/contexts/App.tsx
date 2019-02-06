import React, { Component, createContext } from "react";

// main application context
export const AppContext = createContext({
  loaded: false,
  startup: async (container: HTMLDivElement) => {}
});

// main application provider
export class AppProvider extends Component {

  state = {
    loaded: false,
    startup: async (container: HTMLDivElement) => {
      const mapping = await import("../data/map");
      await mapping.initialize(container);
      this.setState( { loaded: true } );
    }
  }  

  render() {
    return (
      <AppContext.Provider value={this.state}>{this.props.children}</AppContext.Provider>
    )
  }
}

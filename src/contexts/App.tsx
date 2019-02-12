import React, { createContext, useEffect, useState } from "react";

export interface AppProviderProps {
  children: JSX.Element[];
}

const initialState = {
  container: null as HTMLDivElement
};

// main application context
export const AppContext = createContext({
  state: initialState,
  setState: (i: any) => i
});

// main application provider
export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, setState] = useState({ ...initialState });

  // when container is ready, we can load the
  // mapping portion of our application
  // and initialize it
  const loadMap = async () => {
    const mapping = await import("../data/map");
    mapping.initialize(state.container);
  };

  useEffect(
    () => {
      if (!state.container) {
        return
      }
      loadMap();
      // TODO: return clean up function that sets the view's container to null?
    },
    [ state.container ]
  );

  const value = {
    state,
    setState: (newState: any) => { setState({ ...state, ...newState }) }
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

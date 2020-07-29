import React, { createContext, useReducer, useContext } from 'react';
import vehiclesReducer, { INITIAL_STATE } from './vehicles.reducers';

// This creates a context object to store and access 
const DataContext = createContext();

// This uses the useReducer hook to allow access to state and provide functions to dispatch actions to update state
export default function DataProvider({ children }) {
  const [data, dispatchData] = useReducer(vehiclesReducer, INITIAL_STATE);
  return (
    <DataContext.Provider value={{ data, dispatchData }}>
      {children}
    </DataContext.Provider>
  );
}

// This intentionally avoids exporting DataContext and provides just one way to provide the context value and one way to consume it
export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within DataProvider');
  }
  return context;
}
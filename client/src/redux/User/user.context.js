import React, { createContext, useReducer, useContext } from 'react';
import userReducer, { INITIAL_STATE } from './user.reducers';

// This creates a context object to store and access 
const UserContext = createContext();

// This uses the useReducer hook to allow access to state and provide functions to dispatch actions to update state
export default function DataProvider({ children }) {
  const [data, dispatchData] = useReducer(userReducer, INITIAL_STATE);
  return (
    <UserContext.Provider value={{ data, dispatchData }}>
      {children}
    </UserContext.Provider>
  );
}

// This intentionally avoids exporting UserContext and provides just one way to provide the context value and one way to consume it
export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within DataProvider');
  }
  return context;
}
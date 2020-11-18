import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const DataLayerContext = createContext();

export const Context = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

Context.propTypes = {
  initialState: PropTypes.shape({
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    user: PropTypes.shape({})
  }).isRequired,
  reducer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

export const useContextValue = () => useContext(DataLayerContext);

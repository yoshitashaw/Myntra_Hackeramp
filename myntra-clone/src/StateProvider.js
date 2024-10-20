//setup data layer
//We need this to track te basket

import React, {createContext, useContext, useReducer} from 'react';

//THIS IS THE DATA LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//THIS IS HOW WE USE IT INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext);


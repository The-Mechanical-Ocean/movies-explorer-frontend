import React from 'react';

export const CurrentUserContext = React.createContext();
export const useCurrentUserContext = () => React.useContext(CurrentUserContext); 
import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";

import {
  locationRequest,
  locationTransform,
} from "./location.service";

export const LocationContext = createContext();

const LocationContextProviderWithPadding = styled(
  LocationContext.Provider
)`
  padding: 10px;
`;

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState(null);

  const onSearch = (searchKeyword) => {
    setKeyword(searchKeyword);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
        // console.log(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
        // console.log(err);
      });
  }, [keyword]);

  return (
    <LocationContextProviderWithPadding
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContextProviderWithPadding>
  );
};

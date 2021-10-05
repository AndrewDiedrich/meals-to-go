import React, { useState, createContext, useEffect } from "react";

import { locationRequest } from "./locationRequest";

interface Location {
  lat: string | undefined;
  lng: string | undefined;
  viewport: any | undefined;
}

export interface LocationContextType {
  location: Location;
  isLoading: boolean;
  error: any;
  search: () => void;
  keyword: string;
}
export const LocationContext = createContext({
  location: { lat: 0, lng: 0, viewport: 0 },
  isLoading: false,
  error: null,
  search: (_searchKeyword: string) => {
    return;
  },
  keyword: "",
});
export const LocationContextProvider = ({ children }: { children: any }) => {
  const [location, setLocation] = useState<Location>({
    lat: undefined,
    lng: undefined,
    viewport: undefined,
  });
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = async (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // dont do anything
      return;
    }
    const locationResult = async () => {
      const { data, requestError } = await locationRequest(
        keyword.toLowerCase()
      );
      if (requestError) {
        setIsLoading(false);
        setError(requestError);
      } else {
        setIsLoading(false);
        setLocation(data);
      }
    };
    locationResult();
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{
        location,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

import React, { useState, createContext, useEffect, useContext } from "react";
import { resturantRequest } from "./resturantRequest";
import { LocationContext } from "../location/location.context";

export interface ResturantContextType {
  resturants: any;
  isLoading: boolean;
  error: any;
}
export const ResturantContext = createContext({
  resturants: [],
  isLoading: false,
  error: null,
});

export const ResturantsContextProvider = ({ children }: { children: any }) => {
  const [resturants, setResturants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveResturants = (locationString: string) => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data, requestError } = await resturantRequest(locationString);
      if (requestError) {
        setIsLoading(false);
        setError(requestError);
      } else {
        setIsLoading(false);
        setResturants(data);
      }
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveResturants(locationString);
      console.log("location string", locationString);
    }
  }, [location]);
  return (
    <ResturantContext.Provider
      value={{
        resturants,
        isLoading,
        error,
      }}
    >
      {children}
    </ResturantContext.Provider>
  );
};

import React, { useState, createContext, useEffect, useContext } from "react";
import { restaurantRequest } from "./restaurantRequest";
import { LocationContext } from "../location/location.context";

export interface RestaurantContextType {
  restaurants: any;
  isLoading: boolean;
  error: any;
}
export const RestaurantContext = createContext({
  restaurants: [],
  isLoading: false,
  error: null,
});

export const RestaurantsContextProvider = ({ children }: { children: any }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (locationString: string) => {
    setIsLoading(true);
    setTimeout(async () => {
      const { data, requestError } = await restaurantRequest(locationString);
      if (requestError) {
        setIsLoading(false);
        setError(requestError);
      } else {
        setIsLoading(false);
        setRestaurants(data);
      }
    }, 2000);
  };
  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <RestaurantContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

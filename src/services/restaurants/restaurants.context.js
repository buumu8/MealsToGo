import React, {
  useState,
  createContext,
  useEffect,
  useContext,
} from "react";
import { LocationContext } from "../location/location.context";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retriveRestaurants = (searchLocation) => {
    setIsLoading(true);
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(searchLocation)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const { lat, lng } = location;
      const locationString = `${lat},${lng}`;
      retriveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, isLoading, error }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

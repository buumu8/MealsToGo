import { mockImages, mocks } from "./mock";
import camelize from "camelize";
// import { transform } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject("not found");
    }
    resolve(mock);
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[
        Math.ceil(Math.random() * (mockImages.length - 1))
      ];
    });
    return {
      ...restaurant,
      isOpenNow:
        restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily:
        restaurant.business_status === "CLOSED_TEMPORARILY",
      rating: parseInt(restaurant.rating, 10),
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};

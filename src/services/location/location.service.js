import camelize from "camelize";
import { locations } from "./location.mock";
export const locationRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result.results);
  const { geometry = {} } = formattedResponse[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};

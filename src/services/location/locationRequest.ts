import { locations } from "./location.mock";
import camelize from "camelize";

const locationTransform = (results: any) => {
  const { geometry = {} } = camelize(results);
  const { lat, lng } = geometry.location.results[0];
  return { lat, lng };
};

interface Response {
  data: any;
  requestError: any;
}

/**
 *
 * @param location
 * request location of resturant based on long/lat location
 */
export const locationRequest = async (location: string): Promise<Response> => {
  let data, requestError;
  try {
    const mock = await locations[location].results;
    if (!mock) {
      throw new Error("No Mocks");
    }
    const transformed = locationTransform(mock);
    console;
    data = transformed;
  } catch (e: any) {
    requestError = e;
  } finally {
    return { data, requestError };
  }
};

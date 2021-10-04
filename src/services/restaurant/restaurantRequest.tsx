import { mockImages, mocks } from "./mock";
import camelize from "camelize";

const restaurantsTransform = (results = []) => {
  const mappedResults = results.map((restaurant: any) => {
    restaurant.photos = [mockImages[0]];
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily:
        restaurant.bussiness_status === "CLOSED_TEMPORARILYS",
    };
  });

  return camelize(mappedResults);
};

interface Response {
  data: any;
  requestError: any;
}

/**
 *
 * @param location
 * request resturants based on long/lat location
 */
export const restaurantRequest = async (
  location: string
): Promise<Response> => {
  let data, requestError;
  try {
    const mock = await mocks[location].results;
    if (!mock) {
      throw new Error("No Mocks");
    }
    const transformed = restaurantsTransform(mock);
    console;
    data = transformed;
  } catch (e: any) {
    requestError = e;
  } finally {
    return { data, requestError };
  }
};

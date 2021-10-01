import { mockImages, mocks } from "./mock";
import camelize from "camelize";

const resturantsTransform = (results = []) => {
  const mappedResults = results.map((resturant: any) => {
    resturant.photos = [mockImages[0]];
    return {
      ...resturant,
      isOpenNow: resturant.opening_hours && resturant.opening_hours.open_now,
      isClosedTemporarily: resturant.bussiness_status === "CLOSED_TEMPORARILYS",
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
export const resturantRequest = async (location: string): Promise<Response> => {
  let data, requestError;
  try {
    const mock = await mocks[location].results;
    if (!mock) {
      throw new Error("No Mocks");
    }
    const transformed = resturantsTransform(mock);
    console;
    data = transformed;
  } catch (e: any) {
    requestError = e;
  } finally {
    return { data, requestError };
  }
};

import React, { useContext, useEffect, useState } from "react";
import { Search } from "../components/search.components";
import MapView, { Marker, Callout } from "react-native-maps";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import { MapCallout } from "../components/map-callout.component";
import { RESTAURANT_SCREEN_ROUTES } from "../../../infrastructure/navigation/restaurants";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = ({ navigation }: { navigation: any }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState<number>(0);
  const { viewport, lat, lng } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02, // default zoom level
        }}
      >
        {restaurants.map((restaurant: any) => {
          return (
            <Marker
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
              key={restaurant.name}
              title={restaurant.name}
            >
              <Callout
                onPress={() =>
                  navigation.navigate(RESTAURANT_SCREEN_ROUTES.Details, {
                    restaurant,
                  })
                }
              >
                <MapCallout restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};

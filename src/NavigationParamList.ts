/**
 * A record of the navigation params for each route in your app.
 */
export type MainStackParamList = {
  Home: {};
  RideList: {};
  CreateRide: {};
  RideDetails: {
    rideId: string;
  };
  Profile: {};
};

export interface Ride {
  id: string;
  driver: string;
  from: string;
  to: string;
  date: string;
  seats: number;
  price: number;
}
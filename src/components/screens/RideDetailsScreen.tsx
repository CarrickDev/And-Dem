import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type RideDetailsScreenProps = {
    route: RouteProp<MainStackParamList, "RideDetails">,
    navigation: FrameNavigationProp<MainStackParamList, "RideDetails">,
};

export function RideDetailsScreen({ route, navigation }: RideDetailsScreenProps) {
    // TODO: Fetch ride details using route.params.rideId
    const ride = {
        id: route.params.rideId,
        driver: "John Doe",
        from: "New York",
        to: "Boston",
        date: "2024-03-20",
        seats: 3,
        price: 25,
        description: "Regular commute, leaving from Central Station"
    };

    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <label className="text-2xl font-bold mb-4">{ride.from} → {ride.to}</label>
                
                <flexboxLayout className="bg-gray-100 p-4 rounded-lg mb-4">
                    <label className="text-lg">Driver: {ride.driver}</label>
                </flexboxLayout>
                
                <flexboxLayout className="flex-col bg-gray-100 p-4 rounded-lg mb-4">
                    <label className="text-lg mb-2">Date: {ride.date}</label>
                    <label className="text-lg mb-2">Available Seats: {ride.seats}</label>
                    <label className="text-lg">Price per Seat: ${ride.price}</label>
                </flexboxLayout>
                
                <label className="text-lg mb-2">Trip Details:</label>
                <label className="text-gray-600 mb-4">{ride.description}</label>
                
                <button
                    className="bg-green-600 text-white p-4 rounded-lg"
                    onTap={() => {
                        // TODO: Implement booking logic
                        navigation.navigate("Home");
                    }}
                >
                    Book this Ride
                </button>
            </flexboxLayout>
        </scrollView>
    );
}
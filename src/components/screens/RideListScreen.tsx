import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList, Ride } from "../../NavigationParamList";

type RideListScreenProps = {
    route: RouteProp<MainStackParamList, "RideList">,
    navigation: FrameNavigationProp<MainStackParamList, "RideList">,
};

export function RideListScreen({ navigation }: RideListScreenProps) {
    // Mock data - replace with real data later
    const rides: Ride[] = [
        {
            id: "1",
            driver: "John Doe",
            from: "New York",
            to: "Boston",
            date: "2024-03-20",
            seats: 3,
            price: 25
        },
        {
            id: "2",
            driver: "Jane Smith",
            from: "Los Angeles",
            to: "San Francisco",
            date: "2024-03-21",
            seats: 2,
            price: 30
        }
    ];

    return (
        <scrollView className="bg-gray-100">
            <flexboxLayout className="flex-col p-4">
                {rides.map((ride) => (
                    <flexboxLayout
                        key={ride.id}
                        className="bg-white p-4 rounded-lg mb-4 flex-col"
                        onTap={() => navigation.navigate("RideDetails", { rideId: ride.id })}
                    >
                        <label className="text-xl font-bold mb-2">{ride.from} → {ride.to}</label>
                        <label className="text-gray-600">Driver: {ride.driver}</label>
                        <label className="text-gray-600">Date: {ride.date}</label>
                        <flexboxLayout className="justify-between mt-2">
                            <label className="text-green-600">${ride.price}</label>
                            <label className="text-blue-600">{ride.seats} seats available</label>
                        </flexboxLayout>
                    </flexboxLayout>
                ))}
            </flexboxLayout>
        </scrollView>
    );
}
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type CreateRideScreenProps = {
    route: RouteProp<MainStackParamList, "CreateRide">,
    navigation: FrameNavigationProp<MainStackParamList, "CreateRide">,
};

export function CreateRideScreen({ navigation }: CreateRideScreenProps) {
    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <label className="text-lg mb-2">From:</label>
                <textField className="border p-2 rounded mb-4" hint="Enter starting point" />
                
                <label className="text-lg mb-2">To:</label>
                <textField className="border p-2 rounded mb-4" hint="Enter destination" />
                
                <label className="text-lg mb-2">Date:</label>
                <textField className="border p-2 rounded mb-4" hint="Select date" />
                
                <label className="text-lg mb-2">Available Seats:</label>
                <textField className="border p-2 rounded mb-4" hint="Number of seats" keyboardType="number" />
                
                <label className="text-lg mb-2">Price per Seat:</label>
                <textField className="border p-2 rounded mb-4" hint="Enter price" keyboardType="number" />
                
                <button
                    className="bg-indigo-600 text-white p-4 rounded-lg mt-4"
                    onTap={() => {
                        // TODO: Implement ride creation
                        navigation.navigate("RideList");
                    }}
                >
                    Create Ride
                </button>
            </flexboxLayout>
        </scrollView>
    );
}
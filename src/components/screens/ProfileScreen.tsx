import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type ProfileScreenProps = {
    route: RouteProp<MainStackParamList, "Profile">,
    navigation: FrameNavigationProp<MainStackParamList, "Profile">,
};

export function ProfileScreen({ navigation }: ProfileScreenProps) {
    return (
        <scrollView>
            <flexboxLayout className="flex-col p-4">
                <flexboxLayout className="items-center mb-6">
                    <label className="text-2xl font-bold">John Doe</label>
                    <label className="text-gray-600">john.doe@example.com</label>
                </flexboxLayout>
                
                <stackLayout className="bg-gray-100 rounded-lg p-4 mb-4">
                    <label className="text-lg font-bold mb-2">My Rides</label>
                    <label>You have no upcoming rides</label>
                </stackLayout>
                
                <stackLayout className="bg-gray-100 rounded-lg p-4 mb-4">
                    <label className="text-lg font-bold mb-2">My Offered Rides</label>
                    <label>You haven't offered any rides yet</label>
                </stackLayout>
                
                <button
                    className="bg-indigo-600 text-white p-4 rounded-lg mb-4"
                    onTap={() => navigation.navigate("CreateRide")}
                >
                    Offer a New Ride
                </button>
                
                <button
                    className="bg-gray-600 text-white p-4 rounded-lg"
                    onTap={() => {
                        // TODO: Implement logout
                        navigation.navigate("Home");
                    }}
                >
                    Logout
                </button>
            </flexboxLayout>
        </scrollView>
    );
}
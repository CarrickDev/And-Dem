import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";

type HomeScreenProps = {
    route: RouteProp<MainStackParamList, "Home">,
    navigation: FrameNavigationProp<MainStackParamList, "Home">,
};

export function HomeScreen({ navigation }: HomeScreenProps) {
    return (
        <flexboxLayout style={styles.container}>
            <label className="text-3xl mb-8 font-bold text-center text-indigo-600">
                Welcome to CarpoolApp
            </label>
            
            <button
                className="bg-indigo-600 text-white p-4 rounded-lg mb-4 w-3/4 text-center"
                onTap={() => navigation.navigate("RideList")}
            >
                Find a Ride
            </button>
            
            <button
                className="bg-green-600 text-white p-4 rounded-lg mb-4 w-3/4 text-center"
                onTap={() => navigation.navigate("CreateRide")}
            >
                Offer a Ride
            </button>
            
            <button
                className="bg-gray-600 text-white p-4 rounded-lg w-3/4 text-center"
                onTap={() => navigation.navigate("Profile")}
            >
                My Profile
            </button>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
    },
});
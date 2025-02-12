import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";

import { HomeScreen } from "./screens/HomeScreen";
import { RideListScreen } from "./screens/RideListScreen";
import { CreateRideScreen } from "./screens/CreateRideScreen";
import { RideDetailsScreen } from "./screens/RideDetailsScreen";
import { ProfileScreen } from "./screens/ProfileScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#4F46E5",
                },
                headerTintColor: "white",
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: "CarpoolApp" }}
            />
            <StackNavigator.Screen
                name="RideList"
                component={RideListScreen}
                options={{ title: "Available Rides" }}
            />
            <StackNavigator.Screen
                name="CreateRide"
                component={CreateRideScreen}
                options={{ title: "Offer a Ride" }}
            />
            <StackNavigator.Screen
                name="RideDetails"
                component={RideDetailsScreen}
                options={{ title: "Ride Details" }}
            />
            <StackNavigator.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: "My Profile" }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
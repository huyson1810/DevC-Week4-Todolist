import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import CompletedScreen from './screens/CompleteScreen';
import All from './screens/All';
import Active from './screens/Active';
import SingleTodoScreen from './screens/SingleTodoScreen'; 

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const routeIcons = {
  Completed : "checkcircle",
  All : "pluscircle",
  Active : "exclamationcircle"
}

const AllStack = () => {
  return(
    <Stack.Navigator initialRouteName="All">
      <Stack.Screen name="All" component={All}></Stack.Screen>
      <Stack.Screen name="SingleTodoScreen" component={SingleTodoScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <AntDesign name={routeIcons[route.name]} size={24} color={focused ? "aquamarine" : "cadetblue"} />
          ),
        })}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "black",
        }}>
          <Tab.Screen name="Completed" component={CompletedScreen}></Tab.Screen> 
          <Tab.Screen name="All" component={AllStack}></Tab.Screen> 
          <Tab.Screen name="Active" component={Active}></Tab.Screen> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
  },

});
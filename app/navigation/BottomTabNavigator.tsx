import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Dummy screen components
const HomeScreen = () => (
  <View>
    <Text>Home Screen</Text>
  </View>
);
const ServicesScreen = () => (
  <View>
    <Text>Services Screen</Text>
  </View>
);
const HistoryScreen = () => (
  <View>
    <Text>History Screen</Text>
  </View>
);
const AccountScreen = () => (
  <View>
    <Text>Account Screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            switch (route.name) {
              case "Home":
                iconName = "home";
                break;
              case "Services":
                iconName = "miscellaneous-services";
                break;
              case "History":
                iconName = "history";
                break;
              case "Account":
                iconName = "person";
                break;
              default:
                iconName = "circle";
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007bff",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

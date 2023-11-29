import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import CustomTabBar from "../../components/TabBar/CustomTabBar";
import CustomTabBarButton from "../../components/TabBar/CustomTabBarButton";
import Home from "../../screens/home/Home";
import { COLORS } from "../../constant/colors";
import Favourite from "../../screens/favourite";
import CategoryIcon from "../../assets/CategoryIcon";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.Black100,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.DarkYellow,

        tabBarIcon: ({ color, size, focused }) => {
          if (route.name === "Home") {
            return <AntDesign name="home" size={24} color={color} />;
          } else if (route.name === "Category") {
            return <>{!focused ? CategoryIcon({color:color, bgColor: 'none', round: '#3E4554'}) : CategoryIcon({color:color, bgColor: color, round: color})}</>;
          } else if (route.name === "Favourite") {
            return <AntDesign name="hearto" size={24} color={color} />;
          } else if (route.name === "More") {
            return (
              <MaterialCommunityIcons
                name="dots-vertical"
                size={24}
                color={color}
              />
            );
          }
        },
      })}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton name="HomeScreen" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={"Category"}
        component={() => <View />}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton name="Category" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={"Favourite"}
        component={Favourite}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton name="Favourite" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name={"More"}
        component={() => <View />}
        options={{
          tabBarButton: (props) => (
            <CustomTabBarButton name="More" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    borderTopWidth: 0,
    bottom: Platform.OS === "ios" ? 15 : 0,
    height: Platform.OS === "ios" ? 60 : 80,
  },
});

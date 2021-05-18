import React from "react";
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  MainStackNavigator,
  ContactStackNavigator,
  MoreStackNavigator,
} from "./StackNavigator";
import { useNavigation } from "@react-navigation/core";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const navigation = useNavigation();
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Contact" component={ContactStackNavigator} />
      <Tab.Screen
        name="More"
        component={MoreStackNavigator}
        options={{
          tabBarButton: (props) => (
            <TouchableOpacity {...props} onPress={() => navigation.toggleDrawer()} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

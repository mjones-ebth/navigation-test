import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./navigation/StackNavigator";

import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

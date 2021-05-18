import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Button, SafeAreaView } from "react-native";

const DrawerContent = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="FAQ"
        onPress={() => navigation.navigate("More", { screen: "FAQ"})}
      />
      <Button
        title="Press"
        onPress={() => navigation.navigate("More", { screen: "Press" })}
      />
    </SafeAreaView>
  );
};

export default DrawerContent;

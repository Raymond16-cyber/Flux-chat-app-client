import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { IconSymbol, IconSymbolName } from "./ui/icon-symbol";

const ThemedIcon = ({ name, size = 24,styles }:{name: IconSymbolName, size?: number, styles?: string}) => {
  const scheme = useColorScheme();

  const iconColor = scheme === "dark" ? "#FFFFFF" : "#000000";

  return(
    <View className={`${styles ? styles : ""}`}>
      <IconSymbol name={name} size={size} color={iconColor} />
    </View>
  )
};

export default ThemedIcon;

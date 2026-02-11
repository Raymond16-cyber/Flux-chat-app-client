import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { IconSymbol, IconSymbolName } from "./ui/icon-symbol";

const ThemedIcon = ({ name, size = 24 }:{name: IconSymbolName, size?: number}) => {
  const scheme = useColorScheme();

  const iconColor = scheme === "dark" ? "#FFFFFF" : "#000000";

  return <IconSymbol name={name} size={size} color={iconColor} />;
};

export default ThemedIcon;

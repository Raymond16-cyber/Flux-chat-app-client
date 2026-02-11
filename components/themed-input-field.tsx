import { TextInput, useColorScheme, View, type ViewProps } from "react-native";
import ThemedIcon from "./themed-icon";


export type ThemedInputFieldProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  onChangeText?: (text: string) => void;
};

const ThemedInputField = ({ onChangeText }: ThemedInputFieldProps) => {
  const scheme = useColorScheme();
  const background = scheme === "dark" ? "#151718" : "#FFFFFF";
  const textColor = scheme === "dark" ? "#FFFFFF" : "#000000";

  return (
    <View className="relative mb-4">
      <TextInput
        placeholder="Search or start a message"
        placeholderTextColor="#9CA3AF"
        onChangeText={onChangeText}
        style={{
          backgroundColor: background,
          color: textColor,
        }}
        className="pl-10 pr-4 py-4 w-full rounded-xl px-4"
      />

      <ThemedIcon
        name="magnifyingglass"
        size={20}
        styles="absolute right-3 top-4"
      />
    </View>
  );
};


export default ThemedInputField
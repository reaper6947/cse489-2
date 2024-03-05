import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, TextInput, Pressable } from "react-native";
import { useBatteryLevel } from "expo-battery";
import { Text, View } from "@/components/Themed";

import { useStore } from "../app/store/store";
export default function BatteryCompare() {
  const getBattery = useStore((state) => state.battery);
  const batteryLevel = useBatteryLevel();
  return (
    <View style={(styles.container, { backgroundColor: "" })}>
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      <Text> your guess : {getBattery}</Text>

      <Text>Current Battery Level: {Math.floor(batteryLevel * 100)}</Text>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    height: 30,
    margin: 10,
    borderWidth: 2,
  },
  btn: {
    backgroundColor: "grey",
    margin: 5,
    padding: 7,
  },
});

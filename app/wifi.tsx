import { StatusBar } from "expo-status-bar";
import { Button, Platform, StyleSheet } from "react-native";
import * as Network from "expo-network";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
export default function WifiScreen() {
  // const networkState = await Network.getNetworkStateAsync();
  const [isConnected, setIsConnected] = useState<boolean | undefined>(false);

  async function getBatteryInfo() {
    const wifiInfo = await Network.getNetworkStateAsync();
    setIsConnected(wifiInfo.isConnected);
  }

  useEffect(() => {
    getBatteryInfo();
  }, []);

  return (
    <View style={styles.container}>
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      <Text>wifi state: {isConnected ? "on" : "off"}</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Button
        onPress={async () =>
          console.log((await Network.getNetworkStateAsync()).isConnected)
        }
        title="something"
      />
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
});

import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
  TextInput,
  Pressable,
} from "react-native";
import { useState } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import { useStore } from "../app/store/store";
export default function ModalScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getBattery = useStore((state) => state.battery);
  const updateBattery = useStore((state) => state.updateBattery);

  return (
    <View style={(styles.container, { backgroundColor: "" })}>
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      <Text> guess the battery perentage</Text>
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={getBattery as any}
        onChangeText={updateBattery}
      />

      <Pressable>
        {({ pressed }) => (
          <Link href="/batterycompare" asChild>
            <Text style={styles.btn}>Next</Text>
          </Link>
        )}
      </Pressable>
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

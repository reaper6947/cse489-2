import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useState } from "react";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <View style={(styles.container, { backgroundColor: "" })}>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}
      <Button title="open Modal" onPress={() => setIsModalVisible(true)} />
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
      >
        <View style={(styles.container, {})}>
          <ActivityIndicator
            size="large"
            color="midnightblue"
            animating={isLoading}
          />

          <Button
            title="close modal"
            onPress={() => setIsModalVisible(false)}
          />
          <Button
            title="loading toggle"
            onPress={() => setIsLoading(!isLoading)}
          />
        </View>
      </Modal>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
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
});

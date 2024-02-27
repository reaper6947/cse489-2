import { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Link, Tabs } from "expo-router";
import {
  Platform,
  StyleSheet,
  Modal,
  Button,
  ActivityIndicator,
  Pressable,
  Text,
  Alert,
} from "react-native";
import { View } from "@/components/Themed";
export default function App() {
  function log() {
    console.log(getValue);
  }
  const [open, setOpen] = useState(false);
  const [getValue, setValue] = useState("/battery");
  const [items, setItems] = useState([
    { label: "Custom broadcast receiver", value: "/custom" },
    { label: "Wifi State Change", value: "/wifi" },
    { label: "System battery notification receiver", value: "/battery" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={getValue}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
      <Link
        href={{
          pathname: "/[val]",
          params: { val: getValue },
        }}
        asChild
      >
        <Pressable>
          {({ pressed }) => (
            <Text style={styles.btn} onPress={() => log()}>
              Next
            </Text>
          )}
        </Pressable>
      </Link>
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
  btn: {
    backgroundColor: "grey",
    margin: 5,
    padding: 7,
  },
});

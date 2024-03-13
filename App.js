import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Home from "./src/screens/Home";
import { Routes } from "./src/routes";
import StackRoutes from "./src/routes/stack.routes";

export default function App() {

  return (
    <SafeAreaView>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { Stack } from "expo-router";
import { StyleSheet, TouchableOpacity, Modal } from "react-native";
import LogoutIcon from "../components/LogoutIcon";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0E46A3",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="TransactionHistory"
        options={{
          headerRight: () => <LogoutIcon />,
          title: "Transaction History",
        }}
      />
      <Stack.Screen
        name="TransactionDetailPage"
        options={{ title: "Transaction Detail" }}
      />
    </Stack>
  );
}

const Styles = StyleSheet.create({});

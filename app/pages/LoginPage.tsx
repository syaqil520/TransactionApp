import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import LoadingHud from "../components/LoadingHud";
import * as LocalAuthentication from "expo-local-authentication";
import { useRouter } from "expo-router";

const LoginPage = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleBiometricAuth = async () => {
    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
    });

    if (authResult.success) {
      router.push("TransactionHistory");
    } else {
      ToastAndroid.show("Unable to authenticate", ToastAndroid.SHORT);
    }
  };

  return (
    <>
      <LoadingHud isShow={isLoading} />
      <SafeAreaView style={{ flex: 1, backgroundColor: "#e8ecf4" }}>
        <View style={styles.container}>
          <View style={{ marginVertical: 32 }}>
            <View style={styles.logoIcon}>
              <Ionicons name="receipt-outline" color="#0E46A3" size={44} />
            </View>

            <Text style={styles.title}>TransactionApp</Text>
            <Text style={styles.description}>
              View your transaction history
            </Text>
          </View>

          <View style={styles.form}>
            {/* <View style={styles.input}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangeText={(email) => setForm({ ...form, email })}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.email}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(password) => setForm({ ...form, password })}
                placeholder=""
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.password}
              />
            </View> */}

            <View style={styles.formAction}>
              {/* <TouchableOpacity
                onPress={() => {
                  router.replace("TransactionHistory");
                }}
              >
                <View style={styles.primaryBtn}>
                  <Text style={styles.btnText}>Login</Text>
                </View>
              </TouchableOpacity> */}

              <View style={styles.formActionSpacer} />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                  handleBiometricAuth();
                }}
              >
                <View style={styles.primaryBtn}>
                  <Ionicons
                    color="#fff"
                    name="finger-print"
                    size={22}
                    style={{ marginRight: 12 }}
                  />

                  <Text style={styles.btnText}>Login with Biometric</Text>

                  <View style={{ width: 34 }} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1d1d1d",
    marginBottom: 8,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    fontWeight: "500",
    color: "#929292",
    textAlign: "center",
  },
  logoIcon: {
    alignSelf: "center",
    width: 80,
    height: 80,
    marginBottom: 32,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formActionSpacer: {
    marginVertical: 8,
  },
  formFooter: {
    marginTop: "auto",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "400",
    color: "#929292",
    textAlign: "center",
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    position: "absolute",
    width: 110,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 13,
    fontWeight: "500",
    color: "#c0c0c0",
    zIndex: 9,
  },
  inputControl: {
    height: 44,
    backgroundColor: "#fff",
    paddingLeft: 80,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: "500",
    color: "#222",
  },
  primaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#0E46A3",
    borderColor: "#0E46A3",
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  secondaryBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "transparent",
    borderColor: "#0E46A3",
  },
  secondaryBtnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#000",
  },
});

export default LoginPage;

import React, { useState } from "react";
import { View, Modal, TouchableOpacity, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const LogoutIcon = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setShowConfirmation(!showConfirmation);
        }}
      >
        <MaterialCommunityIcons name="logout" size={20} color={"#fff"} />
      </TouchableOpacity>

      <Modal
        transparent={true}
        animationType="none"
        visible={showConfirmation}
        onRequestClose={() => {
          setShowConfirmation(!showConfirmation);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Confirm Logout</Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  handleLogout();
                }}
              >
                <View style={styles.primaryBtn}>
                  <Text style={styles.btnText}>Logout</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setShowConfirmation(!showConfirmation);
                }}
              >
                <View style={styles.dangerBtn}>
                  <Text style={styles.dangerBtnText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default LogoutIcon;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginHorizontal: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 24,
  },
  primaryBtn: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#0E46A3",
    borderColor: "#0E46A3",
    marginHorizontal: 8,
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
  dangerBtn: {
    marginHorizontal: 8,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: "#FF204E",
    borderColor: "#FF204E",
  },
  dangerBtnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: "600",
    color: "#fff",
  },
});

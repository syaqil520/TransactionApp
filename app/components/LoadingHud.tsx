import React from "react";
import { View, ActivityIndicator, Modal } from "react-native";

type LoadingHudProps = {
  isShow: boolean;
};

const LoadingHud = (props: LoadingHudProps) => {
  return (
    <Modal transparent={true} animationType="none" visible={props.isShow}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            width: 80,
            height: 80,
            marginBottom: 32,
            backgroundColor: "#B4B4BB",
            borderRadius: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color="#000" />
        </View>
      </View>
    </Modal>
  );
};

export default LoadingHud;

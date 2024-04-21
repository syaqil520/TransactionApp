import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ToastAndroid,
  RefreshControl,
} from "react-native";
import { useRouter } from "expo-router";
import TransactionHistoryCell from "../components/TransactionHistoryCell";
import { useEffect, useState } from "react";
import jsonData from "@/sample_data/transaction1.json";
import * as LocalAuthentication from "expo-local-authentication";

export default function TransactionHistory() {
  const router = useRouter();
  const [isMask, setIsMask] = useState(true);
  const [transactionList, setTransactionList] = useState<Array<Transaction>>(
    []
  );
  const [isRefresh, setIsRefresh] = useState(false);

  const onClickMaskButton = async () => {
    if (!isMask) {
      setIsMask(true);
      return;
    }

    const authResult = await LocalAuthentication.authenticateAsync({
      promptMessage: "Login with Biometrics",
      cancelLabel: "Cancel",
    });

    if (authResult.success) {
      setIsMask(!isMask);
    } else {
      ToastAndroid.show("Unable to authenticate", ToastAndroid.SHORT);
    }
  };

  const onRefresh = React.useCallback(() => {
    setIsRefresh(true);
    setTimeout(() => {
      getTransactionList();
      setIsRefresh(false);
    }, 2000);
  }, []);

  const getTransactionList = async () => {
    setIsMask(true);
    setTransactionList(jsonData.data);
  };

  useEffect(() => {
    getTransactionList();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.maskButton} onPress={onClickMaskButton}>
          <View>
            <Text>{isMask ? "Show Amount" : "Hide Amount"}</Text>
          </View>
        </TouchableOpacity>

        <FlatList
          refreshControl={
            <RefreshControl refreshing={isRefresh} onRefresh={onRefresh} />
          }
          data={transactionList}
          renderItem={({ item }) => (
            <TransactionHistoryCell
              transaction={item}
              onPress={() => {
                router.push({
                  pathname: "TransactionDetailPage",
                  params: { id: `${item.id}` },
                });
              }}
              isShowAmount={!isMask}
            />
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 18,
    paddingHorizontal: 18,
    backgroundColor: "#e8ecf4",
  },
  maskButton: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginBottom: 16,
    borderColor: "#0e46a3",
    borderWidth: 1,
  },
});

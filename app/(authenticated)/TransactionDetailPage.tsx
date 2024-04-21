import { View, Text, StyleSheet } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import txnData from "@/sample_data/transaction1.json";

type TransactionDetailProps = {
  transaction: Transaction;
};

export default function TransactionDetailPage() {
  const params = useLocalSearchParams<{ id: string }>();
  const [txn, setTxn] = useState<Transaction>();
  const { id } = params;

  const getDetail = () => {
    txnData.data.forEach((item) => {
      if (item.id === parseInt(id || "")) {
        setTxn(item);
      }
    });
  };

  const getAmount = (): string => {
    const typeOperator = txn?.type === "debit" ? "+" : "-";
    return `${typeOperator}RM${txn?.amount
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const getLocalDate = (): string => {
    let date = new Date(txn?.date || "");
    return date.toLocaleString();
  };
  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.cell}>
          <Text style={styles.key}>Id:</Text>
          <Text style={styles.value}>{txn?.id}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Amount:</Text>
          <Text style={styles.value}>{getAmount()}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Date:</Text>
          <Text style={styles.value}>{getLocalDate()}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Description:</Text>
          <Text style={styles.value}>{txn?.description}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Type:</Text>
          <Text style={styles.value}>{txn?.type}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Merchant Name:</Text>
          <Text style={styles.value}>{txn?.merchantName}</Text>
        </View>

        <View style={styles.spacer}></View>

        <View style={styles.cell}>
          <Text style={styles.key}>Status:</Text>
          <Text style={styles.value}>{txn?.status}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "column",
  },
  spacer: {
    height: 1,
    backgroundColor: "#8E8E93",
    marginVertical: 16,
  },

  cell: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  key: {
    fontSize: 18,
    fontWeight: "500",
    justifyContent: "center",
    paddingRight: 16,
  },
  value: {
    justifyContent: "center",
    fontSize: 16,
    flexShrink: 1,
    textAlign: "right",
  },
});

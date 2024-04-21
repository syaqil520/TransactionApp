import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TransactionHistoryCellProps = {
  transaction: Transaction;
  onPress: () => void;
  isShowAmount: boolean;
};

const TransactionHistoryCell = (props: TransactionHistoryCellProps) => {
  const descText =
    props.transaction.description.length > 30
      ? props.transaction.description.substring(0, 30)
      : props.transaction.description;

  const getAmount = (): string => {
    const typeOperator = props.transaction.type === "debit" ? "+" : "-";
    return `${typeOperator}RM${props.transaction.amount
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
  };

  const getLocalDate = (): string => {
    let date = new Date(props.transaction.date);
    return date.toLocaleString();
  };

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <View style={styles.infoSegment}>
          <Text style={styles.merchantLabel}>
            {props.transaction.merchantName}
          </Text>
          <Text style={styles.descLabel} ellipsizeMode="tail">
            {descText}
          </Text>
          <Text style={styles.dateLabel}>{getLocalDate()}</Text>
        </View>

        <View style={styles.amountSegment}>
          <Text style={styles.amountLabel}>
            {props.isShowAmount ? getAmount() : "RM ****"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionHistoryCell;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  infoSegment: {
    flexShrink: 1,
    marginRight: 16,
  },
  amountSegment: {
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 1,
  },
  merchantLabel: {
    fontSize: 18,
    fontWeight: "600",
  },
  descLabel: {
    fontSize: 14,
    fontWeight: "400",
    color: "#8E8E93",
  },
  dateLabel: {
    fontSize: 12,
    fontWeight: "200",
  },
  amountLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
});

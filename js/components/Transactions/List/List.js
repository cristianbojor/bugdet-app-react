import React, {Component} from "react";
import {View} from "react-native";
import DateBasedList from "./DateBasedList";
import {List} from "native-base";

const TransactionList = ({transactions, onItemClick}) => {
  const perDayTransactions = new Map();

  transactions.forEach(t => {
    if (!perDayTransactions.has(t.date)) {
      perDayTransactions.set(t.date, []);
    }

    perDayTransactions.get(t.date).push(t);
  });

  const result = [];

  perDayTransactions.forEach(
    (perDay, index) => {
      result.push(<DateBasedList key={index}
                                 date={index}
                                 transactions={perDay}
                                 onItemClick={onItemClick}/>)
    }
  );

  return <List>{result}</List>;
};

TransactionList.propTypes = {
  transactions: React.PropTypes.array.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};

export default TransactionList;

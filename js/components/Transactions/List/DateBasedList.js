import React, {Component} from "react";
import TransactionListItem from "./Item";
import {ListItem, Text} from "native-base";
import {View} from "react-native";

const DateBasedList = ({date, transactions, onItemClick}) => {
  const result = [];


  result.push(
    <ListItem key="header" itemDivider>
      <Text>Date {date}</Text>
    </ListItem>
  );

  transactions.forEach(t => result.push(
    <TransactionListItem key={t.id} onClick={onItemClick} {...t}/>));

  return <View>{result}</View>;
};

DateBasedList.propTypes = {
  transactions: React.PropTypes.array.isRequired,
  date: React.PropTypes.any.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};

export default DateBasedList;

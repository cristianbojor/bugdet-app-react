import React, {Component} from "react";
import {ListItem, Text, Icon} from "native-base";
import config from "../../../constants/config";

const Item = ({id, price, category, details, onClick}) => {
  return <ListItem key={id} onPress={(event) => onClick(event, id)}>
    <Icon name='md-pin' style={{color: '#00C497'}}/>
    <Text> {price} {config.currency}</Text>
    <Text note>{details}</Text>
  </ListItem>

};

Item.propTypes = {
  transactions: React.PropTypes.array,
  onClick: React.PropTypes.func.isRequired,
};

export default Item;

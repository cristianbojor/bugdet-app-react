import React, {Component} from "react";
import {ListItem, Text, Icon} from "native-base";
import config from "../../../constants/config";

const Item = ({id, price, category, details, onViewDetailsClick, onRemoveClick}) => {
  return <ListItem key={id} >
    <Icon name='md-pin' onPress={(event) => onViewDetailsClick(event, id)} style={{color: '#00C497'}}/>
    <Text onPress={(event) => onViewDetailsClick(event, id)}> {price}{config.currency}</Text>
    <Text note>{details}</Text>
    <Icon name='md-remove' onPress={(event) => onRemoveClick(event, id)} style={{color: '#db0638'}}/>
  </ListItem>

};

Item.propTypes = {
  transactions: React.PropTypes.array,
  onViewDetailsClick: React.PropTypes.func.isRequired,
  onRemoveClick: React.PropTypes.func.isRequired
};

export default Item;

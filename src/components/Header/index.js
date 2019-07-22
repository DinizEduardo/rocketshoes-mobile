import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TouchableHighlight } from 'react-native';
import { Container, Items, Logo } from './styles';
// import console = require('console');

export default function Header({ navigation }) {
  const amount = useSelector(state => state.cart.length);
  return (
    <Container>
      <TouchableHighlight onPress={() => navigation.navigate('Main')}>
        <Logo />
      </TouchableHighlight>
      <View>
        <Icon
          name="shopping-basket"
          color="#FFF"
          size={24}
          onPress={() => navigation.navigate('Cart')}
        />
        <Items>{amount || 0}</Items>
      </View>
    </Container>
  );
}

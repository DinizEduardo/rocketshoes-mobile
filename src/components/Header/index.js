import React, { Component } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TouchableHighlight } from 'react-native';
import { Container, Items, Logo } from './styles';
// import console = require('console');

function Header({ navigation, cartSize }) {
  const amount = cartSize;

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

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);

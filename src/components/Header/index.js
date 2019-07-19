import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View, TouchableHighlight } from 'react-native';
import { Container, Items, Logo } from './styles';

function Header({ navigation }) {
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
        <Items>0</Items>
      </View>
    </Container>
  );
}

export default Header;

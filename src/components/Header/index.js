import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native';
import { Container, Items, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo />
      <View>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <Items>0</Items>
      </View>
    </Container>
  );
}

export default Header;

import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ProdImage,
  Product,
  ProdInfos,
  AddButton,
  AddButtonText,
  ItemAmount,
  TextAmount,
  Price,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Product>
        <ProdImage
          source={{
            uri:
              'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
          }}
        />
        <>
          <ProdInfos>
            <Text>Tênis de Caminhada Leve Confortável</Text>
            <Price>R$179,90</Price>
          </ProdInfos>

          <AddButton>
            <ItemAmount>
              <Icon name="add-shopping-cart" size={20} color="#fff" />
              <TextAmount>0</TextAmount>
            </ItemAmount>
            <AddButtonText>ADICIONAR</AddButtonText>
          </AddButton>
        </>
      </Product>
    </Container>
  );
}

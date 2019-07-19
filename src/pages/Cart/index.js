import React from 'react';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CartContainer,
  Product,
  ProductInfo,
  ProdImage,
  InputAmount,
  ProductAmount,
  ProductDetails,
  ProductName,
  ProductPrice,
  Amount,
  TotalPrice,
  TotalCart,
  TotalText,
  TotalCartPrice,
  FinishButton,
  FinishText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <CartContainer>
        <Product>
          <ProductInfo>
            <ProdImage
              source={{
                uri:
                  'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
              }}
            />
            <ProductDetails>
              <ProductName>Tênis de Caminhada Leve Confortável</ProductName>
              <ProductPrice>R$ 179,90</ProductPrice>
            </ProductDetails>
            <Icon name="delete-forever" color="#7159c1" size={24} />
          </ProductInfo>
          <ProductAmount>
            <Amount>
              <Icon name="remove-circle-outline" color="#7159c1" size={16} />
              <InputAmount value="0" />
              <Icon name="add-circle-outline" color="#7159c1" size={16} />
            </Amount>
            <TotalPrice>R$ 359,80</TotalPrice>
          </ProductAmount>
        </Product>
        <TotalCart>
          <TotalText>TOTAL</TotalText>
          <TotalCartPrice>R$ 359,80</TotalCartPrice>
        </TotalCart>

        <FinishButton>
          <FinishText>FINALIZAR COMPRA</FinishText>
        </FinishButton>
      </CartContainer>
    </Container>
  );
}

import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FlatList } from 'react-native';
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
  Background,
} from './styles';
// import console = require('console');

// handleDelete = id => {
//   const { dispatch } = this.props;

//   dispatch({
//     type: '@cart/DELETE',
//     id,
//   });
// };

function Cart({ products, dispatch }) {
  return (
    <Background>
      <Container>
        <CartContainer>
          {products.map(product => (
            <Product key={product.id}>
              <ProductInfo>
                <ProdImage
                  source={{
                    uri: product.image,
                  }}
                />
                <ProductDetails>
                  <ProductName>{product.title}</ProductName>
                  <ProductPrice>{product.price}</ProductPrice>
                </ProductDetails>
                <Icon
                  name="delete-forever"
                  color="#7159c1"
                  size={24}
                  onPress={() =>
                    dispatch({ type: '@cart/DELETE', id: product.id })
                  }
                />
              </ProductInfo>
              <ProductAmount>
                <Amount>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={16}
                  />
                  <InputAmount value={String(product.amount)} />
                  <Icon name="add-circle-outline" color="#7159c1" size={16} />
                </Amount>
                <TotalPrice>R$ 359,80</TotalPrice>
              </ProductAmount>
            </Product>
          ))}
          <TotalCart>
            <TotalText>TOTAL</TotalText>
            <TotalCartPrice>R$ 359,80</TotalCartPrice>
          </TotalCart>
          <FinishButton>
            <FinishText>FINALIZAR COMPRA</FinishText>
          </FinishButton>
        </CartContainer>
      </Container>
    </Background>
  );
}

export default connect(state => ({
  products: state.cart,
}))(Cart);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';
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
  EmptyCart,
  EmptyText,
} from './styles';

function Cart({ products, removeFromCart, updateAmount, total }) {
  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Background>
      <Container>
        {products.length ? (
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
                    onPress={() => removeFromCart(product.id)}
                  />
                </ProductInfo>
                <ProductAmount>
                  <Amount>
                    <Icon
                      name="remove-circle-outline"
                      color="#7159c1"
                      size={16}
                      onPress={() => decrement(product)}
                    />
                    <InputAmount value={String(product.amount)} />
                    <Icon
                      name="add-circle-outline"
                      color="#7159c1"
                      size={16}
                      onPress={() => increment(product)}
                    />
                  </Amount>
                  <TotalPrice>R$ {product.subtotal}</TotalPrice>
                </ProductAmount>
              </Product>
            ))}
            <TotalCart>
              <TotalText>TOTAL</TotalText>
              <TotalCartPrice>R$ {total}</TotalCartPrice>
            </TotalCart>
            <FinishButton>
              <FinishText>FINALIZAR COMPRA</FinishText>
            </FinishButton>
          </CartContainer>
        ) : (
          <EmptyCart>
            <Icon name="remove-shopping-cart" size={58} color="#eee" />
            <EmptyText>Seu carrinho está vazio.</EmptyText>
          </EmptyCart>
        )}
      </Container>
    </Background>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(p => ({
    ...p,
    subtotal: parseFloat(p.price * p.amount).toFixed(2),
  })),
  total: parseFloat(
    state.cart.reduce((total, p) => {
      return total + p.price * p.amount;
    }, 0)
  ).toFixed(2),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

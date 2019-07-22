import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state =>
    state.cart.map(p => ({
      ...p,
      subtotal: parseFloat(p.price * p.amount).toFixed(2),
    }))
  );

  const total = useSelector(state =>
    parseFloat(
      state.cart.reduce((sumTotal, p) => {
        return sumTotal + p.price * p.amount;
      }, 0)
    ).toFixed(2)
  );

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
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
                    <ProductPrice>R$ {product.price}</ProductPrice>
                  </ProductDetails>
                  <Icon
                    name="delete-forever"
                    color="#7159c1"
                    size={24}
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(product.id))
                    }
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

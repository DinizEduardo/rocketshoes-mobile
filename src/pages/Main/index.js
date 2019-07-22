import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Text, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
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
  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sAmount, product) => {
      sAmount[product.id] = product.amount || 0;
      return sAmount;
    }, {})
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadPage() {
      const response = await api.get('/products');

      setProducts(response.data);
    }
    loadPage();
  }, []);

  function handleAddToCart(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <View>
        <FlatList
          horizontal
          data={products}
          extraData={amount}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Product>
              <ProdImage
                source={{
                  uri: item.image,
                }}
              />
              <>
                <ProdInfos>
                  <Text>{item.title}</Text>
                  <Price>R$ {item.price}</Price>
                </ProdInfos>
                <AddButton onPress={() => handleAddToCart(item.id)}>
                  <ItemAmount>
                    <Icon name="add-shopping-cart" size={20} color="#fff" />
                    <TextAmount>{amount[item.id] || 0}</TextAmount>
                  </ItemAmount>
                  <AddButtonText>ADICIONAR</AddButtonText>
                </AddButton>
              </>
            </Product>
          )}
        />
      </View>
    </Container>
  );
}

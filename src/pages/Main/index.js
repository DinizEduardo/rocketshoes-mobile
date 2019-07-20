import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, FlatList, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: '@cart/ADD',
      product,
    });
  };

  render() {
    const { products } = this.state;
    console.tron.log(products);
    return (
      <Container>
        <View>
          <FlatList
            horizontal
            data={products}
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
                    <Price>{item.price}</Price>
                  </ProdInfos>

                  <AddButton onPress={() => this.handleAddToCart(item)}>
                    <ItemAmount>
                      <Icon name="add-shopping-cart" size={20} color="#fff" />
                      <TextAmount>{item.amount || 0}</TextAmount>
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
}

export default connect()(Main);

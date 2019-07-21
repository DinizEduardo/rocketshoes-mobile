import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  }

  handleAddToCart = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <View>
          <FlatList
            horizontal
            data={products}
            extraData={this.props}
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
                  <AddButton onPress={() => this.handleAddToCart(item)}>
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount || 0;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

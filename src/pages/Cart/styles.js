import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 20px;
  height: 100%;
  background: #191920;
`;

export const CartContainer = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 40px;
`;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProdImage = styled.Image`
  width: 64px;
  height: 64px;
`;

export const ProductDetails = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const ProductName = styled.Text`
  font-size: 15px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  font-size: 15px;
`;

export const ProductAmount = styled.View`
  margin-top: 10px;
  height: 30px;
  background: #eee;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputAmount = styled.TextInput.attrs({
  editable: false,
})`
  color: #333;
  height: 25px;
  font-size: 14px;
  background: #fff;
  width: 50px;
  border-radius: 4px;
  padding: 0 7px;
  margin: 0 5px;
  border: 1px solid #ddd;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  margin-right: 10px;
`;

export const TotalCart = styled.View`
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const TotalText = styled.Text`
  font-size: 14px;
  color: #aaa;
  font-weight: bold;
`;

export const TotalCartPrice = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const FinishButton = styled.TouchableOpacity`
  margin-top: 20px;
  border-radius: 4px;
  height: 30px;
  background: #7159c1;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FinishText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

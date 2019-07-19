import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  padding: 40px;
  height: 100%;
  background: #191920;
`;

export const ProdImage = styled.Image`
  height: 150px;
  width: 150px;
`;

export const Product = styled.View`
  height: 305px;
  background: #fff;
  width: 200px;
  align-items: center;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 10px;
`;

export const ProdInfos = styled.View`
  margin: 20px 0;
`;

export const AddButton = styled(RectButton)`
  border-radius: 4px;
  height: 30px;
  margin-bottom: 30px;
  flex-direction: row;
  background: #7159c1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AddButtonText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
  padding-right: 25px;
`;

export const ItemAmount = styled.View`
  flex-direction: row;
  padding: 0px 10px;
  justify-content: center;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
  height: 30px;
  border-radius: 4px;
`;

export const TextAmount = styled.Text`
  margin-left: 10px;
  color: #fff;
`;

export const Price = styled.Text`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
`;

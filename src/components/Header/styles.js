import styled from 'styled-components/native';

import img from '../../assets/logo.png';

export const Container = styled.View`
  background: #191920;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: img,
  resizeMode: 'cover',
})`
  width: 195px;
  height: 25px;
`;

export const Cart = styled.View``;

export const Items = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;

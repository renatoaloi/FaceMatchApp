import styled from 'styled-components/native';
import { Card as MuiCard } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { default as LContainer } from '../../layouts/Dashboard';

export const Container = styled(LContainer)`
`;

export const Card = styled(MuiCard)`
  border-radius: 8px;
`;

export const CardCover = styled(MuiCard.Cover)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 50%;
  height: 50%;
`;

export const View = styled.View`
  flex: 0.55;
  background-color: gray;
  justify-content: center;
  align-items: center;
`;
import styled from 'styled-components/native';
import { Card as MuiCard } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';
import { default as LContainer } from '../../layouts/Dashboard';

//export const Container = styled(LContainer)`
//`;

export const Card = styled(MuiCard)`
  border-radius: 8px;
`;

export const Container = styled.View`
    //margin-top: 10px;
    flex-direction: row;
    width: 100%;
`;
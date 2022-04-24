import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ImageBackground, Root } from '../../styles/Native';

export const Body = styled.View<{ backgroundColor?: string }>`
  flex: 1;
  overflow: hidden;
  margin-top: ${RFValue(-15)}px;
  border-top-left-radius: ${RFValue(15)}px;
  border-top-right-radius: ${RFValue(15)}px;
  background-color: gray;
`;

export const Background = styled(ImageBackground)`
  flex: 0.165;
`;

export const BackgroundColor = styled.View`
  height: 100%;
  background-color: rgba(128, 0, 192, 0.9);
`;

export { Root };

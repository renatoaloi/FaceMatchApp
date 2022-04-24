import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RFValue } from 'react-native-responsive-fontsize';
import { PropriedadeRural } from '../../assets/imgs';

export const ScrollView = styled.ScrollView.attrs(props => ({
  contentContainerStyle: { flexGrow: 1 },
}))``;

export const ImageBackground = styled.ImageBackground.attrs(props => ({
  resizeMode: 'cover',
  source: PropriedadeRural,
  blurRadius: 8,
}))``;

export const Root = styled(SafeAreaView)`
  flex: 1;
`;

export const Line = styled.View.attrs((props: { pl: number; pr: number }) => ({
  pl: RFValue(Number(props.pl) || 0),
  pr: RFValue(Number(props.pr) || 0),
})) <{ pl: number; pr: number }>`
  flex: 1;
  background-color: #e9e9e9;
  height: ${RFValue(1)}px;
  padding-left: ${props => props.pl}px;
  padding-right: ${props => props.pr}px;
`;

export const LineWrap = styled.View.attrs(props => ({
  children: (
    <React.Fragment>
      <Line pl={10} />
      {props.children}
      <Line pr={10} />
    </React.Fragment>
  ),
}))`
  flex-direction: row;
  align-items: center;
`;

type GroupProp = { mt?: number; mb?: number };
export const Group = styled.View.attrs((props: GroupProp) => ({
  mt: props.mt || 0,
  mb: props.mb || 20,
})) <GroupProp>`
  margin-top: ${({ mt }) => RFValue(mt)}px;
  margin-bottom: ${({ mb }) => RFValue(mb)}px;
`;

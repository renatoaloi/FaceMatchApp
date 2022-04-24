import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { Appbar, Badge as MuiBadge } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    menuContent: { borderRadius: 10 },
});

export const Notification = styled.View``;

export const Badge = styled(MuiBadge)`
  position: absolute;
  top: ${RFValue(10)}px;
  right: ${RFValue(8)}px;
  background-color: ${props => props.theme.colors.primary};
`;

export const TopBar = styled(Appbar.Header)`
  elevation: 0;
  background-color: transparent;
`;

import React from 'react';
import styled from 'styled-components/native';
import { Snackbar } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

export type Type = 'error' | 'warning' | 'info' | 'success';

type WrapProp = React.ComponentProps<typeof Snackbar> & {
    type: Type;
};

export const Wrap = styled(Snackbar).attrs(props => ({
    theme: { colors: { ...props.theme.colors, accent: 'white' } },
    wrapperStyle: {
        top: RFValue(24),
    },
})) <WrapProp>`
  background-color: ${({ type, theme }) => theme.colors[type]};
`;

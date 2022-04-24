import React from 'react';
import { ViewStyle, StyleProp } from 'react-native';
import Header, { HeaderProps } from '../../components/Header';
import { Root, Body, Background, BackgroundColor } from './styles';

interface ContainerProps extends HeaderProps {
    style?: StyleProp<ViewStyle>;
}

const Container: React.FC<ContainerProps> = ({ children, style, ...props }) => {
    return (
        <React.Fragment>
            <Background>
                <BackgroundColor>
                    <Root>
                        <Header title={'Dashboard'} {...props} />
                    </Root>
                </BackgroundColor>
            </Background>
            <Body style={style}>{children}</Body>
        </React.Fragment>
    );
};

export default Container;

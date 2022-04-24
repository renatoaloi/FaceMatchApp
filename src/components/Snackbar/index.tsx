import React from 'react';
import { Wrap, Type } from './styles';

interface SnackbarProps {
    type: Type;
    message: string;
    visible: boolean;
    onDismiss?: () => void;
}

const Snackbar = ({
    type,
    message,
    visible,
    onDismiss = () => { },
}: SnackbarProps) => {
    return (
        <Wrap
            type={type}
            visible={visible}
            onDismiss={onDismiss}
            action={{
                label: 'Ok',
                onPress: () => onDismiss(),
            }}>
            {message}
        </Wrap>
    );
};

export default Snackbar;

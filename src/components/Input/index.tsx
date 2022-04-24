import React from 'react'
import { Text, TextInput, View as NativeView } from 'react-native';

const Input = ({ label, ...inputProps }) => (
    <NativeView>
        <Text style={{ color: 'rgba(51, 51, 51, 0.56)' }}>{label}</Text>
        <TextInput
            style={{ color: 'rgba(51, 51, 51, 0.56)' }}
            {...inputProps}
        />
    </NativeView>
);

export default Input;
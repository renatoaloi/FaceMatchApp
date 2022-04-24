import React from 'react'
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import theme from '../../core/theme';

const FacePicker = ({ faces, selectedFace, onChange }) => {
    return (
        <>
            <Text style={{ color: 'rgba(51, 51, 51, 0.56)' }}>Selecione a Pessoa</Text>
            <Picker
                prompt="Selecione"
                selectedValue={selectedFace}
                onValueChange={onChange}
                style={{ color: 'rgba(51, 51, 51, 0.56)' }}
                dropdownIconColor='rgba(51, 51, 51, 0.56)'
            >
                {faces.map(f => <Picker.Item
                    label={f.name}
                    value={f.personId}
                    key={f.personId}
                />)}
            </Picker>
        </>
    );
};

export default FacePicker;
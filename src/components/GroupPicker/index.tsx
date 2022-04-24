import React from 'react'
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const GroupPicker = ({ groups, selectedGroup, onChange, onFocus = () => { } }) => {
    return (
        <>
            <Text style={{ color: 'rgba(51, 51, 51, 0.56)' }}>Grupo de pessoas</Text>
            <Picker
                prompt="Grupo de Pessoas"
                selectedValue={selectedGroup}
                onValueChange={onChange}
                style={{ color: 'rgba(51, 51, 51, 0.56)' }}
                dropdownIconColor='rgba(51, 51, 51, 0.56)'
                onFocus={onFocus}
            >
                {groups.map(group => <Picker.Item label={group.description} value={group.personGroupId} key={group.personGroupId} />)}
            </Picker>
        </>
    );
};

export default GroupPicker;
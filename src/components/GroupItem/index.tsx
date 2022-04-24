import React from 'react'
import { IconButton, List } from 'react-native-paper';
import theme from '../../core/theme';
import { Container } from './styles';

const GroupItem = (props) => {
    const { item, onEdit, onDelete } = props;
    return (
        <Container key={item.personGroupId}>
            <List.Item
                title={item.description}
                description={item.personGroupId}
                left={props => <List.Icon {...props} icon="group" />}
                style={{ flex: 10 }}
                descriptionStyle={{ fontSize: 10 }}
            />
            <IconButton
                icon="edit"
                color={theme.colors.primary}
                size={20}
                onPress={() => onEdit(item.personGroupId)}
                style={{ flex: 1, marginTop: 20 }}
            />
            <IconButton
                icon="delete"
                color={theme.colors.error}
                size={20}
                onPress={() => onDelete(item.personGroupId)}
                style={{ flex: 1, marginTop: 20 }}
            />
        </Container>
    );
};

export default GroupItem;
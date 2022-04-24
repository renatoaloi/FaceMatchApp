import React from 'react'
import { Button, IconButton, List } from 'react-native-paper';
import theme from '../../core/theme';
import { Container } from './styles';

const FaceItem = (props) => {
    const { item, onButtonPress } = props;
    if (item.personFacesIds.length > 0) {
        return (
            <Container key={item.personId}>
                <List.Item
                    title={item.name}
                    description={`Faces: ${item.personFacesIds.length}`}
                    left={props => <List.Icon {...props} icon="face" />}
                    style={{ flex: 1 }}
                    descriptionStyle={{ fontSize: 10 }}
                />
                <Button
                    mode="outlined"
                    compact
                    style={{ marginTop: 15, paddingTop: 10 }}
                    theme={theme}
                    onPress={() => onButtonPress(item.personId)}
                >
                    Ver faces
                </Button>
            </Container>
        );
    }
    return null;
};

export default FaceItem;
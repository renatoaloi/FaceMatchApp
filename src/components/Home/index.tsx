import React from 'react'
import { Text } from 'react-native'
import { Button } from 'react-native-paper';
import { FaceMatch } from '../../assets/imgs/';
import { Container, Card, CardCover, View } from './styles';

export const HomePage = ({ navigation }) => {
    return (
        <React.Fragment>
            <Card>
                <CardCover source={FaceMatch} />
                <Card.Title
                    title="Biometria facial"
                    subtitle="Tire uma selfie e seja reconhecido pelo FaceMatch!"
                />
                <Card.Content>

                    <Button icon="face" mode="contained" onPress={() => navigation.navigate('Recog')}>Identificar Pessoa</Button>
                </Card.Content>
            </Card>
        </React.Fragment>
    )
}




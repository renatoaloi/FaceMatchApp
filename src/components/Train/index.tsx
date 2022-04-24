import React from 'react'
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Card } from './styles';
import GroupPicker from '../GroupPicker';
import { getGroups } from '../../core/services/PersonGroup';
import { trainGroup } from '../../core/services/Train';

export const TrainPage = () => {

    const [loading, setLoading] = React.useState(true);
    const [groups, setGroups] = React.useState([]);
    const [selectedGroup, setSelectedGroup] = React.useState("");

    React.useEffect(() => {
        getGroups().then(items => setGroups(items)).finally(() => setLoading(false));
    }, []);

    const train = () => {
        setLoading(true);
        trainGroup(selectedGroup).then((data) => {
            if (data === 200) {
                Alert.alert("Treinamento feito com sucesso!");
            }
            else {
                Alert.alert("ERRO no Treinamento! Tente novamente...");
            }
        }).finally(() => setLoading(false));
    }

    return (
        <>
            <React.Fragment>
                <Card>
                    <Card.Title
                        title="Treinar Grupo de Pessoas"
                        subtitle="Treinamento da rede neural para reconhecer pessoas em um grupo de pessoas!"
                    />
                    <Card.Content>
                        <GroupPicker
                            groups={[{ description: "Selecione...", peopleIds: null, personGroupId: "" }, ...groups]}
                            onChange={(_itemValue: any) => setSelectedGroup(_itemValue)}
                            selectedGroup={selectedGroup}
                        />
                        <Button
                            icon="settings"
                            mode="contained"
                            onPress={() => train()}
                            disabled={loading || selectedGroup === ""}
                        >
                            Treinar Grupo de Pessoas
                        </Button>
                    </Card.Content>
                </Card>
            </React.Fragment>
        </>
    )
}




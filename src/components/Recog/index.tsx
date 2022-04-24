import React from 'react'
import { Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { Card, Container } from './styles';
import GroupPicker from '../GroupPicker';
import { getGroups } from '../../core/services/PersonGroup';
import { identifyRecog } from '../../core/services/Recog';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IconButton, List } from 'react-native-paper';

export const RecogPage = () => {

    const [loading, setLoading] = React.useState(true);
    const [groups, setGroups] = React.useState([]);
    const [selectedGroup, setSelectedGroup] = React.useState("");
    const [found, setFound] = React.useState([]);
    const [personPhoto, setPersonPhoto] = React.useState("");

    const loadGroups = () => {
        getGroups().then(items => setGroups(items)).finally(() => setLoading(false));
    };

    React.useEffect(() => {
        loadGroups();
    }, []);

    const recog = () => {
        setLoading(true);
        const payload = {
            GrupoId: selectedGroup,
            PessoaFoto: personPhoto
        }
        //console.log(payload);
        identifyRecog(payload).then((data) => {
            setFound(data);
        }).finally(() => setLoading(false));
    }

    const callback = (camera) => {
        if (!camera.didCancel) {
            if (camera?.assets.length > 0) {
                setPersonPhoto(camera.assets[0].base64);
                recog();
            }
        }
        //  {"assets": [{"base64": "", "fileName": "rn_image_picker_lib_temp_7b2f3d54-ec64-4992-836d-f9a377fecff5.jpg", "fileSize": 29809, "height": 479, "type": "image/jpeg", "uri": "file:///data/user/0/com.facematchapp/cache/rn_image_picker_lib_temp_7b2f3d54-ec64-4992-836d-f9a377fecff5.jpg", "width": 640}]}
    }

    const callCamera = async () => {
        await launchCamera({
            mediaType: 'photo',
            cameraType: 'front',
            includeBase64: true,
            saveToPhotos: false,
            maxWidth: 640,
            maxHeight: 480,
            quality: 0.8
        }, callback);
    }

    return (
        <>
            <React.Fragment>
                <Card>
                    <Card.Title
                        title="Identificar Pessoas"
                        subtitle="Tire uma foto e indentifique-se!"
                    />
                    <Card.Content>
                        <GroupPicker
                            groups={[{ description: "Selecione...", peopleIds: null, personGroupId: "" }, ...groups]}
                            onChange={(_itemValue: any) => setSelectedGroup(_itemValue)}
                            selectedGroup={selectedGroup}
                            onFocus={() => loadGroups()}
                        />
                        <Button
                            icon="credit-card"
                            mode="contained"
                            onPress={() => callCamera()}
                            disabled={loading || selectedGroup === ""}
                        >
                            Identificar Pessoa
                        </Button>
                    </Card.Content>
                    <Card.Content>
                        {found.map(f => (
                            <Container key={f.personId}>
                                <List.Item
                                    title={f.name}
                                    description={`Precisão: ${f.acuracy}%`}
                                    left={props => <List.Icon {...props} icon="face" />}
                                    style={{ flex: 10 }}
                                    descriptionStyle={{ fontSize: 10 }}
                                />
                            </Container>
                        ))}
                    </Card.Content>
                </Card>
            </React.Fragment>
        </>
    )
}




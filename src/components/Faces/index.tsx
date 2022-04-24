import React from 'react'
import { Text, View as NativeView, Alert, Image } from 'react-native';
import { ScrollView } from 'react-native';
import { ActivityIndicator, Button, Dialog, Modal, Portal } from 'react-native-paper';
import theme from '../../core/theme';
import { Card, ContainerLoading, View } from './styles';
import { useForm } from "react-hook-form";
import { getFaces, saveFace } from '../../core/services/Face';
import FaceItem from '../FaceItem';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import FacePicker from '../FacePicker';

export const FacesPage = () => {

    const [visible, setVisible] = React.useState(false);
    const [visibleUpdate, setVisibleUpdate] = React.useState(false);
    const [visibleDelete, setVisibleDelete] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const showModalUpdate = () => setVisibleUpdate(true);
    const hideModalUpdate = () => setVisibleUpdate(false);
    const showModalDelete = () => setVisibleDelete(true);
    const hideModalDelete = () => setVisibleDelete(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 5, color: 'black' };

    const [loading, setLoading] = React.useState(true);
    const [faces, setFaces] = React.useState([]);
    // const [groups, setGroups] = React.useState([]);
    // const [personData, setPersonData] = React.useState(null);
    // const [personId, setPersonId] = React.useState(null);
    const [facesUrl, setFacesUrl] = React.useState([]);
    const [personFace, setPersonFace] = React.useState("");
    const [personPhoto, setPersonPhoto] = React.useState("");

    const { register, setValue, handleSubmit, getValues } = useForm()

    const onButtonPress = (data) => {
        const person = faces.find(f => f.personId === data);
        if (person) {
            //console.log('personFacesIds', person.personFacesIds);
            setFacesUrl(person.personFacesIds);
            showModalUpdate();
        }
    };

    const onSubmit = async (data) => {
        setLoading(true);
        hideModal();
        await saveFace(data);
        getFaces().then(faces => setFaces(faces)).finally(() => setLoading(false));
    };
    const onEditSubmit = async (data) => {
        // setLoading(true);
        // hideModalUpdate();
        // const person = await updatePerson(personId, data);
        // setPersonData(person);
        // getItems().then(items => setItems(items)).finally(() => setLoading(false));
    }
    const onDeleteSubmit = async (data) => {
        // setLoading(true);
        // hideModalDelete();
        // await deletePerson(personId);
        // getItems().then(items => setItems(items)).finally(() => setLoading(false));
    };

    const onNew = () => {
        // getGroups()
        //     .then(groups => setGroups(groups))
        //     .finally(() => {
        //         setLoading(false);
        //         showModal();
        //     });
        //callCamera();
        //console.log(faces);
        showModal();
    };

    const onEdit = async (data) => {
        // setLoading(true);
        // const groups = await getGroups();
        // setGroups(groups);
        // setPersonId(data);
        // const person = await getItemById(data);
        // setPersonData(person);
        // setValue('NomePessoa', person?.name);
        // setValue('GrupoPessoa', person?.group.personGroupId);
        // setPersonName(person?.name);
        // setPersonGroup(person?.group.personGroupId);
        // setLoading(false);
        // showModalUpdate();
    };

    const onDelete = async (data) => {
        // setLoading(true);
        // setPersonId(data);
        // const person = await getItemById(data);
        // setPersonData(person);
        // setValue('NomePessoa', person?.name);
        // setPersonName(person?.name);
        // setLoading(false);
        // showModalDelete();
    };

    React.useEffect(() => {

        getFaces().then(faces => setFaces(faces)).finally(() => setLoading(false));

    }, []);

    const callback = (camera) => {
        console.log("camera callback1", camera);
        if (!camera.didCancel) {
            if (camera?.assets.length > 0) {
                setPersonPhoto(camera.assets[0].base64);
                setValue('PessoaFoto', camera.assets[0].base64);
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

    React.useEffect(() => {
        register('PessoaId');
        register('PessoaFoto');
    }, [register]);

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <NativeView style={{ backgroundColor: 'white' }}>
                        <FacePicker
                            faces={[{ name: "Selecione...", personFacesIds: [], personId: "" }, ...faces]}
                            onChange={(_itemValue: any) => {
                                console.log(_itemValue);
                                setPersonFace(_itemValue);
                                setValue('PessoaId', _itemValue);
                            }}
                            selectedFace={personFace}
                        />
                        <Button mode="contained" style={{ marginBottom: 10 }} onPress={() => callCamera()}>Tirar Foto</Button>
                        <Button mode="outlined" disabled={personFace === "" || personPhoto === ""} onPress={handleSubmit(onSubmit)}>Criar</Button>
                    </NativeView>
                </Modal>
                <Dialog visible={visibleUpdate} onDismiss={hideModalUpdate} contentContainerStyle={containerStyle}>
                    <Dialog.ScrollArea>
                        <ScrollView >
                            {facesUrl.map(url => (
                                <Image
                                    key={url.personFaceId}
                                    style={{
                                        margin: 10,
                                        width: 200,
                                        height: 200,
                                        resizeMode: 'contain'
                                    }}
                                    source={{ uri: url.faceUrl }}
                                />
                            ))}
                            <Button mode="outlined" onPress={hideModalUpdate}>Fechar</Button>
                        </ScrollView>
                    </Dialog.ScrollArea>
                </Dialog>
                {/* <Modal visible={visibleDelete} onDismiss={hideModalDelete} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <Text>Nome da Pessoa: {personData?.name}</Text>
                        <Text color={theme.colors.error}>Confirma exclusão do registro?</Text>
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onDeleteSubmit)} color={theme.colors.error}>Excluir</Button>
                    </NativeView>
                </Modal> */}
            </Portal>
            <React.Fragment>
                <Card>
                    <Card.Title
                        title="Faces"
                        subtitle="Gerenciar faces das pessoas cadastradas!"
                    />
                    <Card.Content>
                        <Button
                            icon="add"
                            mode="contained"
                            onPress={onNew}
                            disabled={loading}
                        >
                            Nova Face
                        </Button>
                    </Card.Content>
                    <ScrollView
                        style={{ marginBottom: 110 }}
                    >
                        {/* refreshControl={<RefreshControl
                            refreshing={loading}
                            onRefresh={getItems}
                        />} */}
                        <Card.Content>
                            {loading && (
                                <ContainerLoading>
                                    <ActivityIndicator
                                        style={{ flex: 1 }}
                                        animating={true}
                                        color={theme.colors.primary}
                                    />
                                </ContainerLoading>
                            )}
                            {!loading && faces.map(d => (
                                <FaceItem
                                    key={d.personId}
                                    item={d}
                                    onButtonPress={(data) => onButtonPress(data)}
                                />
                            ))}
                        </Card.Content>
                    </ScrollView>
                </Card>
            </React.Fragment>
        </>
    )
}




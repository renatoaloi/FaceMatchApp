import React from 'react'
import { Text, View as NativeView } from 'react-native';
import { ScrollView } from 'react-native';
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper';
import theme from '../../core/theme';
import { Card, ContainerLoading } from './styles';
import { useForm } from "react-hook-form";
import PeopleItem from '../PeopleItem';
import { getGroups } from '../../core/services/PersonGroup';
import { getItemById, getItems, savePerson, updatePerson, deletePerson } from '../../core/services/Person';
import GroupPicker from '../GroupPicker';
import Input from '../Input';

export const PeoplePage = () => {

    const [visible, setVisible] = React.useState(false);
    const [visibleUpdate, setVisibleUpdate] = React.useState(false);
    const [visibleDelete, setVisibleDelete] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const showModalUpdate = () => setVisibleUpdate(true);
    const hideModalUpdate = () => setVisibleUpdate(false);
    const showModalDelete = () => setVisibleDelete(true);
    const hideModalDelete = () => setVisibleDelete(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, margin: 20, borderRadius: 5 };

    const [loading, setLoading] = React.useState(true);
    const [items, setItems] = React.useState([]);
    const [groups, setGroups] = React.useState([]);
    const [personData, setPersonData] = React.useState(null);
    const [personId, setPersonId] = React.useState(null);
    const [personName, setPersonName] = React.useState(null);
    const [personGroup, setPersonGroup] = React.useState('');

    const { register, setValue, handleSubmit, getValues } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        hideModal();
        const person = await savePerson(data);
        setPersonData(person);
        getItems().then(items => setItems(items)).finally(() => setLoading(false));
    };
    const onEditSubmit = async (data) => {
        setLoading(true);
        hideModalUpdate();
        const person = await updatePerson(personId, data);
        setPersonData(person);
        getItems().then(items => setItems(items)).finally(() => setLoading(false));
    }
    const onDeleteSubmit = async (data) => {
        setLoading(true);
        hideModalDelete();
        await deletePerson(personId);
        getItems().then(items => setItems(items)).finally(() => setLoading(false));
    };

    const onNew = () => {
        getGroups()
            .then(groups => setGroups(groups))
            .finally(() => {
                setLoading(false);
                showModal();
            });
    };

    const onEdit = async (data) => {
        setLoading(true);
        const groups = await getGroups();
        setGroups(groups);
        setPersonId(data);
        const person = await getItemById(data);
        setPersonData(person);
        setValue('NomePessoa', person?.name);
        setValue('GrupoPessoa', person?.group.personGroupId);
        setPersonName(person?.name);
        setPersonGroup(person?.group.personGroupId);
        setLoading(false);
        showModalUpdate();
    };

    const onDelete = async (data) => {
        setLoading(true);
        setPersonId(data);
        const person = await getItemById(data);
        setPersonData(person);
        setValue('NomePessoa', person?.name);
        setPersonName(person?.name);
        setLoading(false);
        showModalDelete();
    };

    React.useEffect(() => {
        getItems().then(items => setItems(items)).finally(() => setLoading(false));

    }, []);

    React.useEffect(() => {
        register('NomePessoa');
        register('GrupoPessoa');
    }, [register]);

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <GroupPicker
                            groups={groups}
                            onChange={(_itemValue: any) => {
                                console.log(_itemValue);
                                setPersonGroup(_itemValue);
                                setValue('GrupoPessoa', _itemValue);
                            }}
                            selectedGroup={personGroup}
                        />
                        <Input
                            label="Nome da Pessoa"
                            placeholder="Digite o nome da pessoa"
                            onChangeText={text => setValue('NomePessoa', text)}
                        />
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onSubmit)}>Criar</Button>
                    </NativeView>
                </Modal>
                <Modal visible={visibleUpdate} onDismiss={hideModalUpdate} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <GroupPicker
                            groups={groups}
                            onChange={(_itemValue: any) => {
                                setPersonGroup(_itemValue);
                                setValue('GrupoPessoa', _itemValue);
                            }}
                            selectedGroup={personGroup}
                        />
                        <Input
                            label="Nome da Pessoa"
                            placeholder="Digite o nome da pessoa"
                            onChangeText={text => { setValue('NomePessoa', text); setPersonName(text); }}
                            value={personName}
                        />
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onEditSubmit)}>Atualizar</Button>
                    </NativeView>
                </Modal>
                <Modal visible={visibleDelete} onDismiss={hideModalDelete} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <Text>Nome da Pessoa: {personData?.name}</Text>
                        <Text color={theme.colors.error}>Confirma exclusão do registro?</Text>
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onDeleteSubmit)} color={theme.colors.error}>Excluir</Button>
                    </NativeView>
                </Modal>
            </Portal>
            <React.Fragment>
                <Card>
                    <Card.Title
                        title="Pessoas"
                        subtitle="Gerenciar pessoas!"
                    />
                    <Card.Content>
                        <Button
                            icon="add"
                            mode="contained"
                            onPress={onNew}
                            disabled={loading}
                        >
                            Nova Pessoa
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
                            {!loading && items.map(d => (
                                <PeopleItem
                                    key={d.personId}
                                    item={d}
                                    onEdit={(data) => onEdit(data)}
                                    onDelete={(data) => onDelete(data)}
                                />
                            ))}
                        </Card.Content>
                    </ScrollView>
                </Card>
            </React.Fragment>
        </>
    )
}




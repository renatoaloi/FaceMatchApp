import React from 'react'
import { Text, View as NativeView } from 'react-native';
import { ScrollView } from 'react-native';
import { ActivityIndicator, Button, Modal, Portal } from 'react-native-paper';
import theme from '../../core/theme';
import { Card, ContainerLoading } from './styles';
import { useForm } from "react-hook-form";
import { getGroups, getGroupById, saveGroups, updateGroup, deleteGroup } from '../../core/services/PersonGroup';
import GroupItem from '../GroupItem';
import Input from '../Input';

export const GroupsPage = () => {

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
    const [data, setData] = React.useState([]);
    const [groupData, setGroupData] = React.useState(null);
    const [groupId, setGroupId] = React.useState(null);
    const [groupName, setGroupName] = React.useState(null);

    const { register, setValue, handleSubmit, getValues } = useForm()

    const onSubmit = async (data) => {
        setLoading(true);
        hideModal();
        const groupsData = await saveGroups(data);
        setData(groupsData);
        getGroups().then(groups => setData(groups)).finally(() => setLoading(false));
    };
    const onEditSubmit = async (data) => {
        setLoading(true);
        hideModalUpdate();
        const groupsData = await updateGroup(groupId, data);
        setData(groupsData);
        getGroups().then(groups => setData(groups)).finally(() => setLoading(false));
    }
    const onDeleteSubmit = async (data) => {
        setLoading(true);
        hideModalDelete();
        await deleteGroup(groupId);
        getGroups().then(groups => setData(groups)).finally(() => setLoading(false));
    }

    const onEdit = async (data) => {
        setLoading(true);
        setGroupId(data);
        const groupData = await getGroupById(data);
        setGroupData(groupData);
        setValue('NomeGrupo', groupData?.name);
        setGroupName(groupData?.name);
        setLoading(false);
        showModalUpdate();
    }

    const onDelete = async (data) => {
        setLoading(true);
        setGroupId(data);
        const groupData = await getGroupById(data);
        setGroupData(groupData);
        setValue('NomeGrupo', groupData?.name);
        setGroupName(groupData?.name);
        setLoading(false);
        showModalDelete();
    }

    React.useEffect(() => {
        getGroups().then(groups => setData(groups)).finally(() => setLoading(false));
    }, []);

    React.useEffect(() => {
        register('NomeGrupo')
    }, [register]);

    return (
        <>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <Input
                            label="Nome do Grupo"
                            placeholder="Digite o nome do grupo"
                            onChangeText={text => setValue('NomeGrupo', text)}
                        />
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onSubmit)}>Criar</Button>
                    </NativeView>
                </Modal>
                <Modal visible={visibleUpdate} onDismiss={hideModalUpdate} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <Input
                            label="Nome do Grupo"
                            placeholder="Digite o nome do grupo"
                            onChangeText={text => { setValue('NomeGrupo', text); setGroupName(text); }}
                            value={groupName}
                        />
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onEditSubmit)}>Atualizar</Button>
                    </NativeView>
                </Modal>
                <Modal visible={visibleDelete} onDismiss={hideModalDelete} contentContainerStyle={containerStyle}>
                    <NativeView>
                        <Text>Nome do Grupo: {groupData?.name}</Text>
                        <Text color={theme.colors.error}>Confirma exclusão do registro?</Text>
                        <Button mode="outlined" title="Submit" onPress={handleSubmit(onDeleteSubmit)} color={theme.colors.error}>Excluir</Button>
                    </NativeView>
                </Modal>
            </Portal>
            <React.Fragment>
                <Card>
                    <Card.Title
                        title="Grupos de Pessoas"
                        subtitle="Gerenciar grupos de pessoas!"
                    />
                    <Card.Content>
                        <Button
                            icon="add"
                            mode="contained"
                            onPress={showModal}
                            disabled={loading}
                        >
                            Novo Grupo de Pessoas
                        </Button>
                    </Card.Content>
                    <ScrollView
                        style={{ marginBottom: 110 }}
                    >
                        {/* refreshControl={<RefreshControl
                            refreshing={loading}
                            onRefresh={getGroups}
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
                            {!loading && data.map(d => (
                                <GroupItem
                                    key={d.personGroupId}
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




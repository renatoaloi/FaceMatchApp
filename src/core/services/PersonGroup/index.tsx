import uuid from 'react-native-uuid';

export const getGroups = async () => {
    var data = null;
    try {
        const response = await fetch('https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonGroup');
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const getGroupById = async (id) => {
    var data = null;
    try {
        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonGroup/${id}`;
        const response = await fetch(url);
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const saveGroups = async (_data) => {
    var data = null;
    try {
        const response = await fetch('https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonGroup', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "personGroupId": uuid.v4().toString(),
                "description": _data.NomeGrupo
            })
        });
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const updateGroup = async (id, _data) => {
    var data = null;
    try {
        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonGroup/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "personGroupId": id,
                "description": _data.NomeGrupo
            })
        });
        console.log('status update', response.status);
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const deleteGroup = async (id) => {
    var data = null;
    try {

        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonGroup/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        console.log('status delete', response.status);
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}


export const getItems = async () => {
    var data = null;
    try {
        const response = await fetch('https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Person');
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const getItemById = async (id) => {
    var data = null;
    try {
        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Person/${id}`;
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

export const savePerson = async (_data) => {
    var data = null;
    try {
        var url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Person/${_data.GrupoPessoa}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": _data.NomePessoa
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

export const updatePerson = async (id, _data) => {
    var data = null;
    try {
        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Person/${id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Name": _data.NomePessoa
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

export const deletePerson = async (id) => {
    var data = null;
    try {

        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Person/${id}`;
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
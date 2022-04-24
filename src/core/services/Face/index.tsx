
export const getFaces = async () => {
    var data = null;
    try {
        const response = await fetch('https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonFace');
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}

export const saveFace = async (_data) => {
    var data = null;
    try {
        var url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/PersonFace/${_data.PessoaId}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "imageBase64": _data.PessoaFoto
            })
        });
        console.log(response.status);
        const json = await response.json();
        data = json.data;
        console.log(json.data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}
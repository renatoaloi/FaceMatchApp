export const identifyRecog = async (_data) => {
    var data = null;
    try {
        var url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Identify/${_data.GrupoId}`;
        console.log(url);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                imageBase64: _data.PessoaFoto
            })
        });
        console.log(response.status);
        if (response.status === 500) {
            data = [{
                personId: "erro",
                name: "erro",
                accuracy: 0.0
            }];
        }
        else {
            const json = await response.json();
            data = json.data;
            console.log(json.data);
        }
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}
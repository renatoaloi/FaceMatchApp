
export const trainGroup = async (id) => {
    var data = null;
    try {
        const url = `https://webapp307428.ip-104-237-128-122.cloudezapp.io/api/Face/Train/${id}`;
        const response = await fetch(url);
        //const json = await response.json();
        data = response.status; // json.data;
        console.log(data);
    } catch (error) {
        console.error(error);
    } finally {
        return data;
    }
}
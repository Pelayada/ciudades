
export const getPoliticalInfo = async( code ) => {
    if (code) {
        const url = `https://api.zippopotam.us/es/${ code }`;
        let error;
        try {
            const resp = await fetch( url );
            if (resp.ok) {
                const data = await resp.json();
                return data;
            } else {
                return error = 'Hubo un error al obtener la información.'
            }
        } catch (er) {
                return error = 'No se pudo hacer la solicitud para obtener la información.'

        }
    }
    return;
}

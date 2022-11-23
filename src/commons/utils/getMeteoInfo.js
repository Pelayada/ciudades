
export const getMeteoInfo = async( info ) => {
    if (info) {
        const { longitude, latitude } = info;
        const temp = 'temperature_2m';
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${ longitude }&hourly=${temp}`;
        let error;
        try {
            const resp = await fetch( url );
            if (resp.ok) {
                const { hourly } = await resp.json()
                return hourly;
            } else {
                return error = 'Hubo un error al obtener la información climática.'
            }
        } catch (er) {
                return error = 'No se pudo hacer la solicitud para obtener la información climática.'

        }
    }
    return;
}
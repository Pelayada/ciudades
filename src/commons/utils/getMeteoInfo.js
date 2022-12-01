
export const getMeteoInfo = async( info ) => {
    if (info) {
        const { longitude, latitude } = info;
        const temp = 'temperature_2m';
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${ longitude }&hourly=${temp}`;
        try {
            const resp = await fetch( url );
            if (resp.ok) {
                const { hourly } = await resp.json()
                return {
                    data: hourly
                };
            } else {
                return { 
                    error : {
                        code: "01", 
                        IdText:'Hubo un error al obtener la información climática.' 
                    } 
                }
            }
        } catch (er) {
            return { 
                error : {
                    code: "02", 
                    IdText:'No se pudo hacer la solicitud para obtener la información.' 
                } 
            }
        }
    }
    return;
}
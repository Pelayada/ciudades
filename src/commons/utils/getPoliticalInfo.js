
export const getPoliticalInfo = async( code ) => {
    if (code) {
        const url = `https://api.zippopotam.us/es/${ code }`;
        try {
            const resp = await fetch( url );
            if (resp.ok) {
                const data = await resp.json();
                return {
                    data : data,
                }
            } else {
                return { 
                    error : {
                        code: "01", 
                        IdText:'Hubo un error al obtener la información.' 
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

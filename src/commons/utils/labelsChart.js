
export const labelsChart = ( newInfo ) => {
    if( newInfo ) {
        const dataMeteo = newInfo.temperature_2m;
        const dataTime = newInfo.time.map((string) => string.substr(11,16));
    
        const time = dataMeteo.map((meteo, j) => {
            return `${dataTime[j]} (${parseInt(meteo)} ºC)`
        })

        return {
            dataMeteo,
            time
        }
    }
    return '';
}
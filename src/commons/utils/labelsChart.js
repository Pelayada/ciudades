
export const labelsChart = ( newInfo ) => {
    const dataMeteo = newInfo.temperature_2m;
    const dataTime = newInfo.time.map((string) => string.substr(11,16));

    const time = dataMeteo.map((meteo, j) => {
        if(meteo && dataTime[j]){
            return `${dataTime[j]} (ºC ${parseInt(meteo)} )`
        }
        return '';
    })

    return {
        dataMeteo,
        time
    }
}
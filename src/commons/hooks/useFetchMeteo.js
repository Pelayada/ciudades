
import { useEffect, useState } from 'react';
import { getMeteoInfo } from '../utils/getMeteoInfo';

export const useFetchMeteo = ( info ) => {

    const [chartTime, setChartTime] = useState([]);
    const [chartMeteo, setChartMeteo] = useState([]);
    
    const fetchMeteo = async () => {
        const newInfo = await getMeteoInfo( info );

        const dataMeteo = newInfo.temperature_2m;
        const dataTime = newInfo.time.map((string) => string.substr(11,16));
        
        let time = [];
        for (let i = 0; i < dataTime.length; i++) {
            for (let j = 0; j < dataMeteo.length; j++) {
                const result = `${dataTime[i]} (ºC ${parseInt(dataMeteo[j])} )`
                time.push(result);
                i++;
            }
        }

        // let newArray = [];

        // const newTime = dataTime.map((time, i) => {
        //     i++
        //     return dataMeteo.map((meteo, j) => {
        //         if(i === j) {
        //             j++
        //             return `${time} (ºC ${parseInt(meteo)} )`;
        //         }
        //         return
        //     })
        // })

        // console.log('newTime', newTime)

        setChartMeteo(dataMeteo);
        setChartTime(time)
    };

    useEffect(() => {
        fetchMeteo();
    }, [info]);
    
    return {
        chartTime,
        chartMeteo
    }
}
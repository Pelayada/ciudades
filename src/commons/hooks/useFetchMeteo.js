
import { useEffect, useState } from 'react';
import { getMeteoInfo } from '../utils/getMeteoInfo';
import { labelsChart  } from '../utils/labelsChart';

export const useFetchMeteo = ( info ) => {

    const [chartTime, setChartTime] = useState([]);
    const [chartMeteo, setChartMeteo] = useState([]);
    
    const fetchMeteo = async () => {
        const newInfo = await getMeteoInfo( info );
        const errorInput = document.getElementById('errorInput');
        if (newInfo) {
            if (typeof newInfo !== 'object') {
                return errorInput.innerHTML = newInfo;
            }
            const { dataMeteo, time } = labelsChart( newInfo );
            setChartMeteo(dataMeteo);
            setChartTime(time)
        }
    };

    useEffect(() => {
        fetchMeteo();
    }, [info]);
    
    return {
        chartTime,
        chartMeteo
    }
}
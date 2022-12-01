
import { useEffect, useState } from 'react';
import { useCityContext } from '../context/PlacesProvider';
import { useChangeText } from '../hooks/useChangeText';
import { getMeteoInfo } from '../utils/getMeteoInfo';
import { labelsChart  } from '../utils/labelsChart';

export const useFetchMeteo = ( info ) => {

    const { setError } = useCityContext();
    const errorFetchMeteo = useChangeText("errorFetchMeteo");

    const [chartTime, setChartTime] = useState([]);
    const [chartMeteo, setChartMeteo] = useState([]);
    
    const fetchMeteo = async () => {
        const newInfo = await getMeteoInfo( info );

        if ( newInfo && newInfo.data ) {
            const { dataMeteo, time } = labelsChart( newInfo.data );
            setChartMeteo(dataMeteo);
            setChartTime(time)
        } else if ( newInfo && newInfo.error ) {
            //Si el error es 01
            setError( errorFetchMeteo );
        } else {
            setError( '' );
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
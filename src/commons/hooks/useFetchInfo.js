
import { useState } from 'react';
import { getPoliticalInfo } from '../utils/getPoliticalInfo';

export const useFetchInfo = () => {

    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState( false );
    const [placeInfo, setPlaceInfo] = useState('');

    const getInfo = async ( placeRecord ) => {
        setIsLoading(true);
        const newInfo = await getPoliticalInfo( placeRecord );
        const errorInput = document.getElementById('errorInput');
        if (newInfo) {
            if (typeof newInfo !== 'object') {
                setIsLoading(false);
                return errorInput.innerHTML = newInfo;
            }
            const { places } = newInfo;
            if (!places) {
                setPlaceInfo( '' );
                setIsLoading(false);
                return errorInput.innerHTML = 'No existe el código postal.'
            }
            const [ firstPlace ] = places;
            setPlaceInfo( firstPlace );
            setInfo( newInfo );
        }
        errorInput.innerHTML = '';
        setIsLoading(false);
    }

    return {
        placeInfo,
        info,
        isLoading,
        getInfo
    }
}

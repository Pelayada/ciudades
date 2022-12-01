
import { useState } from 'react';
import { getPoliticalInfo } from '../utils/getPoliticalInfo';

export const useFetchInfo = () => {

    const [ info, setInfo ] = useState( '' );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ placeInfo, setPlaceInfo ] = useState( '' );
    const [ errorFetch, setErrorFetch ] = useState( '' );

    const getInfo = async ( placeRecord ) => {
        setIsLoading( true );
        const newInfo = await getPoliticalInfo( placeRecord );
        if ( newInfo && newInfo.data ) {
            const { places } = newInfo.data;
            const [ firstPlace ] = places;
            setPlaceInfo( firstPlace );
            setInfo( newInfo );
            setIsLoading( false );
            setErrorFetch( '' );
        } else if ( newInfo && newInfo.error ) {
            //Si el error es 01
            setPlaceInfo( '' );
            setIsLoading( false );
            setErrorFetch( newInfo.error.IdText );
        } else {
            setIsLoading( false );
            setErrorFetch( '' );
        }
    }

    return {
        placeInfo,
        info,
        isLoading,
        getInfo,
        errorFetch
    }
}

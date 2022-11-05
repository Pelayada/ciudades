
import { useEffect, useState } from 'react';
import { getPoliticalInfo } from '../utils/getPoliticalInfo';

export const useFetchInfo = ( code ) => {

    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState( true );

    const getInfo = async() => {
        const newInfo = await getPoliticalInfo( code );
        const { places } = newInfo;
        const [ placesFirst ] = places;
        setInfo(placesFirst);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getInfo();
    }, [code]);

    return {
        info,
        isLoading
    }
}
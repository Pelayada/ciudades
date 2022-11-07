
import { useEffect, useState, useContext } from 'react';
import { PlacesContext } from '../context/PlacesContext';
import { getPoliticalInfo } from '../utils/getPoliticalInfo';

export const useFetchInfo = ( code ) => {

    const { setPlacesArray } = useContext( PlacesContext );

    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState( true );
    const [recordPlaces, setRecordPlaces] = useState([]);

    const getPlaces = (newInfo) => {
        if ( recordPlaces.includes(code) ) return;
        setRecordPlaces([newInfo, ...recordPlaces]);
        setPlacesArray(recordPlaces);
        
        console.log('recordPlaces', recordPlaces)
    }

    const getInfo = async() => {
        setIsLoading(true);
        const newInfo = await getPoliticalInfo( code );
        const { places } = newInfo;
        if (!places) {
            return document.getElementById('errorInput').innerHTML = 'No existe el código postal.'
        }
        const [ placesFirst ] = places;
        setInfo(placesFirst);
        getPlaces(newInfo);
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
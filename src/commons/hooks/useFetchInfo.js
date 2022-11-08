
import { useEffect, useState, useContext } from 'react';
import { PlacesContext } from '../context/PlacesContext';
import { getPoliticalInfo } from '../utils/getPoliticalInfo';

export const useFetchInfo = ( code ) => {

    const { placesArray, setPlacesArray } = useContext( PlacesContext );

    const [info, setInfo] = useState('');
    const [isLoading, setIsLoading] = useState( false );

    const getPlaces = (newInfo) => {
        const findPlace = placesArray.find((place) => place['post code'] === newInfo['post code'])
        if (findPlace) return;
        setPlacesArray([newInfo, ...placesArray]);
    }

    const getInfo = async() => {
        const newInfo = await getPoliticalInfo( code );
        if (newInfo) {
            const { places } = newInfo;
            if (!places) {
                return document.getElementById('errorInput').innerHTML = 'No existe el código postal.'
            }
            const [ placesFirst ] = places;
            setInfo(placesFirst);
            getPlaces(newInfo);
        }
    }

    useEffect( () => {
        setIsLoading(true);
        getInfo();
        setIsLoading(false);
    }, [code]);

    return {
        info,
        isLoading
    }
}
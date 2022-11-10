
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
        const errorInput = document.getElementById('errorInput');
        if (newInfo) {
            const { places } = newInfo;
            if (!places) {
                setIsLoading(false);
                return errorInput.innerHTML = 'No existe el código postal.'
            }
            const [ placesFirst ] = places;
            setInfo(placesFirst);
            getPlaces(newInfo);
        }
        errorInput.innerHTML = '';
        setIsLoading(false);
    }

    useEffect( () => {
        setIsLoading(true);
        getInfo();
    }, [code]);

    return {
        info,
        isLoading
    }
}
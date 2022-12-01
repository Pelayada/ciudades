
import { useState, useEffect, useMemo, useContext} from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [ placesArray, setPlacesArray ] = useState([]);
    const [ placeRecord, setPlaceRecord ] = useState('');
    const [ language, setLanguage ] = useState('ES');
    const [ error, setError ] = useState('');

    const { 
        getInfo: getInfoFetch, 
        info: infoFetch, 
        isLoading, 
        placeInfo,
        errorFetch 
    } = useFetchInfo();

    useEffect(() => {
        getInfoFetch( placeRecord );
    }, [placeRecord])


    console.log('infoFetch', infoFetch)

    useEffect(() => {
        if ( infoFetch ) {
            const findPlace = placesArray.find(({ data }) => data['post code'] === infoFetch.data['post code'])
            if (findPlace) return;
            setPlacesArray([infoFetch, ...placesArray]);
        }
    }, [infoFetch])

    console.log('placesArray', placesArray)

    const value = useMemo(() => { 
        return { 
            placesArray, 
            setPlacesArray, 
            placeRecord, 
            setPlaceRecord,
            language,
            setLanguage,
            isLoading,
            placeInfo,
            error, 
            setError,
            errorFetch  
        }; 
    }, [placesArray, placeRecord, language, isLoading, placeInfo, error, errorFetch]);
   
    return (
        <PlacesContext.Provider value={ value }>
            { children }
        </PlacesContext.Provider>
    )
}

export const useCityContext = () => { 
    const contexto = useContext(PlacesContext); 
    if (!contexto) { 
        throw new Error('useCityContext debe estar dentro del proveedor PlacesContext'); 
    } 
    return contexto; 
}



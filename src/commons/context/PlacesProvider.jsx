
import { useState, useEffect, useMemo, useContext} from "react"
import { useFetchInfo } from "../hooks/useFetchInfo";
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [placesArray, setPlacesArray] = useState([]);
    const [placeRecord, setPlaceRecord] = useState('');
    const [language, setLanguage] = useState('ES');

    const { 
        getInfo: getInfoFetch, 
        info: infoFetch, 
        isLoading, 
        placeInfo 
    } = useFetchInfo();

    useEffect(() => {
        getInfoFetch( placeRecord );
    }, [placeRecord])

    useEffect(() => {
        if ( infoFetch ) {
            const findPlace = placesArray.find((place) => place['post code'] === infoFetch['post code'])
            if (findPlace) return;
            setPlacesArray([infoFetch, ...placesArray]);
        }
    }, [infoFetch])

    const value = useMemo(() => { 
        return { 
            placesArray, 
            setPlacesArray, 
            placeRecord, 
            setPlaceRecord,
            language,
            setLanguage,
            isLoading,
            placeInfo  
        }; 
    }, [placesArray, placeRecord, language, isLoading, placeInfo]);
   
    return (
        <PlacesContext.Provider value={ value }>
            { children }
        </PlacesContext.Provider>
    )
}

export const useCityContext = () => { 
    const contexto = useContext(PlacesContext); 
    if (!contexto) { 
        throw new Error('useMode debe estar dentro del proveedor ModeContext'); 
    } 
    return contexto; 
}



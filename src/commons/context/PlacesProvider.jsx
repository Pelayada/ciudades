
import { useState , useMemo, useContext} from "react"
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [placesArray, setPlacesArray] = useState([]);
    const [placeRecord, setPlaceRecord] = useState('');

    const value = useMemo(() => { 
        return { 
            placesArray, 
            setPlacesArray, 
            placeRecord, 
            setPlaceRecord  
        }; 
    }, [placesArray, placeRecord]);
   
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



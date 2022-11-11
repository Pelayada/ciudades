
import { useState } from "react"
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [placesArray, setPlacesArray] = useState([]);
    const [placeRecord, setPlaceRecord] = useState('');

    const value = { 
        placesArray, 
        setPlacesArray, 
        placeRecord, 
        setPlaceRecord 
    }
   
    return (
        <PlacesContext.Provider value={ value }>
            { children }
        </PlacesContext.Provider>
    )
}



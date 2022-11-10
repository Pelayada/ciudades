
import { useState } from "react"
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [placesArray, setPlacesArray] = useState([]);
    const [placeRecord, setPlaceRecord] = useState('')

    return (
        <PlacesContext.Provider value={{ placesArray, setPlacesArray, placeRecord, setPlaceRecord }}>
            { children }
        </PlacesContext.Provider>
    )
}
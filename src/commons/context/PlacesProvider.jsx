import { useState } from "react"
import { PlacesContext } from "./PlacesContext"

export const PlacesProvider = ({ children }) => {

    const [placesArray, setPlacesArray] = useState();

    return (
        <PlacesContext.Provider value={{ placesArray, setPlacesArray }}>
            { children }
        </PlacesContext.Provider>
    )
}
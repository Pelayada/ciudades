import { useContext } from 'react';
import { Link } from "react-router-dom";

import { PlacesContext } from '../commons/context/PlacesContext';
import { updatePlace } from '../commons/utils/updatePlace';

export const RecordPage = () => {
  const { placesArray, setPlaceRecord } = useContext( PlacesContext );  

  return (
    <div className='cardsRecords'>
      { placesArray?.map((place) => {
        const firstPlace = place.places[0];
        const postCode = place['post code'];
        return(
          <Link to='/' key={ postCode } onClick={ (e) => updatePlace(e, setPlaceRecord) }>
            <div className='cardRecord'>
              <span>{ postCode }</span>
              <p>{`${firstPlace['place name']} (${firstPlace.state})`}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

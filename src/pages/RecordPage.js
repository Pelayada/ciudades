import { useContext } from 'react';
import { Link } from "react-router-dom";

import { PlacesContext } from '../commons/context/PlacesContext';

export const RecordPage = () => {
  const { placesArray } = useContext( PlacesContext );  
  console.log('placesArray', placesArray)

  return (
    <div className='cardsRecords'>
      {placesArray?.map((place) => {
        const firstPlace = place.places[0];
        return(
          <Link to='/' key={place['post code']}>
            <div className='cardRecord'>
              <span>{ place['post code'] }</span>
              <p>{`${firstPlace['place name']} (${firstPlace.state})`}</p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

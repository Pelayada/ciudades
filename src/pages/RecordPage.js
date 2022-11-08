import { useContext } from 'react';

import { PlacesContext } from '../commons/context/PlacesContext';
import { CardRecord } from '../components/CardRecord';

export const RecordPage = () => {
  const { placesArray, setPlaceRecord } = useContext( PlacesContext );  

  return (
    <div className='cardsRecords'>
      { placesArray?.map((place) => {
        const firstPlace = place.places[0];
        const postCode = place['post code'];
        return(
          <CardRecord firstPlace={ firstPlace } postCode={ postCode } setPlaceRecord={ setPlaceRecord }/>
        )
      })}
    </div>
  )
}

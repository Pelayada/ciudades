
import { useCityContext } from '../commons/context/PlacesProvider';
import { CardRecord } from '../components/CardRecord';

export const RecordPage = () => {
  const { placesArray } = useCityContext();  

  return (
    <div className='cardsRecords'>
      { placesArray?.map((place) => {
        const firstPlace = place.places[0];
        const postCode = place['post code'];
        return(
          <CardRecord 
            key={ postCode } 
            firstPlace={ firstPlace } 
            postCode={ postCode } />
        )
      })}
    </div>
  )
}

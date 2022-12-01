
import { useCityContext } from '../commons/context/PlacesProvider';
import { CardRecord } from '../components/CardRecord';

export const RecordPage = () => {
  const { placesArray } = useCityContext();  

  return (
    <div className='cardsRecords'>
      { placesArray?.map((place) => {
        console.log('place', place)
        const firstPlace = place.data.places[0];
        const postCode = place.data['post code'];
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


import { useState, useContext, useEffect } from 'react';

import { useFetchInfo } from '../commons/hooks/useFetchInfo';
import { PlacesContext } from '../commons/context/PlacesContext';

import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';
import { GeographicInformation } from '../components/GeographicInformation';
import { GeneralCard } from '../components/GeneralCard';
import { GraphicCard  } from '../components/GraphicCard';
import { Loading } from '../components/Loading';

export const HomePage = () => {

  const [ postalCode, setPostalCode ] = useState('');
  const { info, isLoading } = useFetchInfo( postalCode );
  const { placeRecord } = useContext( PlacesContext );

  const onAddPostalCode = ( newCode ) => {
    setPostalCode(newCode);
  } 

  useEffect(() => {
    setPostalCode(placeRecord)
  }, [placeRecord])

  console.log('isLoading', isLoading)


  return (
    <div className='home'>
        <AddPostalCode 
            onNewCode={ (value) => onAddPostalCode(value) }
        />
        { info && (
          <>
            <GeneralCard title={ 'Información política' }>
              <PoliticalInformation info={ info } />
            </GeneralCard>
            <GeneralCard title={ 'Información meteorológica' }>
              <GraphicCard info={ info } />
            </GeneralCard>
            <GeneralCard title={ 'Información geográfica' }>
              <GeographicInformation info={ info } />
            </GeneralCard>
          </> 
        )}
        { isLoading && <Loading />}
    </div>
  )
}

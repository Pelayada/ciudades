
import { useState } from 'react';

import { useFetchInfo } from '../commons/hooks/useFetchInfo';

import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';
import { GeographicInformation } from '../components/GeographicInformation';
import { GeneralCard } from '../components/GeneralCard';

export const HomePage = () => {

  const [ postalCode, setPostalCode ] = useState('');
  const { info, isLoading } = useFetchInfo( postalCode );

  const onAddPostalCode = ( newCode ) => {
    setPostalCode(newCode);
  } 

  return (
    <>
        <AddPostalCode 
            onNewCode={ (value) => onAddPostalCode(value) }
        />
        { !isLoading ? 
          <>
            <GeneralCard title={ 'Información política' }>
              <PoliticalInformation info={ info } />
            </GeneralCard>
            <GeneralCard title={ 'Información geográfica' }>
              <GeographicInformation info={ info } />
            </GeneralCard>
          </> :
          <div className='loading' >
            <img src={require('../assets/images/miscalenea/loading.gif')} className='imageLoading' />
          </div>
        }
    </>
  )
}

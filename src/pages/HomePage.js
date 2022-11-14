
import { useFetchInfo } from '../commons/hooks/useFetchInfo';

import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';
import { GeographicInformation } from '../components/GeographicInformation';
import { GeneralCard } from '../components/GeneralCard';
import { GraphicCard  } from '../components/GraphicCard';
import { Loading } from '../components/Loading';

export const HomePage = () => {

  const { info, isLoading } = useFetchInfo();

  return (
    <div className='home'>
        <AddPostalCode isLoading={ isLoading } />
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
        { isLoading && <Loading /> }
    </div>
  )
}

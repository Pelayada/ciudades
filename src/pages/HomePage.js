
import { useFetchInfo } from '../commons/hooks/useFetchInfo';
import { useChangeText } from '../commons/hooks/useChangeText';

import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';
import { GeographicInformation } from '../components/GeographicInformation';
import { GeneralCard } from '../components/GeneralCard';
import { GraphicCard  } from '../components/GraphicCard';
import { Loading } from '../components/Loading';

export const HomePage = () => {

  const { info, isLoading } = useFetchInfo();
  const polInfo = useChangeText("politicalInformation");
  const meteoInfo = useChangeText("weatherInformation");
  const geoInfo = useChangeText("geographicInformation");


  return (
    <div className='home'>
        <AddPostalCode isLoading={ isLoading } />
        { info && (
          <>
            <GeneralCard title={ polInfo }>
              <PoliticalInformation info={ info } />
            </GeneralCard>
            <GeneralCard title={ meteoInfo }>
              <GraphicCard info={ info } />
            </GeneralCard>
            <GeneralCard title={ geoInfo }>
              <GeographicInformation info={ info } />
            </GeneralCard>
          </> 
        )}
        { isLoading && <Loading /> }
    </div>
  )
}

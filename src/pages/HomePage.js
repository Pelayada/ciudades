
import { useCityContext } from '../commons/context/PlacesProvider';
import { useChangeText } from '../commons/hooks/useChangeText';

import { AddPostalCode } from '../components/AddPostalCode';
import { PoliticalInformation } from '../components/PoliticalInformation';
import { GeographicInformation } from '../components/GeographicInformation';
import { GeneralCard } from '../components/GeneralCard';
import { GraphicCardManual  } from '../components/GraphicCardManual';
import { Loading } from '../components/Loading';

export const HomePage = () => {

  const { placeInfo, isLoading } = useCityContext();

  const polInfo = useChangeText("politicalInformation");
  const meteoInfo = useChangeText("weatherInformation");
  const geoInfo = useChangeText("geographicInformation");

  return (
    <div className='home'>
        <AddPostalCode isLoading={ isLoading } />
        { ( placeInfo && !isLoading ) && (
          <>
            <GeneralCard title={ polInfo }>
              <PoliticalInformation info={ placeInfo } />
            </GeneralCard>
            <GeneralCard title={ meteoInfo }>
              <GraphicCardManual info={ placeInfo } />
            </GeneralCard>
            <GeneralCard title={ geoInfo }>
              <GeographicInformation info={ placeInfo } />
            </GeneralCard>
          </> 
        )}
        { isLoading && <Loading /> }
    </div>
  )
}

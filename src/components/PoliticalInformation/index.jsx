import { useState } from 'react';
import { useFetchInfo } from '../../commons/hooks/useFetchInfo';

import './styles.css';

export const PoliticalInformation = ({ postalCode }) => {
    const [content, setContent] = useState(true);
    const { info, isLoading } = useFetchInfo( postalCode );

    const name = info["place name"];
    const { state } = info;
    const abbreviation = info['state abbreviation'] || 'O';
    const handleInfo = () => setContent(!content);

    return (
        <div className='politicalCard'>
            <div className='headerCard'>
                <button onClick={ handleInfo }>X</button>
            </div>
            { content && (
                <div className='infoCard'>
                    <img src={require(`../../assets/images/flags/${abbreviation}.gif`) || ''} alt='bandera' className='flagImage' />
                    <div className='textCard'>
                        <p>Ciudad: { name }</p>
                        <p>Comunidad: { state }</p>
                    </div>
                </div>
            )}
        </div>
    )
}

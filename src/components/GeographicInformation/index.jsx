
import PropTypes from 'prop-types';

import { useChangeText } from '../../commons/hooks/useChangeText';
import { TextCard } from '../TextCard';

import './styles.css';

export const GeographicInformation = ({ info }) => {

    const { longitude, latitude } = info;
    const zoom = 13;
    const url = `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`;

    const latitudeWord = useChangeText('latitude');
    const longitudeWord = useChangeText('longitude');
    const map = useChangeText('map');


    return (
        <div className='infoGeo'>
            <TextCard firstLine={[`${latitudeWord}: `, latitude]} secondLine={[`${longitudeWord}: `, longitude]} />
            <a target="_blank" rel="noreferrer" href={ url }>
                <img 
                    src={require(`../../assets/images/miscalenea/mapa.png`)} 
                    alt={ map } 
                    className='flagImage' />
            </a>
        </div>
    )
}

GeographicInformation.propTypes = {
    info: PropTypes.object.isRequired
};

import PropTypes from 'prop-types';

import { useChangeText } from '../../commons/hooks/useChangeText';
import { TextCard } from '../TextCard';
import './styles.css';

export const PoliticalInformation = ({ info }) => {

    const { state } = info || {};
    let name;
    let abbreviation = 'O';

    if ( info ) {
        name = info['place name'];
        abbreviation = info['state abbreviation'];
    }

    const city = useChangeText('city');
    const stateWord = useChangeText('state');
    const flag = useChangeText('flag');

    return (
        <div className='political'>
            <img 
                src={require(`../../assets/images/flags/${abbreviation}.gif`)} 
                alt={ flag } 
                className='flagImage' />
            <TextCard firstLine={[`${city}: `, name]} secondLine={[`${stateWord}: `, state]} />
        </div>
    )
}

PoliticalInformation.propTypes = {
    info: PropTypes.object.isRequired
};
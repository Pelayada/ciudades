
import { useChangeText } from '../../commons/hooks/useChangeText';
import { TextCard } from '../TextCard';
import './styles.css';

export const PoliticalInformation = ({ info }) => {
    
    const { state } = info;
    const name = info['place name'];
    const abbreviation = info['state abbreviation'];

    const city = useChangeText('city');
    const stateWord = useChangeText('state');
    const flag = useChangeText('flag');

    return (
        <>
            <img 
                src={require(`../../assets/images/flags/${abbreviation}.gif`)} 
                alt={ flag } 
                className='flagImage' />
            <TextCard firstLine={[`${city}: `, name]} secondLine={[`${stateWord}: `, state]} />
        </>
    )
}


import { TextCard } from '../TextCard';
import './styles.css';

export const PoliticalInformation = ({ info }) => {
    
    const { state } = info;
    const name = info['place name'];
    const abbreviation = info['state abbreviation'];

    return (
        <>
            <img 
                src={require(`../../assets/images/flags/${abbreviation}.gif`)} 
                alt='bandera' 
                className='flagImage' />
            <TextCard firstLine={['Ciudad: ', name]} secondLine={['Comunidad: ', state]} />
        </>
    )
}


import './styles.css';

export const PoliticalInformation = ({ info }) => {
    
    const { state } = info;
    const name = info["place name"];
    const abbreviation = info['state abbreviation'];

    return (
        <>
            <img 
                src={require(`../../assets/images/flags/${abbreviation}.gif`)} 
                alt='bandera' 
                className='flagImage' />
            <div className='textCard'>
                <p><span className='wordBold'>Ciudad: </span>{ name }</p>
                <p><span className='wordBold'>Comunidad: </span>{ state }</p>
            </div>
        </>
    )
}

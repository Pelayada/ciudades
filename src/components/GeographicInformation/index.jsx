
import './styles.css';

export const GeographicInformation = ({ info }) => {

    const { longitude, latitude } = info;
    const zoom = 13;
    const url = `https://www.google.com/maps/@${latitude},${longitude},${zoom}z`;

    return (
        <div className='infoGeo'>
            <div className='textCard'>
                <p><span className='wordBold'>Latitud: </span>{ latitude }</p>
                <p><span className='wordBold'>Longitud: </span>{ longitude }</p>
            </div>
            <a target="_blank" rel="noreferrer" href={ url }>
                <img 
                    src={require(`../../assets/images/miscalenea/mapa.png`)} 
                    alt='mapa' 
                    className='flagImage' />
            </a>
        </div>
    )
}

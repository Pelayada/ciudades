
import PropTypes from 'prop-types';

import { useFetchMeteo } from '../../commons/hooks/useFetchMeteo';

import './styles.css';

export const GraphicCardManual = ({ info }) => {

    const { chartTime, chartMeteo } = useFetchMeteo( info );

    const minTemp = parseInt(Math.min(...chartMeteo));
    const maxTemp = parseInt(Math.max(...chartMeteo));

    return (
        <div className='graphicGeneral'>
            <div className='graphicWithLabel'>
                <div className='labelMeteo'>
                    <span>{ `${ maxTemp }ºC` }</span>
                    <span>{ `${ minTemp }ºC` }</span>
                </div>
                <div className='graphicBox'>
                    { chartMeteo.map(( meteo, i ) => <div key={ i } style={{ height: `${ meteo*10 }px`}}></div>) }
                </div>
            </div>
            <div className='labelTime'>
                { chartTime.map(( time, i ) => <div key={ i }>{ time }</div>) }
            </div>
        </div>
    )
}

GraphicCardManual.propTypes = {
    info: PropTypes.object
};
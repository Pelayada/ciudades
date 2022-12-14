
import PropTypes from 'prop-types';

import './styles.css';

export const TextCard = ({ firstLine, secondLine }) => {

    const [ spanFirstLine, nameFirstLine ] = firstLine;
    const [ spanSecondLine, nameSecondLine ] = secondLine;

    return (
        <div className='textCard'>
            <p><span className='wordBold'>{ spanFirstLine }</span>{ nameFirstLine }</p>
            <p><span className='wordBold'>{ spanSecondLine }</span>{ nameSecondLine }</p>
        </div>
    )
}

TextCard.propTypes = {
    firstLine: PropTypes.array.isRequired,
    secondLine: PropTypes.array.isRequired,
};
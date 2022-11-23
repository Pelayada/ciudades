
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useCityContext } from '../../commons/context/PlacesProvider';
import { updatePlace } from '../../commons/utils/updatePlace';
import './styles.css';

export const CardRecord = ({ firstPlace, postCode }) => {

  const { setPlaceRecord } = useCityContext();  

  return (
    <Link to='/' onClick={ (e) => updatePlace(e, setPlaceRecord) }>
        <div className='cardRecord'>
            <span>{ postCode }</span>
            <p>{`${firstPlace['place name']} (${firstPlace.state})`}</p>
        </div>
    </Link>
  )
}

CardRecord.propTypes = {
  firstPlace: PropTypes.object.isRequired,
  postCode: PropTypes.string.isRequired
};

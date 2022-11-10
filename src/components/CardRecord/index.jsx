
import { Link } from "react-router-dom";

import { updatePlace } from '../../commons/utils/updatePlace';
import './styles.css';

export const CardRecord = ({ firstPlace, postCode, setPlaceRecord}) => {
  return (
    <Link to='/' onClick={ (e) => updatePlace(e, setPlaceRecord) }>
        <div className='cardRecord'>
            <span>{ postCode }</span>
            <p>{`${firstPlace['place name']} (${firstPlace.state})`}</p>
        </div>
    </Link>
  )
}

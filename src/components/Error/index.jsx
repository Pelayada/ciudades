
import { useCityContext } from '../../commons/context/PlacesProvider';
import './styles.css';

export const Error = () => {
    const { error, errorFetch } = useCityContext();

    return (
        <div className='errorInput'>
            <span id='errorInput'>{ error || errorFetch}</span>
        </div>
    )
}

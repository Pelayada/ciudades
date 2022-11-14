
import { useCityContext } from '../../commons/context/PlacesProvider';
import './styles.css';

export const ChangeLanguage = () => {

    const { setLanguage } = useCityContext();

    const changeLanguage = (e) => {
        if (e.target.textContent === 'ES') {
            setLanguage('ES');
        } else if (e.target.textContent === 'EN') {
            setLanguage('EN');
        }
    }
    return (
        <ul className='buttonLanguage'>
            <button onClick={changeLanguage}>ES</button>
            <button onClick={changeLanguage}>EN</button>
        </ul>
    )
}

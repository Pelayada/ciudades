
import { useCityContext } from '../context/PlacesProvider';
import text from '../../config/literales.json';

export const useChangeText = ( id ) => {
    const { language } = useCityContext();
   
    for (const key in text) {
        if (key === id) {
            return text[key][language];
        }
    }
}

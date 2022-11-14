
import { useState } from 'react';
import { useCityContext } from '../context/PlacesProvider';

export const useInput = () => {
    const { setPlaceRecord } = useCityContext();
    const [ inputValue, setInputValue ] = useState('');
    const [ error, setError ] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        const code = parseInt(inputValue) || inputValue;

        if (inputValue.length < 1) {
            setError('Se debe introducir un código postal.');
            setInputValue('');
            return;
        } else if (typeof code === 'string') {
            setError('El código postal debe ser númerico.');
            setInputValue('');
            return;
        } else if (inputValue.toString().length !== 5) {
            setError('Debe contener 5 cifras.');
            setInputValue('');
            return;
        }
        setPlaceRecord( inputValue );
        setInputValue('');
        setError('');    
    }

    return {
        onInputChange,
        onSubmit,
        error,
        inputValue
    }
}

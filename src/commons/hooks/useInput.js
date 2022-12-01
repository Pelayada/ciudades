
import { useState } from 'react';
import { useCityContext } from '../context/PlacesProvider';
import { useChangeText } from '../hooks/useChangeText';

export const useInput = () => {
    const { setPlaceRecord, setError } = useCityContext();
    const [ inputValue, setInputValue ] = useState('');

    const errorEmpty = useChangeText("errorEmpty");
    const errorString = useChangeText("errorString");
    const errorDigits = useChangeText("errorDigits");

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        const code = parseInt(inputValue) || inputValue;

        if (inputValue.length < 1) {
            setError( errorEmpty );
            setInputValue('');
            return;
        } else if (typeof code === 'string') {
            setError( errorString );
            setInputValue('');
            return;
        } else if (inputValue.toString().length !== 5) {
            setError( errorDigits );
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
        inputValue
    }
}

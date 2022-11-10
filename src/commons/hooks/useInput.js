
import { useState } from 'react';

export const useInput = ( onNewCode ) => {
    const [ inputValue, setInputValue ] = useState('');
    const [ error, setError ] = useState('');
    
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }
    
    const onSubmit = ( event ) => {
        event.preventDefault();
        const code = parseInt(inputValue) || inputValue;
    
        if (code.length < 1) {
            setError('Se debe introducir un código postal.');
            setInputValue('');
            return;
        } else if (typeof code === 'string') {
            setError('El código postal debe ser númerico.');
            setInputValue('');
            return;
        } else if (code.toString().length !== 5) {
            setError('Debe contener 5 cifras.');
            setInputValue('');
            return;
        }
        onNewCode( code );
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


import { useState } from 'react';

import './styles.css';

export const AddPostalCode = ({ onNewCode }) => {

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

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ onInputChange }
                    className='inputText'
                />
                <input type="submit" value="Buscar" className='inputSubmit' />
            </form>
            <span className='errorInput' id='errorInput'>{error}</span>
        </>
    )
}

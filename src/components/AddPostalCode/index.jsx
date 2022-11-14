
import { useInput } from '../../commons/hooks/useInput';
import './styles.css';

export const AddPostalCode = ({ isLoading }) => {

    const {
        onInputChange,
        onSubmit,
        error,
        inputValue
    } = useInput()

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ onInputChange }
                    className='inputText'
                />
                { !isLoading && <input type="submit" value="Buscar" className='inputSubmit' /> }
            </form>
            <span className='errorInput' id='errorInput'>{error}</span>
        </>
    )
}

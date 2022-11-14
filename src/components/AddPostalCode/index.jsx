
import { useChangeText } from '../../commons/hooks/useChangeText';
import { useInput } from '../../commons/hooks/useInput';
import './styles.css';

export const AddPostalCode = ({ isLoading }) => {

    const {
        onInputChange,
        onSubmit,
        error,
        inputValue
    } = useInput()

    const valueButton = useChangeText("searchButton");

    return (
        <>
            <form onSubmit={ onSubmit }>
                <input 
                    type="text"
                    value={ inputValue }
                    onChange={ onInputChange }
                    className='inputText'
                />
                { !isLoading && <input type="submit" value={ valueButton } className='inputSubmit' /> }
            </form>
            <span className='errorInput' id='errorInput'>{error}</span>
        </>
    )
}

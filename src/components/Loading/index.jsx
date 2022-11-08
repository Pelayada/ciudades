
import './styles.css';

export const Loading = () => {
  return (
    <div className='loading' >
        <img 
            src={require('../../assets/images/miscalenea/loading.gif')} 
            className='imageLoading' 
            alt='Cargando...' />
    </div>
  )
}

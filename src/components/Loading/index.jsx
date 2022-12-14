
import { useChangeText } from '../../commons/hooks/useChangeText';

import './styles.css';

export const Loading = () => {

  const loading = useChangeText('loading');

  return (
    <div className='loading' >
        <img 
            src={require('../../assets/images/miscalenea/loading.gif')} 
            className='imageLoading' 
            alt={ loading } />
    </div>
  )
}

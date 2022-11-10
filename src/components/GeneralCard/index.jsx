
import { useState } from 'react'

import './styles.css';

export const GeneralCard = ({ title, children }) => {

    const [content, setContent] = useState(true);
    const handleInfo = () => setContent(!content);
    const figureButton = !content ? '▢' : '_';

    return (
        <div className='generalCard'>
            <div className='headerCard'>
                <h2>{ title }</h2>
                <button onClick={ handleInfo }>{ figureButton }</button>
            </div>
            { content && (
                <div className='infoCard'>
                    { children }
                </div>
            )}
        </div>
    )
}

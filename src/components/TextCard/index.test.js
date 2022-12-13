
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { TextCard } from './index.jsx';

describe( 'Test component TextCard', () => {
    let container;
    let firstLine = ['Ciudad: ', 'San Juan de la Arena'];
    let secondLine = ['Comunidad ', 'Asturias'];

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render TextCard', () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            ReactDOM.createRoot(container).render(<TextCard firstLine={firstLine} secondLine={secondLine} />);
        });
        const textCard = container.querySelector('p');
        expect(textCard.textContent).toBe('Ciudad: San Juan de la Arena');
        
    });
})

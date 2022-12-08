
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { Loading } from './index.jsx';
import { useChangeText } from '../../commons/hooks/useChangeText';

jest.mock('../../commons/hooks/useChangeText', () => ({
    useChangeText : jest.fn()
}))

describe( 'Test component Loading', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render Loading', () => {
        useChangeText.mockImplementation(() => {
            return 'Cargando...'
        })
        act(() => {
            ReactDOM.createRoot(container).render(<Loading />);
        });
        const loading = container.querySelector('.loading');
        expect(loading).not.toBeNull();
    });
})

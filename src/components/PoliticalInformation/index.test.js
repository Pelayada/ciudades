
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { PoliticalInformation } from './index.jsx';
import { useChangeText } from '../../commons/hooks/useChangeText';

jest.mock('../../commons/hooks/useChangeText', () => ({
    useChangeText : jest.fn()
}))

describe( 'Test component PoliticalInformation', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render img PoliticalInformation', () => {
        const props = {
            "place name": "La Arena (Soto Del Barco)",
            state: "Asturias",
            "state abbreviation": "M",
        }
       
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            ReactDOM.createRoot(container).render(
            <PoliticalInformation info={props} />);
        });
        const political = container.querySelector('img');
        expect(political.getAttribute("src")).toEqual('M.gif');
    });

    it('not can render img PoliticalInformation', () => {
        const props = {}
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            ReactDOM.createRoot(container).render(<PoliticalInformation info={props} />);
        });
        const political = container.querySelector('img');
        expect(political.innerHTML).toEqual('');
    });
})

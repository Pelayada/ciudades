
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
    let props;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render PoliticalInformation', () => {
        props = {
            "place name": "La Arena (Soto Del Barco)",
            longitude: "-6.0667",
            state: "Asturias",
            "state abbreviation": "O",
            "latitude": "43.5333"
        }
        act(() => {
            ReactDOM.createRoot(container).render(<PoliticalInformation props={props} />);
        });
        const political = container.querySelector('.political');
        expect(political).not.toBeNull();
    });
})

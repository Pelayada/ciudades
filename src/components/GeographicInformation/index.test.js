
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { GeographicInformation } from './index.jsx';
import { useChangeText } from '../../commons/hooks/useChangeText';

jest.mock('../../commons/hooks/useChangeText', () => ({
    useChangeText : jest.fn()
}))

describe( 'Test component GeographicInformation', () => {
    let container;

    beforeEach(() => {
      container = document.createElement('div');
      document.body.appendChild(container);
    });
    
    afterEach(() => {
      document.body.removeChild(container);
      container = null;
    });
    
    it('can render a GeographicInformation', () => {
        const props = {
          "place name": "La Arena (Soto Del Barco)",
          longitude: "-6.0667",
          state: "Asturias",
          "state abbreviation": "M",
          "latitude": "43.5333"
        }
       
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            ReactDOM.createRoot(container).render(
            <GeographicInformation info={props} />);
        });
        const political = container.querySelector('a');
        expect(political.getAttribute("href")).toEqual('https://www.google.com/maps/@43.5333,-6.0667,13z');
    });

})
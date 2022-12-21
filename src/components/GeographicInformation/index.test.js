
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
        const geo = container.querySelector('a');
        expect(geo.getAttribute("href")).toEqual('https://www.google.com/maps/@43.5333,-6.0667,13z');
    });

    it('can render img GeographicInformation', () => {
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
      const geo = container.querySelector('img');
      expect(geo.getAttribute("src")).toEqual('mapa.png');
    });

    it('not can render PoliticalInformation', () => {
      const props = undefined;
      // eslint-disable-next-line testing-library/no-unnecessary-act
      act(() => {
          ReactDOM.createRoot(container).render(<GeographicInformation info={props} />);
      });
      expect(container.innerHTML).toEqual('');
  });
})
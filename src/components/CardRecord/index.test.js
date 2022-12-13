
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { CardRecord } from './index.jsx';
import { useCityContext } from '../../commons/context/PlacesProvider';

jest.mock('../../commons/context/PlacesProvider', () => ({
  useCityContext : jest.fn()
}))

const props = {
  "place name": "La Arena (Soto Del Barco)",
  state: "Asturias",
  "state abbreviation": "M",
}

describe( 'Test component CardRecord', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render CardRecord with info', () => {
    useCityContext.mockImplementation(() => {
      return {
        setPlaceRecord: () => {},
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(
        <Router>
          <CardRecord 
            firstPlace={props}
            postCode={'33125'} />
        </Router>);
    });
    const cardRecord = container.querySelector('.cardRecord span');
    expect(cardRecord.textContent).toBe('33125');
  });

  it('can render CardRecord Link', () => {
    useCityContext.mockImplementation(() => {
      return {
        setPlaceRecord: () => {},
      }
    })
     // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(
        <Router>
          <CardRecord 
            firstPlace={props}
            postCode={'33125'} />
        </Router>);
    });
    const link = container.querySelector("a");

    act(() => {
      link.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(useCityContext).toHaveBeenCalledTimes(1);
  });
})

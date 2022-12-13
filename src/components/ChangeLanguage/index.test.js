
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import { ChangeLanguage } from './index.jsx';
import { useCityContext } from '../../commons/context/PlacesProvider';

jest.mock('../../commons/context/PlacesProvider', () => ({
  useCityContext : jest.fn()
}))

describe( 'Test component ChangeLanguage', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('can render ChangeLanguage button', () => {
    useCityContext.mockImplementation(() => {
      return {
        setLanguage: () => {return 'ES'},
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<ChangeLanguage />);
    });
    const buttonLanguage = container.querySelector('.buttonLanguage');
    expect(buttonLanguage.textContent).toBe('ESEN');
  });

  it('can render ChangeLanguage button ES', () => {
    useCityContext.mockImplementation(() => {
      return {
        setLanguage: () => { return 'ES' },
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      ReactDOM.createRoot(container).render(<ChangeLanguage />);
    });
    const button = container.querySelector("button");

    act(() => {
      button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(useCityContext).toBeCalled();

  });

  it('can render ChangeLanguage button EN', () => {
    useCityContext.mockImplementation(() => {
      return {
        setLanguage: () => { return 'EN' },
      }
    })
    // eslint-disable-next-line testing-library/no-unnecessary-act
   act(() => {
      ReactDOM.createRoot(container).render(<ChangeLanguage />);
    });
    const toggle = container.querySelector("[data-testid=toggle]");
  
    act(() => {
      toggle.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
  
    expect(useCityContext).toHaveBeenCalledTimes(1);
  });
})